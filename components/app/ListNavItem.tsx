import Link from "next/link";
import { FC } from "react";

interface ListNavItemProps {
    href: string;
    title: string;
    Icon: any;
    number?: string | number;
    iconBgColor?: string;
  }
  
  export const ListNavItem: FC<ListNavItemProps> = ({ href, title, Icon, number, iconBgColor }) => {
    // Style for the icon with dynamic background color
    const iconStyle = `w-6 h-6 p-1 rounded-full ${iconBgColor ? `bg-${iconBgColor}` : ''}`;
  
    return (
      <Link href={href}>
        <div className="flex items-center justify-between space-x-2 space-y-2">
          <div className="flex items-center">
            <Icon className={iconStyle} />
            <span className="ml-2">{title}</span>
          </div>
          {number !== undefined && (
            <span className="font-bold">{number}</span>
          )}
        </div>
      </Link>
    );
  };