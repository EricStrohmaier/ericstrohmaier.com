"use client"
import { ThemeToggle } from "../ThemeToggle";
import { TimeContext } from "@/lib/time";
import { useContext } from "react";
import { RxClock } from "react-icons/rx";

export default function Header() {
  const { currentTime } = useContext(TimeContext);

  return (
    <div>
      <header className="mb-5 mt-16 flex content-center items-center justify-between ">
        <div className="flex gap-4">
          {/* <Link href="/">Home</Link>
            <Link href="/about">About</Link> */}
        </div>

        <div className="flex justify-between  items-center gap-4">
          <div className={`flex  px-2 items-center  border-[1.5px] border-[var(--text)]   rounded-[70px] `}>
            <RxClock className="mr-2 w-[24px] h-[24px]" />
            <p className={`text-sm ml-[5px] `}> {currentTime}</p>
          </div>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}