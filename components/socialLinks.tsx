"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Socials from "@/data/socials";
import { List } from "lucide-react";

const GAP = 8;

const SocialLinks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(Socials.length);

  useLayoutEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const container = containerRef.current;
    const measureChildren = Array.from(
      measureRef.current.children,
    ) as HTMLElement[];
    const socialButtons = measureChildren.slice(0, -1);
    const moreButton = measureChildren[measureChildren.length - 1];

    const resize = () => {
      const availableWidth = container.offsetWidth;
      let usedWidth = 0;
      let count = 0;

      // First, check if all social buttons fit
      for (const btn of socialButtons) {
        const width = btn.offsetWidth + GAP;
        if (usedWidth + width > availableWidth) break;
        usedWidth += width;
        count++;
      }

      // If all buttons fit, show all of them (no "More" button needed)
      if (count >= Socials.length) {
        setVisibleCount(Socials.length);
        return;
      }

      // If not all fit, reserve space for "More" button
      const moreButtonWidth = moreButton
        ? moreButton.offsetWidth + GAP
        : 80 + GAP;

      // Recalculate with space reserved for "More" button
      usedWidth = 0;
      count = 0;
      for (const btn of socialButtons) {
        const width = btn.offsetWidth + GAP;
        if (usedWidth + width + moreButtonWidth > availableWidth) break;
        usedWidth += width;
        count++;
      }

      setVisibleCount(count);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const visible = Socials.slice(0, visibleCount);
  const hidden = Socials.slice(visibleCount);

  return (
    <>
      {/* Actual visible row */}
      <div
        ref={containerRef}
        className="flex items-center gap-2 overflow-hidden"
      >
        {visible.map((site, index) => (
          <Button
            key={index}
            asChild
            variant="secondary"
            size="sm"
            className="shrink-0 active:scale-[0.98]"
          >
            <a href={site.href} className="flex items-center gap-2">
              {site.img}
              {site.title}
            </a>
          </Button>
        ))}

        {hidden.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="active:scale-[0.98]"
              >
                <List /> More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {hidden.map((site, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={site.href} className="flex items-center gap-2">
                    {site.img}
                    {site.title}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Hidden measurement row */}
      <div
        ref={measureRef}
        className="invisible absolute flex gap-2"
        aria-hidden
      >
        {Socials.map((site, index) => (
          <Button
            key={index}
            size="sm"
            variant="secondary"
            className="active:scale-[0.98]"
          >
            {site.img}
            {site.title}
          </Button>
        ))}
        <Button size="sm" variant="secondary">
          <List /> More
        </Button>
      </div>
    </>
  );
};

export default SocialLinks;
