"use client"
import React, { FC, useContext } from "react";
import { FaServer, FaClock } from "react-icons/fa";
import { ThemeToggle } from "../ThemeToggle";
import { TimeContext } from "@/lib/time";
import { NavItem } from "./NavItem";

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
    const { currentTime } = useContext(TimeContext);

    return (
        <div
            className="w-full px-2 my-5 mt-7"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 20,
            }}
        >
            <div className="flex items-center justify-between w-full">
                <div
                    className={`flex justify-center px-2 items-center  border-[1.5px] rounded-[70px] `}
                >
                    <FaClock className="mr-2 w-[24px] h-[24px]" />
                    <p className={`text-sm ml-[5px] `}> {currentTime}</p>
                </div>

                <div className="flex items-center space-x-1 lg:space-x-3">
                    <div>{children}</div>
                    <NavItem
                        Icon={FaServer} />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
