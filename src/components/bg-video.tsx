"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export interface BackgroundVideoProps {
  src: string;
  soundOn?: boolean;
  sectionInView?: boolean;
  className?: string;
}

const BackgroundVideo = ({
  src,
  soundOn = false,
  sectionInView = false,
  className,
}: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Load the video only when the section is in the viewport
  useEffect(() => {
    const video = videoRef.current;
    if (sectionInView) {
      if (video) {
        const dataSrc = video.getAttribute("data-src") || "";
        video.src = dataSrc;
        video.load();
        setIsVideoLoaded(true); // Prevent future attempts to load the video again
      }
    }

    if (!sectionInView && isVideoLoaded && video) {
      video.pause();
      video.currentTime = 0;
    }

    return () => {
      if (video) {
        video.src = "";
      }
    };
  }, [src, isVideoLoaded, sectionInView]);
  return (
    <video
      ref={videoRef}
      data-src={src}
      autoPlay
      loop
      muted={!soundOn}
      playsInline
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden",
        className,
      )}
    />
  );
};

export default BackgroundVideo;
