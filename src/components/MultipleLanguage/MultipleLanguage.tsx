import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MultipleLanguage() {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const lng = localStorage.getItem("lng");
    console.log(lng);
  }, []);

  const handleChange = () => {
    const selectBox: any = document.getElementById("language");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;

    i18n.changeLanguage(selectedValue);
  };

  return (
    <div>
      <select name="language" id="language" onChange={handleChange}>
        <option value="vi">Việt Nam</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
