import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const QuizButton = ({
  children,
  isRight,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  disabled,
  ...props
}: {
  children: React.ReactNode;
  isRight: boolean;
  isActive: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: () => void;
  disabled?: boolean;
  props?: { [key: string]: unknown };
}) => (
  <Button
    variant="outline-white"
    className={cn(
      "flex gap-[10px] border-grey-400 py-[5px] pl-[5px] pr-[15px] hover:border-white",
      {
        "bg-black text-white": !isActive,
        "bg-green-500 text-black": isActive && isRight,
        "bg-red text-black": isActive && !isRight,
      },
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span
      className={cn("flex h-8 w-8 items-center justify-center rounded-full border", {
        "border-white": !isActive,
        "text-black": isActive,
      })}
    >
      {isActive && <span className="h-[10px] w-[10px] rounded-full bg-black" />}
    </span>
    {children}
  </Button>
);

export default QuizButton;
