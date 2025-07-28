import { create} from 'zustand'

export const sanityStore = create((set) => ({
    posts: [], 
    setPosts: (posts) => set({ posts})
}))