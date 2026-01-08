import Image from "next/image";
import HorizontalLine from "./ui/horizontalLine";
import SocialLinks from "./socialLinks";
import DynamicDetails from "./dynamicDetails";

const About = () => {
  return (
    <div>
      <div className="flex items-center gap-8 py-4">
        <div className="rounded-lg border border-neutral-300 p-2 dark:border-neutral-800">
          <Image src="/me.png" height={100} width={100} alt="me"></Image>
        </div>
        <div className="mb-auto">
          <h1 className="text-4xl">Vaibhav Mishra</h1>
          <DynamicDetails />
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div className="space-y-2 px-2 py-4">
        <ul>
          <li className="flex gap-2">
            Hi, I’m Vaibhav a Full-stack developer with a focus on clean design,
            User Experience, and attention to detail.
          </li>
          <li className="flex gap-2">
            I’m driven by creating meaningful, well-crafted work that has real
            impact.
          </li>
          <li className="flex gap-2">
            I enjoy turning ideas into real, usable products, whether working
            independently or with a team.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
