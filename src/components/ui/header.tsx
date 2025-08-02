import { cn } from "@/lib/utils";

type headerProps = Readonly<{children: React.ReactNode}> & {
  className?: string
}

export function Header({children, className}: headerProps) {
  return (
    <div className={cn("bg-opacity-30 backdrop-blur-lg shadow-xl sticky top-0 w-full h-16 px-4 lg:px-10 flex items-center justify-between z-50", className)}>
      {children}
    </div>
  );
};