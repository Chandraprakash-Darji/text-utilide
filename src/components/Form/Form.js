import React, { useState } from "react";
import { TextArea } from "./TextArea";
import { Button } from "./Button";
export const Form = () => {
  const [text, setText] = useState("Enter Text");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div action="my.nsd" className="px-10">
      <TextArea
        label="Enter the Text to analyze"
        passValue={text}
        passOnChange={handleOnChange}
      />
      <Button text="Convert to UpperCase" passOnClick={handleUpClick} />
    </div>
  );
};
