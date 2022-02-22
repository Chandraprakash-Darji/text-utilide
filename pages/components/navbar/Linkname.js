import React from "react";
export const Linkname = ({ title, address }) => {
  return (
    <a
      href={address}
      className="h-full flex items-center border-b-4 border-transparent hover:text-white hover:border-white dark:hover:border-myPrimaryDark dark:hover:border-myLightTone transition-all duration-200 "
    >
      {title}
    </a>
  );
};