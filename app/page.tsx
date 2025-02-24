import React from "react";
import { NavLinks } from "../lib/constants";
import Navlink from "@/components/ui/layouts/Navlink";
import Navbar from "@/components/ui/layouts/Navbar";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/images/bg.gifs)" }}
        className="min-h-screen bg-black bg-no-repeat bg-cover bg-center"
      >
        <div className="px-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
