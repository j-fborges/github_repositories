type getUserFields = {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  public_repos: number;
  location: string;
  company: string;
  blog: string;
};

export async function getUser(): Promise<getUserFields> {
  return new Promise<getUserFields>(async (resolve, reject) => {
    try {
      const response = await fetch("https://api.github.com/users/j-fborges");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: getUserFields = await response.json();

      resolve({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        html_url: data.html_url,
        public_repos: data.public_repos,
        location: data.location,
        company: data.company,
        blog: data.blog,
      });
    } catch (error) {
      reject(error);
    }
  });
}
