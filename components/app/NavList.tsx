import { FC } from "react";

import { CalendarIcon, CheckIcon, FlagIcon, InboxIcon, ListIcon } from "lucide-react";
import { ListNavItem } from "./ListNavItem";
import { NavItem } from "./NavItem";

const NavList: FC = () => {

  return (
    <div className="min-h-[50vh] flex flex-col justify-between my-20 w-full">
      <div className="flex flex-col items-center space-y-5 justify-center">
        <div className="grid grid-cols-2 gap-2 w-[90%]">
          <NavItem href="/today" title="Today" Icon={CalendarIcon} style="bg-blue-600" number="0" />
          <NavItem href="/scheduled" title="Scheduled" Icon={CalendarIcon} style="bg-red-500" number="2" />
          <NavItem href="/all" title="All" Icon={InboxIcon} style="bg-gray-600" number="65" />
          <NavItem href="/flagged" title="Flagged" Icon={FlagIcon} style="bg-yellow-500" number="0" />
          <NavItem href="/completed" title="Completed" Icon={CheckIcon} style="bg-gray-600" number="0" />
        </div>
        <div className="w-[90%]">
          <h3 className="text-sm font-semibold">My Lists</h3>
          <nav className="mt-4 space-y-1">
            <ListNavItem href="#" title="Reminders" Icon={ListIcon} number={5} iconBgColor="blue-600" />
            <ListNavItem href="#" title="Ideas" Icon={ListIcon} number={10} iconBgColor="red-500" />
            <ListNavItem href="#" title="Recipe Ideas" Icon={ListIcon} number={7} iconBgColor="green-500" />
            <ListNavItem href="#" title="Programming Ideas" Icon={ListIcon} number={12} iconBgColor="yellow-500" />
            <ListNavItem href="#" title="Bucket List" Icon={ListIcon} number={3} iconBgColor="blue-600" />
          </nav>
        </div>

      </div>
    </div>
  );
};

export default NavList;
