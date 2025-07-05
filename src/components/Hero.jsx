import useGithubHooks from "../hook/useGithubHooks";
import { githubStore } from "../store/githubStore";

const Hero = () => {
  useGithubHooks(); // Initialize GitHub hooks to fetch data
  const { avatar, commitCount } = githubStore();
  return (
    <div className="flex items-center space-x-4">
      {avatar && (
        <img
          src={avatar}
          alt="GitHub Avatar"
          className="border-retroBlue h-12 w-12 rounded-full border-2"
        />
      )}
      <div>
        <div className="font-retro text-lg">GitHub Commits (recent):</div>
        <div className="text-retroBlue text-xl font-bold">
          {commitCount !== null ? commitCount : "Loading..."}
        </div>
      </div>
    </div>
  );
};
export default Hero;
