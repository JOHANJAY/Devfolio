import { create } from "zustand";

export const tabsStore = create((set) => ({
    activeTab: "Frontend",
    setActiveTab: (tab)=> set({ activeTab: tab})
})) 