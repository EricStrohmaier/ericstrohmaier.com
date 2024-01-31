import { FC } from "react";
import Link from "next/link";
import { FaHome, FaStackOverflow, FaGlobe } from 'react-icons/fa'; // Importing icons
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  title: string;
  Icon: IconType;
}
const NavList: FC = () => {

  const router = usePathname();

  const NavItem: FC<NavItemProps> = ({ href, title, Icon }) => {

    const path = router?.split("/")[1];
    const isActive = `/${path}` === href;

    const navItemStyle = `flex w-fit md:w-[170px] items-center p-1 px-2 rounded-[10px]  ${isActive ? "bg-[var(--background)]" : ""}`;
    return (
      <Link href={href}>
        <div className={navItemStyle}>
          <Icon className="mr-2 w-[34px] h-[34px]" />
          <span className="hidden font-bold text-md h-fit w-fit lg:flex">{title}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-between my-20">
      <div className="flex flex-col items-start space-y-5">
        <NavItem href="/" title="Home" Icon={FaHome} />
        <NavItem href="/workflows" title="Workflows" Icon={FaStackOverflow} />
        <NavItem href="/about" title="What is this?" Icon={FaGlobe} />
        {/* Add more NavItem components as needed */}
      </div>
    </div>
  );
};

export default NavList;
