import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="m-1 p-2 rounded-md bg-[#1a633f]  sticky">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image alt="logo" />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/'}>About</Link></li>
              <li><Link href={'/'}>contact us</Link></li>
              <li><Link href={'/'}>Reach</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
