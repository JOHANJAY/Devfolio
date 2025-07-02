import { useThemeStore } from "./store/themeStore";

const App = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:theme(colors.base.light)] dark:bg-[color:theme(colors.base.dark)] text-[color:theme(colors.text.light)] dark:text-[color:theme(colors.text.dark)]">
  <h1 className="text-3xl font-retro">Retro Portfolio</h1>
  <button
    onClick={toggleTheme}
    className="mt-4 px-4 py-2 bg-[color:theme(colors.retroRed)] dark:bg-[color:theme(colors.retroYellow)] text-white rounded"
  >
    Switch to {isDark ? 'light' : 'dark'} mode
  </button>
</div>

  );
};
export default App;
