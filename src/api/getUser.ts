import type { User } from "../types/User";

type getUserFields = {
  user: User
};

const github_data = {
  token: import.meta.env.VITE_GITHUB_API_ACESS_TOKEN,
  username: import.meta.env.VITE_GITHUB_USER_PROFILE,
};

const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + github_data.token,
};
const body = {
  query: `
query {
  user(login: "${github_data["username"]}"){
    name
    url
    avatarUrl
    company
    bio
    status{
      emoji
      emojiHTML
      message
    }
    starredRepositories{
      totalCount
    }
    location
    websiteUrl
    repositories(first: 100){
      totalCount
      nodes{
        name
        createdAt
        description
        url
        
      }
    }
    
  }
}
  `,
};

export async function getUser(): Promise<getUserFields> {
  return new Promise<getUserFields>(async (resolve, reject) => {
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
      
      const user = (data.data.user)
      const userStatus = user.status

      resolve({
        user: {
          name: user.name,
          avatar_url: user.avatarUrl,
          bio: user.bio,
          html_url: user.url,
          public_repos: user.repositories.totalCount,
          location: user.location,
          company: user.company,
          blog: user.websiteUrl,
          status: {
            emoji: userStatus.emojiHTML,
            message: userStatus.message
          }
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
