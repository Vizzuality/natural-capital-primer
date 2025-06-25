import Image from "next/image";
import icon from "@/app/icon2.png";

const AdminLogoComponent = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="h-20 w-20 shrink-0"
        src={icon}
        width={80}
        height={80}
        alt="Natural Capital Primer CMS"
      />
      <p className="text-3xl">
        Natural Capital Primer <span className="font-bold">CMS</span>
      </p>
    </div>
  );
};

export default AdminLogoComponent;
