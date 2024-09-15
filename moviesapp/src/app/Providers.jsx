"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-black dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300  ">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
