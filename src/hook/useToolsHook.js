import { client } from "../sanity/client";
import { toolsStore } from "../store/toolsStore";
import { useEffect } from "react";

export default function useToolsHook() {
  const setTools = toolsStore((state) => state.setTools);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const TOOLS_QUERY = `*[_type == "tools"][0]{
          frontend[]{
            name,
            "iconUrl": icon.asset->url
          },
          backend[]{
            name,
            "iconUrl": icon.asset->url
          },
          devtools[]{
            name,
            "iconUrl": icon.asset->url
          }
        }`;

        const data = await client.fetch(TOOLS_QUERY);
        if (data) {
          setTools(data);
          console.log('Tools fetched:', data);
        }
      } catch (error) {
        console.error('Error fetching tools:', error);
      }
    };

    fetchTools();
  }, [setTools]);
}
