import "easymde/dist/easymde.min.css";
import React, { useCallback, useState } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";

export const SimpleMDE = () => {
  const [value, setValue] = useState("Initial value");

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);
  console.log(value);
  return <SimpleMdeReact value={value} onChange={onChange} />;
};
