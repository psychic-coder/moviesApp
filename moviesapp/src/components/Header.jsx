import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-3 max-w-6xl min-w-full md:px-36 px-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4 ">
        <DarkModeSwitch />
        <Link href={"/"} className="flex  items-center bg-amber-500 rounded-lg">
          <span className="text-2xl font-bold  py-1 px-2 rounded-lg">
            MoDic
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
