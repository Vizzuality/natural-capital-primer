import { FC } from "react";

const SeaCoverImage: FC = (props) => {
  return (
    <>
      <video
        className="h-full w-full object-cover object-bottom"
        autoPlay
        loop
        muted
        playsInline
        {...props}
      >
        <source src="/assets/key-concepts-background-7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default SeaCoverImage;
