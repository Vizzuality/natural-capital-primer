import { FC } from "react";

const MountainCoverImage: FC = () => {
  return (
    <div className="h-[400px] bg-[url(/assets/home-illustration-2.png)] bg-cover bg-bottom sm:aspect-[5/3] sm:h-auto lg:aspect-auto lg:h-[550px]"></div>
  );
};

export default MountainCoverImage;
