"use client"
import { ThemeToggle } from "../ThemeToggle";
import { TimeContext } from "@/lib/time";
import { useContext } from "react";
import { RxClock } from "react-icons/rx";

export default function Header() {
  const { currentTime } = useContext(TimeContext);

  return (
    <div>
      <header className="flex content-center items-center justify-between md:mx-3 mb-5">
        <div className="flex gap-4">
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className={`flex max-w-20 max-h-8 px-2 items-center border-[1.5px] border-[var(--text)] rounded-[70px] `}>
            <RxClock className="" />
            <p className={`text-sm ml-[5px]`}> {currentTime}</p>
          </div>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}