import { FC } from "react";

const SeaCoverImage: FC = () => {
  return (
    <div className="h-[400px] sm:aspect-[5/3] sm:h-auto lg:aspect-auto lg:h-[550px]">
      <video className="h-full w-full object-cover object-bottom" autoPlay loop muted playsInline>
        <source src="/assets/key-concepts-background-7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SeaCoverImage;
