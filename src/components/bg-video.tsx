"use client";

import { useEffect, useRef, useState } from "react";

const BackgroundVideo = ({
  src,
  soundOn = false,
  sectionInView = false,
}: {
  src: string;
  soundOn: boolean;
  sectionInView: boolean;
}) => {
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
      className="pointer-events-none absolute inset-0 h-[800px] w-full object-cover opacity-20 mix-blend-luminosity motion-reduce:hidden"
    />
  );
};

export default BackgroundVideo;
