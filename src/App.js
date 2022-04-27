import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Heading from "./components/Heading";
import Introduce from "./components/Introduce";
import MyBlog from "./components/MyBlog";
import MyCV from "./components/MyCV";
import TsParticles from "./components/TsParticles";
import Updating from "./components/Updating";
import { ThemeContext } from "./stores/context/ThemeContext";

function App() {
  const [, i18n] = useTranslation();
  const selectLanguageRef = useRef();

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    selectLanguageRef.current.value = lng;

    i18n.changeLanguage(lng);
    return () => {};
  }, [i18n]);

  return (
    <div style={{ paddingTop: 64 }} className={themeContext.theme}>
      <TsParticles />
      <div
        style={{
          borderBottom: "1px solid #2d2f30",
          boxShadow: "0 4px 4px 0 rgb(0 0 0 / 10%)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          // backgroundColor: "white",
          zIndex: 1,
          color: "#fff",
        }}
      >
        <Heading ref={selectLanguageRef} />
      </div>
      <div style={{ width: "100%", maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ paddingTop: 30 }}>
          <Routes>
            <Route path="/" element={<Introduce />} />
            <Route path="/my-cv" element={<MyCV />} />
            <Route path="/my-blog" element={<MyBlog />} />
            <Route path="/updating" element={<Updating />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
