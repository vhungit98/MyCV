import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Heading from "./components/Heading";

function App() {
  const [t, i18n] = useTranslation();
  const selectLanguageRef = useRef();

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    selectLanguageRef.current.value = lng;

    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <Heading ref={selectLanguageRef} />
      <div>
        <p>{t("welcome")}</p>
      </div>
    </>
  );
}

export default App;
