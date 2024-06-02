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
    setTimeout(() => {
      setError(null);
    }, 1500);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    errorMsg("Text UpperCase");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    errorMsg("Text LowerCase");
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    errorMsg("Text Copied");
  };
  const handleExtraSpace = () => {
    let newText = "";
    newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    errorMsg("Extra Space Removed");
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
  };
  const handleReverseClick = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    errorMsg("Text Reversed");
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
        <Button
          btnText="Convert to UpperCase"
          passOnClick={handleUpClick}
          textArea={text}
        />
        <Button
          btnText="Convert to LowerCase"
          passOnClick={handleLoClick}
          textArea={text}
        />
        <Button
          btnText="Clear Text"
          passOnClick={handleClearClick}
          textArea={text}
        />
        <Button
          btnText="Invert Case"
          passOnClick={handleInvertClick}
          textArea={text}
        />
        <Button
          btnText="Reverse Text"
          passOnClick={handleReverseClick}
          textArea={text}
        />
        <Button btnText="Copy Text" passOnClick={handleCopy} textArea={text} />
        <Button
          btnText="Remove Extra Space"
          passOnClick={handleExtraSpace}
          textArea={text}
        />
      </div>
      <Summary text={text} />
      <Preview text={text} />
    </div>
  );
};
