import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
interface NavItemProps {
    href?: string;
    title?: string;
    Icon: any;
    style?: string;
    number?: string;
  }
  export const NavItem: FC<NavItemProps> = ({ href, title, Icon, style, number }) => {
    const router = usePathname();
  
    const path = router?.split("/")[1];
    const isActive = `/${path}` === href;

    const determineTextColor = (style:string | undefined) => {
      if (style?.includes("bg-gray-600")) {
        return "text-gray-100 bg-gray-600";
      }
      
      return ""; 
    };
    const textColor = determineTextColor(style);

    const navItemStyle = `relative flex items-center justify-start rounded-[10px] p-4 ${isActive ? `${style} ${textColor}` : "bg-[var(--secondary)]"} `;;
  
    return (
      <Link href={href || ""}>
        <div className={navItemStyle}>
          <div className="absolute top-0 right-0 p-1 text-xs font-bold">{number}</div>
          <Icon className="mr-2 w-[34px] h-[44px]" />
          <div className="flex flex-col items-start justify-center">
            <span className="font-bold text-sm lg:block hidden">{title}</span>
          </div>
        </div>
      </Link>
    );
  };