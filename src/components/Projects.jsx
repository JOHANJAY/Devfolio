import { useState } from "react";
import { PortableText } from "@portabletext/react";
import useProjectHook from "../hook/useProjectHook";
import { projectsStore } from "../store/projectsStore";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import { RxCode } from "react-icons/rx";
import { FolderGit2, MonitorPlay } from "lucide-react";

const builder = imageUrlBuilder(client);

const Projects = () => {
  useProjectHook();
  const posts = projectsStore((state) => state.posts);

  const [hoveredRepo, setHoveredRepo] = useState(null);
  const [hoveredDemo, setHoveredDemo] = useState(null);

  return (
    <section className="wrapper LG mt-8 mb-10" id="projects">
      <h2 className="mb-3 text-center text-2xl underline decoration-3 underline-offset-12 lg:text-start">
        Personal Projects
      </h2>
      <ul className="mt-4 flex grid-cols-2 flex-col gap-y-4 lg:grid">
        {posts.map((post) => (
          <li
            className="bg-retroBlue dark:bg-retroBlue-2 mx-auto gap-5 rounded-xl p-3 md:w-96 lg:flex lg:w-full"
            key={post._id}
          >
            <div>
              {post.image && post.image.asset && (
                <img
                  src={builder.image(post.image).url()}
                  alt={post.title}
                  className="mb-2 rounded-lg"
                />
              )}
              <div className="bg-retroCream dark:bg-base-dark mb-3 inline-flex items-center gap-2 rounded-lg px-3">
                <RxCode className="size-5" /> <p>{post.language}</p>
              </div>
              <br />

              <div className="mb-7 flex gap-24">
                <a
                  href={post.repoLink}
                  target="blank"
                  className="relative inline-block"
                  onMouseEnter={() => setHoveredRepo(post._id)}
                  onMouseLeave={() => setHoveredRepo(null)}
                >
                  <FolderGit2 className="size-7 transition-all duration-200 ease-in-out hover:scale-75" />
                  {hoveredRepo === post._id && (
                    <div className="bg-retroCream dark:bg-base-dark absolute top-9 w-[63px] rounded-lg py-1 text-center text-xs shadow">
                      <p>Git Repo</p>
                    </div>
                  )}
                </a>
                <a
                  href={post.demoLink}
                  target="blank"
                  className="relative inline-block"
                  onMouseEnter={() => setHoveredDemo(post._id)}
                  onMouseLeave={() => setHoveredDemo(null)}
                >
                  <MonitorPlay className="size-7 transition-all duration-200 ease-in-out hover:scale-75" />
                  {hoveredDemo === post._id && (
                    <p className="bg-retroCream dark:bg-base-dark absolute top-9 m-auto rounded-lg px-2 py-1 text-xs shadow">
                      Demo
                    </p>
                  )}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-retro font-light">{post.title}</h3>
              <div>
                {Array.isArray(post.body) && <PortableText value={post.body} />}
              </div>
              <div className="mt-7">
                {post.tags.map((tag) => (
                  <p
                    className="dark:bg-base-dark bg-retroCream mr-3 mb-3 inline-flex rounded-lg px-3 py-1 text-sm"
                    key={tag}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
