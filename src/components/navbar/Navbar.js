import React from "react";
import { Linkname } from "./Linkname";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
export const Navbar = () => {
  return (
    <header className="flex h-16 bg-slate-900 text-white justify-between items-center px-5  ">
      <a href="/">
        <figure className="flex items-center font-bold gap-2">
          <BsReverseLayoutTextSidebarReverse size="1.5rem" />
          <figcaption>Text utilise</figcaption>
        </figure>
      </a>
      <nav className="flex gap-4 h-full items-center ">
        <Linkname title="Home" />
        <Linkname title="Blog" />
        <Linkname title="Projects" />
        <Linkname title="Contact Us" />
      </nav>
    </header>
  );
};
