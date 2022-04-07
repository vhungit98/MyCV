import clsx from "clsx";
import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./MultipleLanguage.module.scss";

function MultipleLanguage(props, selectLanguageRef) {
  const [, i18n] = useTranslation();

  const classes = clsx(styles.selectLanguageBox);

  const handleChange = () => {
    const selectLanguageBox = selectLanguageRef.current;
    const selectedValue =
      selectLanguageBox.options[selectLanguageBox.selectedIndex].value;
    i18n.changeLanguage(selectedValue);
  };

  return (
    <div>
      {/* <select onChange={handleChange} ref={selectLanguageRef}>
        <option value="vi">Việt Nam</option>
        <option value="en">English</option>
      </select> */}
      <Form.Select
        className={classes}
        size="sm"
        ref={selectLanguageRef}
        onChange={handleChange}
      >
        <option value="vi">Việt Nam</option>
        <option value="en">English</option>
      </Form.Select>
    </div>
  );
}
export default forwardRef(MultipleLanguage);
