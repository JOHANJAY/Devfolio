import { create } from 'zustand';

export const toolsStore = create((set) => ({
    tools: {},
    setTools: (tools) => set({ tools }),
}))