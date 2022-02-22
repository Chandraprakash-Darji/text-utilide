import React, { useState } from "react";
import { Linkname } from "./Linkname";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LinkMob } from "./LinkMob";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className=" bg-myPrimaryVarient text-white px-5 dark:bg-black shadow-lg dark:shadow-white/10 fixed w-screen z-20">
        <div className="xl:container flex h-16 justify-between items-center m-auto">
          <a href="/">
            <figure className="flex items-center font-bold gap-2 dark:text-myPrimaryDark">
              <BsReverseLayoutTextSidebarReverse size="1.5rem" />
              <figcaption className="tracking-wider">TextUtilise</figcaption>
            </figure>
          </a>
          <nav className="hidden gap-4 h-full items-center md:flex">
            <Linkname title="Home" />
            <Linkname title="Blog" />
            <Linkname title="Projects" />
            <Linkname title="Contact Us" />
          </nav>
          {menuOpen ? (
            <AiOutlineClose
              className="md:hidden"
              onClick={() => {
                setMenuOpen(false);
                document.body.classList.toggle("overflow-y-hidden");
              }}
            />
          ) : (
            <AiOutlineMenu
              className="md:hidden"
              onClick={() => {
                setMenuOpen(true);
                document.body.classList.toggle("overflow-y-hidden");
              }}
            />
          )}
        </div>
      </header>
      <div
        className={`fixed md:hidden h-screen  left-0 bottom-0 w-screen z-10 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }  transition-all duration-300 bg-black/20 dark:bg-black/50`}
      >
        <nav
          className={`flex md:hidden text-xl w-max mt-20 p-5 px-16 flex-col gap-7 items-center  bg-myPrimaryVarient/20 dark:bg-myPrimaryDark/20 rounded-2xl fixed z-10 backdrop-blur-sm border-white/20 border left-1/2 -translate-x-1/2 ${
            menuOpen ? "translate-y-10" : "-translate-y-full"
          } -translate-y-full transition-all duration-300 `}
        >
          <LinkMob title="Home" />
          <LinkMob title="Blog" />
          <LinkMob title="Projects" />
          <LinkMob title="Contact Us" />
        </nav>
      </div>
    </>
  );
};
