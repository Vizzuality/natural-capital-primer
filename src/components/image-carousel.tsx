"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({
  images,
  alt,
  className,
}: {
  images: { src: string; alt?: string }[];
  alt?: string;
  className?: string;
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameCount = images.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [frameCount]);

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={alt || image.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentFrame === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
