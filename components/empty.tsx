import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-centers">
      <div className="relative h-40 w-40">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className= "text-sm text-muted-foreground text-center">{label}</p>
    </div>
  );
};
