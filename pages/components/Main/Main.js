import React, { useState } from "react";
import { TextArea } from "./TextArea";
import { Button } from "./Button";
import { Summary } from "./Summary";
import { Preview } from "./Preview";
import { Alert } from "./Alert";
export const Main = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleOnChange = (e) => setText(e.target.value);

  const errorMsg = (msg) => {
    setError(msg);
    if (text === "")  setError("Enter Text");
    setTimeout(() => {
      setError(null);
    }, 1500);
  };
  const resetTitle = () => {
    document.title = `TextUtilise - ${error}`;
    setTimeout(() => {
      document.title = "TextUtilise - Home";
    }, 2000);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    errorMsg("Text UpperCase");
    resetTitle();
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    errorMsg("Text LowerCase");
    resetTitle();
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    errorMsg("Text Copied");
    resetTitle();
  };
  const handleExtraSpace = () => {
    let newText = "";
    newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    errorMsg("Extra Space Removed");
    resetTitle();
  };

  const handleInvertClick = () => {
    let newText = "";
    for (const letter of text) {
      if (letter === letter.toLowerCase()) {
        newText += letter.toUpperCase();
      } else if (letter === letter.toUpperCase()) {
        newText += letter.toLowerCase();
      }
    }
    setText(newText);
    errorMsg("Text Inverted");
    resetTitle();
  };
  const handleReverseClick = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    errorMsg("Text Reversed");
    resetTitle();
  };

  return (
    <div className="relative">
      <Alert alert={error} />
      <TextArea
        textLabel="Enter the Text to analyze"
        passValue={text}
        passOnChange={handleOnChange}
      />
      <div className="flex gap-4 flex-wrap">
        <Button text="Convert to UpperCase" passOnClick={handleUpClick} />
        <Button text="Convert to LowerCase" passOnClick={handleLoClick} />
        <Button text="Clear Text" passOnClick={handleClearClick} />
        <Button text="Invert Case" passOnClick={handleInvertClick} />
        <Button text="Reverse Text" passOnClick={handleReverseClick} />
        <Button text="Copy Text" passOnClick={handleCopy} />
        <Button text="Remove Extra Space" passOnClick={handleExtraSpace} />
      </div>
      <Summary text={text} />
      <Preview text={text} />
    </div>
  );
};
