import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const slideMenu = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    slideMenu.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    slideMenu.current.style.transform = "translateX(16rem)";
  };

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (scrollY > 50) {
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])
  return (
    <>
      <div className="-z-10 fixed top-0 right-0 w-11/12 translate-y-[-80%]">
        <Image src={assets.header_bg_color} />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="">
          {/* <Image src={assets.logo} alt="" className="w-56 cursor-pointer mr-14" /> */}
          <h1 className="text-3xl font-bold">
            Hamitha<span className="text-red-700 text-5xl">.</span>
          </h1>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#mywork">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5"
          >
            Contact <Image alt="" src={assets.arrow_icon} className="w-3" />
          </a>
          <button className="block md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
        {/* mobile view */}
        <ul
          ref={slideMenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="cursor-pointer w-5"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#mywork" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
