import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SimpleMDE from "simplemde";
import Heading from "./components/Heading";

function App() {
  const [t, i18n] = useTranslation();
  const selectLanguageRef = useRef();
  const simplemdeRef = useRef();
  useEffect(() => {
    simplemdeRef.current = new SimpleMDE({
      element: document.getElementById("textarea"),
      spellChecker: false,
    });
    return () => {};
  }, []);

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    selectLanguageRef.current.value = lng;

    i18n.changeLanguage(lng);
    return () => {};
  }, [i18n]);

  return (
    <>
      <Heading ref={selectLanguageRef} />
      <div>
        <p>{t("welcome")}</p>
      </div>
      <div>
        <textarea id="textarea"></textarea>
      </div>
    </>
  );
}

export default App;
