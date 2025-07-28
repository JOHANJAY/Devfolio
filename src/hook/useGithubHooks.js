import { useEffect } from "react";
import { githubStore } from "../store/githubStore";

// Environment variables for GitHub API
const githubAvatarUrl = import.meta.env.VITE_GITHUB_URL_AVATAR;


export default function useGithubHooks() {
  const setGithubData = githubStore((state) => state.setGithubData);

  useEffect(() => {
    async function fetchGithubData() {
      // Fetch avatar
      const userRes = await fetch(githubAvatarUrl);
      const userData = await userRes.json();
 
      setGithubData({
        avatar: userData.avatar_url,
        publicRepos: userData.public_repos
        
      });
      console.log(userData.avatar_url);
    }
    fetchGithubData().catch((error) => {
      console.error("Error fetching GitHub data:", error);
    });
  }, [setGithubData]);
}
