import { BrightnessContrast } from "@carbon/icons-react";
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "@carbon/react";
import useTheme, { type CarbonTheme } from "~/atoms/useTheme";

export default function Header() {
  const [theme, setTheme] = useTheme();

  const cycleTheme = () => {
    const themes = ["white", "g10", "g90", "g100"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex] as CarbonTheme);
  };

  return (
    <>
      <CarbonHeader aria-label="CEN MVP-Starter">
        <HeaderName href="/" prefix="CEN">
          MVP-Starter
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Theme Switcher"
            tooltipAlignment="start"
            onClick={cycleTheme}
          >
            <BrightnessContrast size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </CarbonHeader>
    </>
  );
}
