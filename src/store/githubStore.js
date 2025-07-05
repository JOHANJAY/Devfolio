import { create } from "zustand";

export const githubStore = create((set) => ({
    avatar: null,
    commitCount: null,
    setGithubData: (data) => set(() => data)
}))