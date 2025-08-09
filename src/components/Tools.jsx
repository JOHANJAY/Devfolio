import useToolsHook from "../hook/useToolsHook";
import { toolsStore } from "../store/toolsStore";
import { tabsStore } from "../store/tabsStore";

const tabConfig = [
  { key: "Frontend", label: "Frontend", dataKey: "frontend" },
  { key: "Backend", label: "Backend", dataKey: "backend" },
  { key: "Devtools", label: "Devtools", dataKey: "devtools" },
];

const Tools = () => {
  useToolsHook();
  const tools = toolsStore((state) => state.tools);
  const activeTab = tabsStore((state) => state.activeTab);
  const setActiveTab = tabsStore((state) => state.setActiveTab);

  if (!tools || Object.keys(tools).length === 0) {
    return (
      <section className="wrapper LG mt-8" id="tools">
        <div className="py-8 text-center">Loading tools...</div>
      </section>
    );
  }

  const ToolSection = ({ toolsArray }) => {
    if (!toolsArray || toolsArray.length === 0) return null;

    return (
      <div className="">
        <div className="bg-retroBlue dark:bg-retroBlue-2 grid grid-cols-2 md:flex flex-wrap h-140 lg:h-auto gap-6 rounded-lg py-5 px-5 lg:pb-48">
          {toolsArray.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex flex-col items-center p-3"
            >
              {tool.iconUrl && (
                <img
                  src={tool.iconUrl}
                  alt={`${tool.name} icon`}
                  className="mb-2 h-24 w-24 object-contain"
                  loading="lazy"
                />
              )}
              <span className="text-center text-xl font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="wrapper LG mt-8 mb-10" id="tools">
      <h2 className="mb-8 text-center text-2xl underline decoration-3 underline-offset-12 lg:text-start">
        My Tools
      </h2>
      <div className="mb-5 flex  space-x-4">
        {tabConfig.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`transition-underline rounded-lg py-2 text-lg font-bold ${
              activeTab === tab.key
                ? "underline decoration-2 underline-offset-8"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabConfig.map(
          (tab) =>
            activeTab === tab.key && (
              <ToolSection key={tab.key} toolsArray={tools[tab.dataKey]} />
            ),
        )}
      </div>
    </section>
  );
};

export default Tools;
