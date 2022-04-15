import "easymde/dist/easymde.min.css";
import React, { useCallback, useMemo, useState } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";

export const SimpleMDE = () => {
  // const toolbar = [
  //   {
  //     name: "bold",
  //     action: function customFunction(editor) {
  //       editor.toggleCodeBlock();
  //       console.log(Object.getPrototypeOf(editor));
  //     },
  //     className: "fa fa-bold",
  //     title: "Bold",
  //   },
  // ];
  const [value, setValue] = useState();

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      placeholder: "I am the placeholder",
    };
  }, []);
  return <SimpleMdeReact options={options} value={value} onChange={onChange} />;
};
