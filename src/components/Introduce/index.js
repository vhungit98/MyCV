import React from "react";
import { useTranslation } from "react-i18next";
import ReactTyped from "react-typed";
import TsParticles from "../TsParticles";

export default function Introduce() {
  const [t] = useTranslation();
  return (
    <div>
      {/* <p>{t("welcome")}</p> */}
      <ReactTyped
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          fontSize: 40,
          fontFamily: "Open Sans",
        }}
        loop
        typeSpeed={70}
        backSpeed={70}
        // strings={[
        //   "Hello everyone !",
        //   "Welcome to my website !",
        // ]}
        strings={["1 + 1 = 2", "Anh + Em = 3 :D"]}
        smartBackspace
        shuffle={false}
        backDelay={1000}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar="|"
      />
      <TsParticles />
    </div>
  );
}
