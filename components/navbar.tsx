import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";
import Image from "next/image";
import { Home } from "lucide-react";

const Navbar = () => {
  const links = [
    // {
    //   title: <Home className="h-6 w-6 text-neutral-700" />,
    //   href: "/",
    // },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex gap-4">
        <Link href="/">
          <Image src="/me.png" height={25} width={25} alt="logo" />
        </Link>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="transition duration-200 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
