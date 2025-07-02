import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDark: false,
  toggleTheme: () =>
    set((state) => {
      const newIsDark = !state.isDark;

      if (newIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      console.log("Dark mode is now:", newIsDark);
      console.log("HTML classes:", document.documentElement.classList);

      return { isDark: newIsDark };
    }),
}));
