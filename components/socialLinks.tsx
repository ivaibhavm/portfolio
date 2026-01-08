import { Button } from "./ui/button";
import Socials from "@/data/socials";

const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      {Socials.map((site, index) => {
        return (
          <div key={index}>
            <Button
              asChild
              variant={"secondary"}
              size="sm"
              className="active:scale-[0.98]"
            >
              <a href={site.href}>
                {site.img}
                {site.title}
              </a>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
