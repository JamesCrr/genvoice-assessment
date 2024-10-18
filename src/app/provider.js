import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {},
  setUser: (newUser) => set((state) => ({ user: newUser })),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));
