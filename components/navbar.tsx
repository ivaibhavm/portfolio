import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import Image from "next/image";

const Navbar = () => {
  const links = [
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
          <Image
            src="/me.png"
            height={25}
            width={25}
            alt="logo"
            className="rounded-md"
          />
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
