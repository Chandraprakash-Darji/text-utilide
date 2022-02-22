import React from "react";

export const Button = ({ btnText, passOnClick, textArea }) => {
  return (
    <button
      className={` p-2 px-4  font-medium tracking-wider rounded border-2 border-transparent  focus:border-2 
      active:shadow-sm
      shadow-md 
      active:translate-y-0
      transition-all
      text-white
      bg-myPrimaryVarient 
      focus:bg-myPrimaryVarient/95
      hover:bg-myPrimaryVarient/90
      hover:shadow-myPrimaryVarient/25
      dark:text-black 
      dark:focus:border-white
      dark:bg-myPrimaryDark 
      dark:hover:bg-myPrimaryDark/90
      dark:focus:bg-myPrimaryDark/95
      dark:hover:shadow-myPrimaryDark/25
      disabled:dark:text-black
      disabled:dark:hover:bg-myPrimaryDark
      disabled:dark:bg-white/40
      disabled:dark:hover:bg-white/40
      disabled:dark:focus:border-transparent
      disabled:hover:bg-myPrimaryVarient
      disabled:hover:-translate-y-0
      hover:-translate-y-[.1rem] 
    `}
      onClick={passOnClick}
      disabled={textArea === ""}
    >
      {btnText}
    </button>
  );
};
