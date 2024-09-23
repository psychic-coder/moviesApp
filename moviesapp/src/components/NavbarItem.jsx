"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    setGenre(searchParams.get("genre"));
  }, [searchParams]);

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
