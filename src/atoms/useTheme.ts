import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

export type CarbonTheme = "white" | "g90" | "g100" | "g10";

const themeState = atom<CarbonTheme>({
  key: "themeState",
  default: "white",
});

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const themes: CarbonTheme[] = ["white", "g90", "g100", "g10"];

    // Remove all theme classes
    themes.forEach((t) => document.body.classList.remove(t));

    // Add the current theme class
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useTheme;
