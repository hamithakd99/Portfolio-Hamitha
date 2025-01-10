import { FaLinkedin ,FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5 md:mb-3">
          Hamitha<span className="text-red-700 text-5xl">.</span>
        </h1>
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6"/>
          hamithakd99@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Hamitha Apsara. All rights reserved.</p>
        <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://www.linkedin.com/in/hamitha-apsara-5b027b276/">{<FaLinkedin />}</a></li>
          <li><a target="_blank" href="https://github.com/hamithakd99">{<FaGithub />}</a></li>
          <li><a target="_blank" href="https://www.instagram.com/hamithakd">{<GrInstagram />}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
