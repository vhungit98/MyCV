import { forwardRef } from "react";
import MultipleLanguage from "../MultipleLanguage";

function Heading(props, selectLanguageRef) {
  return (
    <>
      <MultipleLanguage ref={selectLanguageRef} />
    </>
  );
}
export default forwardRef(Heading);
