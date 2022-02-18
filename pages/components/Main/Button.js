import React from "react";

export const Button = ({ text, passOnClick }) => {
  return (
    <button
      className=" p-2 px-4  font-medium tracking-wider rounded border-2 border-transparent  focus:border-2 dark:bg-myPrimaryDark dark:text-black dark:focus:border-white dark:hover:bg-myPrimaryDark/90 
    bg-myPrimaryVarient text-white
    focus:bg-myPrimaryVarient/95
    dark:focus:bg-myPrimaryDark/95
    hover:bg-myPrimaryVarient/90
    hover:-translate-y-[.1rem] active:translate-y-0
    transition-all
    shadow-md hover:shadow-myPrimaryVarient/25
    dark:hover:shadow-myPrimaryDark/25
    active:shadow-sm
    "
      onClick={passOnClick}
      
    >
      {text}
    </button>
  );
};
