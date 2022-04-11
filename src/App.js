import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Heading from "./components/Heading";
import { ThemeContext } from "./stores/context/ThemeContext";

function App() {
  const [t, i18n] = useTranslation();
  const selectLanguageRef = useRef();

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    selectLanguageRef.current.value = lng;

    i18n.changeLanguage(lng);
    return () => {};
  }, [i18n]);

  return (
    <div className={themeContext.theme}>
      <Heading ref={selectLanguageRef} />
      <div>
        <p>{t("welcome")}</p>
      </div>
    </div>
  );
}

export default App;
