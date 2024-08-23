import { FC } from "react";
import Parallax from "@/components/animations/parallax";

const MountainCoverImage: FC = () => {
  return (
    <Parallax
      heightClasses="h-[400px] lg:h-[550px]"
      className="bg-cover bg-bottom sm:aspect-[5/3] sm:h-auto lg:aspect-auto"
      src="/assets/home-illustration-2.png"
    />
  );
};

export default MountainCoverImage;
