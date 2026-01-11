import Image from "next/image";
import HorizontalLine from "./ui/horizontalLine";
import SocialLinks from "./socialLinks";
import DynamicDetails from "./dynamicDetails";

const About = () => {
  return (
    <div>
      <div className="flex py-4">
        <div className="shrink-0 rounded-lg border border-neutral-300 p-2 dark:border-neutral-800">
          <Image
            src="/me.png"
            height={100}
            width={100}
            alt="Vaibhav Mishra"
            className="h-20 w-20 rounded-md sm:h-24 sm:w-24"
          />
        </div>

        <div className="mx-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl font-semibold sm:text-4xl">
              Vaibhav Mishra
            </h1>
            <DynamicDetails />
          </div>
          <SocialLinks />
        </div>
      </div>

      <HorizontalLine />

      <div className="space-y-3 px-1 py-4 text-sm leading-relaxed sm:text-base">
        <p>
          Hi, I’m Vaibhav, a full-stack developer who enjoys building
          thoughtful, well-crafted products. I care deeply about clean design,
          and the small details that make an interface feel right.
        </p>
        <p>
          I’m comfortable adapting to any tech stack a project needs. Open
          source contributions have taught me how to understand systems quickly
          and improve them.
        </p>
      </div>
    </div>
  );
};

export default About;
