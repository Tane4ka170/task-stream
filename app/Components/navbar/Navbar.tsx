"use client";

import { ModeToggle } from "@/app/modeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

import AppNameAndLogo from "./AppNameAndLogo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-16">
        <AppNameAndLogo />
        <SearchBar />
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator orientation="vertical" className="h-5 w-[2px] bg-gray-900" />
        <Button className="rounded-3xl h-10 shadow-none">
          Create New Project
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
