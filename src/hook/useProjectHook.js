import { client } from "../sanity/client";
import { projectsStore } from "../store/projectsStore";
import { useEffect } from "react";

export default function useProjectHook() {
  const setPosts = projectsStore((state) => state.setPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[
        _type == "post"
        && defined(slug.current)
      ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, repoLink, demoLink, language, tags, body}`;

      const data = await client.fetch(POSTS_QUERY);
      setPosts(data);
    };
    fetchPosts();
  }, [setPosts]);
}
