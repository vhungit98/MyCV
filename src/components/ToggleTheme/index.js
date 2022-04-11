import React, { useContext } from "react";
import { ThemeContext } from "../../stores/context/ThemeContext";

export default function ToggleTheme() {
  const themeContext = useContext(ThemeContext);

  const handleChange = () => {
    console.log(themeContext);
  };
  return (
    <select onChange={handleChange}>
      <option value="light">Light mode</option>
      <option value="dark">Dark mode</option>
    </select>
  );
}
