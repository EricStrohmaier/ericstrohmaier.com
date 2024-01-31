import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons"; // Assuming you're using react-icons

interface ListNavItemProps {
  href: string;
  title: string;
  Icon: any;
  number?: string | number;
  iconBgColor?: string;
}

export const ListNavItem: FC<ListNavItemProps> = ({ href, title, Icon, number, iconBgColor }) => {
  // Style for the icon with dynamic background color, hidden on small screens
  const iconStyle = `w-6 h-6 p-1 rounded-full ${iconBgColor ? `bg-${iconBgColor}` : ''}`;

  return (
    <Link href={href}>
      <div className="flex items-center justify-between sm:space-y-3 sm:space-x-2">
        <div className="flex items-center">
          <Icon className={iconStyle} />
          <span className="ml-2 hidden sm:block">{title}</span>
        </div>
        {number !== undefined && (
          <span className="font-bold hidden sm:block">{number}</span> // Hide number on small screens
        )}
      </div>
    </Link>
  );
};
