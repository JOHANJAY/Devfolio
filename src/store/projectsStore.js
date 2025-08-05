import { create } from "zustand";

export const projectsStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
