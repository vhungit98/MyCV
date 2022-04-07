import { useTranslation } from "react-i18next";
import "./App.css";
import MultipleLanguage from "./components/MultipleLanguage/MultipleLanguage.tsx";

function App() {
  const [t, i18n] = useTranslation();

  return (
    <>
      <MultipleLanguage />
      <div>
        <p>{t("Thanks.1")}</p>
      </div>
    </>
  );
}

export default App;
