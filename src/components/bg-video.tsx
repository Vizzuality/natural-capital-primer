"use client";

import { useEffect, useRef, useState } from "react";

const BackgroundVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // Load the video only when it's in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVideoLoaded) {
          const video = videoRef.current;
          if (video) {
            const dataSrc = video.getAttribute("data-src") || "";
            video.src = dataSrc; // Set the video source;
            video.load(); // Load the video
            setIsVideoLoaded(true); // Prevent future attempts to load the video again
            observer.disconnect(); // Stop observing once the video is loaded
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the video is visible
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, isVideoLoaded]);
  return (
    <video
      ref={videoRef}
      data-src={src}
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none absolute inset-0 h-[800px] w-full object-cover opacity-20 mix-blend-luminosity motion-reduce:hidden"
    />
  );
};

export default BackgroundVideo;
