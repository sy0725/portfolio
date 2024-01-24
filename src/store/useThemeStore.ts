import { create } from "zustand";

interface ThemeState {
  darkMode : boolean;
  themeDarkMode : () => void
}


const useThemeStore = create<ThemeState>((set) => ({
  darkMode : true,
  themeDarkMode : () => set((state) => ({ darkMode : !state.darkMode}))
}))


export default useThemeStore