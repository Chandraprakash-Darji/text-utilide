import React from "react";
import { Linkname } from "./Linkname";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
export const Navbar = () => {
  return (
    <header className=" bg-myPrimaryVarient text-white px-5 dark:bg-white/5 shadow-lg dark:shadow-white/10">
      <div className="xl:container flex h-16 justify-between items-center m-auto">
        <a href="/">
          <figure className="flex items-center font-bold gap-2 dark:text-myPrimaryDark">
            <BsReverseLayoutTextSidebarReverse size="1.5rem" />
            <figcaption className="tracking-wider">TextUtilise</figcaption>
          </figure>
        </a>
        <nav className="flex gap-4 h-full items-center ">
          <Linkname title="Home" />
          <Linkname title="Blog" />
          <Linkname title="Projects" />
          <Linkname title="Contact Us" />
        </nav>
      </div>
    </header>
  );
};
