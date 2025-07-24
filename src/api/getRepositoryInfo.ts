import type { Repository } from "../types/Repository";
import { baseUrl, headers } from "./getUser";

export type GetRepositoryInfoFields = {
  repo: Repository;
};

export type GetRepoInfoProps = {
  owner: string;
  name: string;
};

export async function getRepoInfo({
  owner = "",
  name = "",
}: GetRepoInfoProps): Promise<GetRepositoryInfoFields> {
  const body = {
    query: `
query {
  repository(name:"${name}", owner:"${owner}"){
    name
    description
    owner{
      login
      avatarUrl
    }
    stargazerCount
    forkCount
    issues(first: 30){
      totalCount
      nodes{
        url
        title
        author{
          login
        }
      }
    }
  }
}
  `,
  };

  return new Promise<GetRepositoryInfoFields>(async (resolve, reject) => {
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

      const repo = data.data.repository;

      resolve({
        repo,
      });
    } catch (error) {
      reject(error);
    }
  });
}
