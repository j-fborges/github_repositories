import type { Repository, RepositoryList } from "../types/Repository";
import type { CategoryFilterInterface } from "./categoryFilterStore";
import { baseUrl, github_data, headers } from "./getUser";

export type GetRepositoriesFields = {
  publicReposList?: RepositoryList;
  starredReposList?: RepositoryList;
};

const body = {
  query: `
query {
  user(login: "${github_data["username"]}"){
    repositories(first: 100){
    totalCount
      nodes{
        isFork
        isMirror
        isArchived
        name
        createdAt
        description
        url
        nameWithOwner
        owner{
          login
        }
        forkCount
        stargazerCount
        languages{
          nodes{
            name
          }
        }
        primaryLanguage{
          name
        }
      }
    }
    starredRepositories{
      totalCount
      nodes{
        isFork
        isMirror
        isArchived
        name
        createdAt
        description
        url
        nameWithOwner
        owner{
          login
        }
        forkCount
        stargazerCount
        languages{
          nodes{
            name
          }
        }
          primaryLanguage{
          name
        }
      }
    }
  }
}
  `,
};

type GetRepositoriesFilters = {
  categoryFilterOn?: boolean;
  languageFilterOn?: boolean;
  languagesToFilter?: string[];
  categoriesToFilter?: CategoryFilterInterface;
  currentSearch?: string;
};

function containFilterString(stringToCheck: string, activeFilters: string[]) {
  return activeFilters.some((str) => stringToCheck === str);
}

function handleCategoryFilter(
  repoArray: Repository[],
  isFilterActive: boolean,
  categoriesToFilter: CategoryFilterInterface
): Repository[] {
  if (!isFilterActive) return repoArray;

  let filteredArraysSum: Repository[] = [];
  let filteredMirrorArray: Repository[] = [];
  let filteredForkArray: Repository[] = [];
  let filteredArchivedArray: Repository[] = [];
  let filteredSourceArray: Repository[] = [];

  if (categoriesToFilter.isArchived) {
    filteredArchivedArray = repoArray.filter((repo: Repository) => {
      return repo?.isArchived;
    });
    filteredArraysSum = filteredArraysSum.concat(filteredArchivedArray);
  }

  if (categoriesToFilter.isFork) {
    filteredForkArray = repoArray.filter((repo: Repository) => {
      return repo?.isFork;
    });
    filteredArraysSum = filteredArraysSum.concat(filteredForkArray);
  }

  if (categoriesToFilter.isMirror) {
    filteredMirrorArray = repoArray.filter((repo: Repository) => {
      return repo?.isMirror;
    });
    filteredArraysSum = filteredArraysSum.concat(filteredMirrorArray);
  }

  if (categoriesToFilter.isSource) {
    filteredSourceArray = repoArray.filter((repo: Repository) => {
      return !repo?.isFork && !repo?.isArchived && !repo?.isMirror;
    });
    filteredArraysSum = filteredArraysSum.concat(filteredSourceArray);
  }

  return filteredArraysSum;
}

function handleLanguageFilter(
  repoArray: Repository[],
  isFilterActive: boolean,
  languagesToFilter: string[]
): Repository[] {
  return !isFilterActive
    ? repoArray
    : repoArray.filter((repo: Repository) => {
        return containFilterString(
          repo?.primaryLanguage?.name || "",
          languagesToFilter
        );
      });
}

function handleSearch(
  repoArray: Repository[],
  currentSearch: string
):Repository[]{
  if (currentSearch.length < 1) return repoArray

  return repoArray.filter((repo)=>{

    return (repo.name).includes(currentSearch) || (repo.owner.login).includes(currentSearch)
  })
}

function handleFilters(
  repoArray: Repository[],
  languageFilterOn: boolean,
  categoryFilterOn: boolean,
  languagesToFilter: string[],
  categoriesToFilter: CategoryFilterInterface,
  currentSearch: string
): Repository[] {
  if (!languageFilterOn && !categoryFilterOn && currentSearch.length < 1) return repoArray;

  let filteredArray = handleLanguageFilter(
    repoArray,
    languageFilterOn,
    languagesToFilter
  );

  filteredArray =  handleCategoryFilter(
    filteredArray,
    categoryFilterOn,
    categoriesToFilter
  );

  filteredArray = handleSearch(filteredArray, currentSearch)

  return filteredArray
}

export async function getRepositories({
  categoryFilterOn = false,
  languageFilterOn = false,
  languagesToFilter = [],
  currentSearch='',
  categoriesToFilter = {
    isSource: false,
    isFork: false,
    isArchived: false,
    isMirror: false,
  },
}: GetRepositoriesFilters): Promise<GetRepositoriesFields> {
  return new Promise<GetRepositoriesFields>(async (resolve, reject) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const publicReposList: RepositoryList = {
        repos: handleFilters(
          data.data.user.repositories.nodes,
          languageFilterOn,
          categoryFilterOn,
          languagesToFilter,
          categoriesToFilter,
          currentSearch
        ),
        reposCount: data.data.user.repositories.totalCount,
      };
      const starredReposList: RepositoryList = {
        repos: handleFilters(
          data.data.user.starredRepositories.nodes,
          languageFilterOn,
          categoryFilterOn,
          languagesToFilter,
          categoriesToFilter,
          currentSearch
        ),
        reposCount: data.data.user.starredRepositories.totalCount,
      };

      resolve({
        publicReposList,
        starredReposList,
      });
    } catch (error) {
      reject(error);
    }
  });
}
