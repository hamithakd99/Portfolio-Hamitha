'use client'

import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Contact />
    </>
  );
}
