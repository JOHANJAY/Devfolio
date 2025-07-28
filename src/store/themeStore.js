import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDark: true,
  toggleTheme: () =>
    set((state) => {
      const newIsDark = !state.isDark;

      if (newIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { isDark: newIsDark };
    }),
}));
