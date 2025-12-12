import Image from "next/image";

import icon from "@/app/icon2.png";

const AdminIconComponent = () => {
  return (
    <Image src={icon} width={24} height={24} className="h-6" alt="Natural Capital Primer CMS" />
  );
};

export default AdminIconComponent;
