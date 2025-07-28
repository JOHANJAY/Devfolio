import { create } from "zustand";

export const githubStore = create((set) => ({
  avatar: null,
  publicRepos: null,
  setGithubData: (data) => set(() => data),
}));
