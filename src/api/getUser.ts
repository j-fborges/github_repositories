type getUserFields = {
  name: String;
  avatar_url: String;
  bio: String;
  html_url: String;
  public_repos: Number;
  location: String;
  company: String;
  blog: String;
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
