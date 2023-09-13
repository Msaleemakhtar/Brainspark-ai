import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative w-40 h-40 animate-spin">
        <Image alt="loading" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">
        Brainspark is thinking....
      </p>
    </div>
  );
};
