export type Technology = {
  name: string;
  svg: React.ReactNode; // SVG svg component
};

export type Project = {
  title: string;
  description: string;
  img: string;
  technologies: Technology[];
  link: string;
};
