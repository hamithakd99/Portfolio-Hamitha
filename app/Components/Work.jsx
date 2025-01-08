import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div id="mywork" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to My Web Development Portfolio! Explore my collection of
        projects showcasing my experiences in FrontEnd development
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-5">
        {workData.map((projects, index) => (
          <Link key={index} href={`${projects.link}`}>
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              key={index}
              style={{ backgroundImage: `url(${projects.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 text-sm">
                <div>
                  <h2 className="font-semibold">{projects.title}</h2>
                  <p className="text-gray-700">{projects.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
