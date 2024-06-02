import React from "react";
import Link from "next/link";
export const LinkMob = ({ title, address }) => {
  return (
    <Link
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
    </Link>
  );
};
