import { useEffect } from "react";
import { githubStore } from "../store/githubStore";

// Environment variables for GitHub API
const githubAvatarUrl = import.meta.env.VITE_GITHUB_URL_AVATAR;
const githubCommitCountUrl = import.meta.env.VITE_GITHUB_URL_COMMIT_COUNT;

export default function useGithubHooks() {
  const setGithubData = githubStore((state) => state.setGithubData);

  useEffect(() => {
    async function fetchGithubData() {
      // Fetch avatar
      const userRes = await fetch(githubAvatarUrl);
      const userData = await userRes.json();

      // Fetch commit count
      const eventsRes = await fetch(githubCommitCountUrl);
      const events = await eventsRes.json();
      const pushEvents = events.filter((e) => e.type === "PushEvent");
      const commitCount = pushEvents.reduce(
        (sum, e) => sum + e.payload.commits.length,
        0,
      );

      setGithubData({
        avatar: userData.avatar_url,
        commitCount,
      });
      console.log(userData.avatar_url, commitCount);
    }
    fetchGithubData().catch((error) => {
      console.error("Error fetching GitHub data:", error);
    });
  }, [setGithubData]);
}
