// import clsx from "clsx";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
// import styles from "./MultipleLanguage.module.scss";

function MultipleLanguage(props, selectLanguageRef) {
  const [, i18n] = useTranslation();

  // const classes = clsx(styles.selectLanguageBox);

  const handleChange = () => {
    const selectLanguageBox = selectLanguageRef.current;
    const selectedValue =
      selectLanguageBox.options[selectLanguageBox.selectedIndex].value;
    i18n.changeLanguage(selectedValue);
  };

  return (
    <select onChange={handleChange} ref={selectLanguageRef}>
      <option value="vi">VI</option>
      <option value="en">EN</option>
    </select>
  );
}
export default forwardRef(MultipleLanguage);
