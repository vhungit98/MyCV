import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Heading from "./components/Heading";
import Markdown from "./components/Markdown";
import { SimpleMDE } from "./components/SimpleMDE";
import { ThemeContext } from "./stores/context/ThemeContext";

function App() {
  const [t, i18n] = useTranslation();
  const selectLanguageRef = useRef();
  const [value, setValue] = useState();

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    selectLanguageRef.current.value = lng;

    i18n.changeLanguage(lng);
    return () => {};
  }, [i18n]);

  const toolbar = [
    {
      name: "bold",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-bold",
      title: "Bold",
    },
  ];

  const handleOnChange = () => {
    console.log("handleOnChange");
  };

  return (
    <div className={themeContext.theme}>
      <Heading ref={selectLanguageRef} />
      <div>
        <p>{t("welcome")}</p>
      </div>
      <div>
        <Markdown markdown={"***asdsads***"} />
      </div>
      <div>
        <SimpleMDE
          id={1}
          onChange={handleOnChange}
          value={value}
          options={{
            autofocus: true,
            spellChecker: false,
            toolbar: toolbar,
          }}
        />
      </div>
    </div>
  );
}

export default App;
