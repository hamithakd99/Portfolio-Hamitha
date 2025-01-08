import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="-z-10 fixed top-0 right-0 w-11/12 translate-y-[-80%]">
      <Image src={assets.header_bg_color}/>
    </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="">
          {/* <Image src={assets.logo} alt="" className="w-56 cursor-pointer mr-14" /> */}
          <h1 className="text-3xl font-bold">Hamitha<span className="text-red-700 text-5xl">.</span></h1>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#top">About me</a></li>
          <li><a className="font-Ovo" href="#top">My Work</a></li>
          <li><a className="font-Ovo" href="#top">Contact me</a></li>
          
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6"/>
          </button>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5">Contact <Image alt="" src={assets.arrow_icon} className="w-3"/></a>
          <button className="block md:hidden">
            <Image src={assets.menu_black} alt="" className="w-6"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
