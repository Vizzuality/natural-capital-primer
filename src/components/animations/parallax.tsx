"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { FC, cloneElement, isValidElement } from "react";

type ParallaxProps = {
  className?: string;
  src?: string;
  heightClasses: string;
  children?: React.ReactNode & { className?: string; style?: { [key: string]: string } };
};

const Parallax: FC<ParallaxProps> = ({ className, src, heightClasses, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  scrollYProgress.on("change", (v) => {
    if (ref.current) {
      setOffsetY(v * -150);
    }
  });
  return (
    <div
      ref={ref}
      className={cn(`relative overflow-hidden lg:aspect-auto`, heightClasses, className)}
    >
      {isValidElement(children) ? (
        cloneElement(children, {
          className: "absolute left-0 top-0 h-[130%] w-full object-cover object-center",
          style: { transform: `translateY(${offsetY}px)` },
        })
      ) : (
        <div
          style={{ backgroundImage: `url(${src})`, transform: `translateY(${offsetY}px)` }}
          className="absolute left-0 top-0 h-[150%] w-full bg-cover bg-center"
        />
      )}
    </div>
  );
};

export default Parallax;
