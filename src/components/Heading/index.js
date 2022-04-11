import { forwardRef } from "react";
import MultipleLanguage from "../MultipleLanguage";
import ToggleTheme from "../ToggleTheme";

function Heading(props, selectLanguageRef) {
  return (
    <header>
      <div id="logo">logo</div>
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com.vn/">Menu 1</a>
          </li>
          <li>
            <a href="https://www.google.com.vn/">Menu 2</a>
          </li>
          <li>
            <a href="https://www.google.com.vn/">Menu 3</a>
          </li>
        </ul>
      </nav>
      <ToggleTheme />
      <MultipleLanguage ref={selectLanguageRef} />
    </header>
  );
}
export default forwardRef(Heading);
