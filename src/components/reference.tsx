import Link from "next/link";

export interface ReferenceProps {
  id: number;
  className?: string;
}

const Reference = ({ id, className }: ReferenceProps) => {
  return (
    <Link href={`/references#${id + 1}`} className={className}>
      <span className="sr-only">Reference </span>
      <sup>[{id + 1}]</sup>
    </Link>
  );
};

export default Reference;
