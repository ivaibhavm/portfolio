import About from "@/components/about";
import Canvas from "@/components/canvas";
import Projects from "@/components/projects";
import Separator from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Canvas />
      <Separator />

      <About />
      <Separator />

      <Projects />
      <Separator />

      <Separator />

      <Separator />
    </>
  );
}
