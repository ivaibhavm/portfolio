import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaibhav",
  initials: "VM",
  url: "https://x.com/mvahbiav",
  locationLink: "https://www.google.com/maps/place/delhi",
  location: "Delhi, India",
  description:
    "Building things that work and look great.",
  summary:
    "I’m a software engineer who first got into coding back in school and never really grew out of it. I like taking ideas and actually making them real, whether that means building things solo or leading a team to get it done. I’ve got a mix of problem-solver brain and people skills, so I can write the code, explain it without the jargon, and keep the vibes good while doing it.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ivaibhavm",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mvahbiav",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Example",
  //     href: "https://example.com",
  //     badges: [],
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/logo",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "description",
  //   }
  // ],
  education: [
    {
      school: "GGSIPU",
      href: "http://www.ipu.ac.in/",
      degree: "B.Tech (Information Technology)",
      logoUrl: "/GGSIPU.png",
      start: "2023",
      end: "2027",
    }
  ],
  projects: [
    {
      title: "browz",
      href: "https://browz.vercel.app",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
        "Randomly stumbled upon web containers and learned how they work. Next thing I thought was to build something related to it and hence built browz, an AI website builder that just spits out code and shows the preview instantly in a container.",
      technologies: [
        "React",
        "Typescript",
        "Web Containers",
        "Express",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://browz.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/browz.png",
      video:
        ""
    },
  ],
} as const;
