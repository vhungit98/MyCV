import clsx from "clsx";
import { forwardRef } from "react";
import Logo from "../Logo";
import MultipleLanguage from "../MultipleLanguage";
import Navbar from "../Navbar";
import ToggleTheme from "../ToggleTheme";
import styles from "./Heading.module.scss";

function Heading(props, selectLanguageRef) {
  const headerClasses = clsx(styles[["d-flex"]], styles[["container"]]);
  return (
    <header style={{ padding: "10px 0" }} className={headerClasses}>
      <Logo />
      <Navbar />
      <div>
        <div style={{ display: "inline-block", margin: "0 5px" }}>
          <MultipleLanguage ref={selectLanguageRef} />
        </div>
        <div style={{ display: "inline-block", margin: "0 5px" }}>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
export default forwardRef(Heading);
