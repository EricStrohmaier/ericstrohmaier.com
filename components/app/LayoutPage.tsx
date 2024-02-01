"use client"

import React, { FC } from "react";
import NavList from "./NavList";
import { CheckIcon, MinusIcon, XIcon } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" py-2 sm:p-9 h-full min-h-screen w-full flex items-center justify-center bg-[var(--background)] text-[var(--text)]">
      <div className="flex items-center justify-center min-h-[90%] h-full w-full">
        <div className="flex mx-3 my-6 max-w-7xl h-full w-full rounded-[40px] overflow-hidden bg-[var(--primary)] border-[var(--text)]">
          <div className="border-r-[1px] lg:w-1/3 bg-[var(--primary)]">
            <div className="flex flex-col justify-start h-full mx-1 lg:mx-0 lg:w-full">
              <div className="flex space-x-2 justify-start items-center mt-8 md:ml-7 ml-2">
                <div className="md:w-4 md:h-4 w-3 h-3 bg-[#ff5f56] rounded-full flex items-center justify-center">
                  <XIcon className="hover:text-black hover:opacity-50 opacity-0" />
                </div>
                <div className="md:w-4 md:h-4 w-3 h-3 bg-[#ffbd2e] rounded-full flex items-center justify-center">
                  <MinusIcon className="hover:text-black hover:opacity-50 opacity-0" />
                </div>
                <div className="md:w-4 md:h-4 w-3 h-3 bg-[#27c93f] rounded-full flex items-center justify-center">
                  <CheckIcon className="hover:text-black hover:opacity-50 opacity-0" />
                </div>
                </div>
                <NavList />
              </div>
              <div className="border-[0.5px] w-full relative bottom-11 bg-[var(--primary)]"></div>
            </div>
            <div className="flex-col w-full">{children}</div>
          </div>
        </div>
      </div>
      );
};

      export default LayoutPage;
