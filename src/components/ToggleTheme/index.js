import React, { useContext } from "react";
import { ThemeContext } from "../../stores/context/ThemeContext";

export default function ToggleTheme() {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      style={{ width: 150 }}
      type="button"
      onClick={() => themeContext.toggleTheme()}
    >
      {themeContext.theme.charAt(0).toUpperCase() + themeContext.theme.slice(1)}{" "}
      mode
    </button>
  );
}
