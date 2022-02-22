import React from "react";
export const LinkMob = ({ title, address }) => {
  return (
    <a
      href={address}
      className="h-full 
      w-max
      pb-2
      px-2
      border-b-4 
      border-transparent
    text-white 
    hover:border-white dark:hover:border-myPrimaryDark      
      dark:hover:border-myLightTone
      transition-all duration-200 "
    >
      {title}
    </a>
  );
};
