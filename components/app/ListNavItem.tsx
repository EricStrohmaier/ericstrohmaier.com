import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const router = usePathname();
  
  const path = router?.split("/")[1];
  const isActive = `/${path}` === href;

  const activeStyle = `${isActive ? `bg-[var(--secondary)]` : ""}`
  const iconStyle = `w-6 h-6 p-1 rounded-full bg-${iconBgColor}`;

  return (
    <Link href={href}>
    <div className={`${activeStyle} px-2 py-1 rounded-[10px] flex items-center justify-between`}>
      <div className="flex items-center">
        <Icon className={iconStyle} />
        <span className="ml-2 hidden sm:block">{title}</span>
      </div>
      {number !== undefined && (
        <span className="font-bold hidden sm:flex items-center justify-center">{number}</span>
      )}
    </div>
  </Link>
  
  );
};
