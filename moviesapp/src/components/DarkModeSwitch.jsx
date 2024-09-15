"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;



  //  the mounted state is used to ensure that the component doesn't render the theme-related UI until the component has fully mounted on the client side. This is important because the theme (dark or light) may rely on client-side data, such as the user's system settings or a saved theme preference, which isn't available during server-side rendering (SSR)
  const [mounted,setMounted]=useState(false);
  useEffect(()=>{setMounted(true)},[]);
  return (
    <div>
      {
        <div>
          { mounted && currentTheme === "dark" ? (
            <MdLightMode
              onClick={() => setTheme("light")}
              className=" text-xl cursor-pointer hover:text-amber-500 "
            />
          ) : (
            <MdDarkMode
              onClick={() => setTheme("dark")}
              className=" text-xl cursor-pointer hover:text-amber-500 "
            />
          )}
        </div>
      }
    </div>
  );
};

export default DarkModeSwitch;
