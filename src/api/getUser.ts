import type { User } from "../types/User";

type getUserFields = {
  user: User;
};

export const github_data = {
  token: import.meta.env.VITE_GITHUB_API_ACESS_TOKEN,
  username: import.meta.env.VITE_GITHUB_USER_PROFILE,
};

export const baseUrl = "https://api.github.com/graphql";
export const headers = {
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
    location
    websiteUrl
    projectsUrl
    socialAccounts(first: 10){
      totalCount
      nodes{
        url
        displayName
      }
    }    
  }
}
  `,
};

export async function getUser(): Promise<getUserFields> {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const user = data.data.user;
  const userStatus = user.status;

  return {
    user: {
      name: user.name,
      avatar_url: user.avatarUrl,
      bio: user.bio,
      html_url: user.url,
      location: user.location,
      company: user.company,
      blog: user.websiteUrl,
      instagram_url: user.socialAccounts.nodes[0].url,
      instagram_nickname: user.socialAccounts.nodes[0].displayName,
      status: {
        emoji: userStatus.emojiHTML,
        message: userStatus.message,
      },
    },
  };
}
