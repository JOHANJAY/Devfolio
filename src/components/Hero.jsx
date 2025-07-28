import useGithubHooks from "../hook/useGithubHooks";
import { githubStore } from "../store/githubStore";
import { RxPerson } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { GoRepo } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";

const contributionsUrl = import.meta.env.VITE_GITHUB_CONTRIBUTIONS_URL;

const Hero = () => {
  useGithubHooks(); // Initialize GitHub hooks to fetch data
  const { avatar, publicRepos } = githubStore();
  return (
    <section className="wrapper LG" id="hero">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col items-center space-y-6">
          {avatar && (
            <img
              src={avatar}
              alt="GitHub Avatar"
              className="h-auto w-56 rounded-full border"
            />
          )}
          <div className="flex items-center space-x-3">
            <RxPerson className="bg-retroBlue dark:bg-retroBlue-2 border-text-dark rounded-full border p-2 text-4xl" />
            <p>@JOHANJAY</p>
          </div>
          <div className="flex items-center space-x-3">
            <IoLocationOutline className="bg-retroBlue dark:bg-retroBlue-2 border-text-dark rounded-full border p-2 text-4xl" />
            <p>Abuja, Nigeria</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="mx-auto mt-6 max-h-60 max-w-96 rounded-2xl border-2 px-4 py-2">
            <h1 className="md:2xl text-xl">Hello World, I'm John Joseph.</h1>
            <TypeAnimation
              sequence={[
                "A Front-End Developer",
                1000,
                "A Psychologist",
                1000,
                "A Gamer",
                1000,
              ]}
              wrapper="strong"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "0.8em",
                display: "inline-block",
              }}
            />
            <p className="mt-12">
              I'm a Soft-ware developer with a unique ability to integrate
              behavioral science into the design and development of intuitive,
              user-focused digital experiences.
            </p>
          </div>
          <div className="bg-retroBlue dark:bg-retroBlue-2 flex max-w-48 items-center space-x-3 rounded-lg p-2">
            <GoRepo className="text-3xl" />
            <div>
              <span className="font-bold">{publicRepos}</span>
              <p>
                <em>Public Repos</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-retroBlue-2 mx-auto mt-8 max-w-6xl w-full rounded-xl p-2">
        <img src={contributionsUrl} alt="Johan" className="w-full" />
      </div>
    </section>
  );
};
export default Hero;
