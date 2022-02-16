import React from "react";

export const TextArea = ({ label, passValue, passOnChange }) => {
  return (
    <div className="w-full py-10 ">
      <label
        htmlFor="inputText"
        className="block my-2 font-light text-xl tracking-wide"
      >
        {label}
      </label>
      <textarea
        value={passValue}
        onChange={passOnChange}
        name="text"
        id="inputText"
        rows="8"
        placeholder="Text Goes Here"
        className="px-2 py-1 w-full focus:outline-none border-black/40 focus:border-myPrimaryVarient  dark:focus:border-myPrimaryDark focus:placeholder:text-black dark:focus:placeholder:text-white border-2 dark:border-white/20 rounded-sm transition-all focus:bg-myPrimaryVarient/5
        dark:bg-white/10
        dark:focus:bg-myPrimaryVarient/10
        "
      ></textarea>
    </div>
  );
};
