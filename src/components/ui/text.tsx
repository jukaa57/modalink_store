import { cn } from "@/lib/utils";

type textProps = React.ComponentProps<"p"> & {
    type?: "text" | "title";    
    className?: string;
};

export function Text({ type = "text", className, ...props }: textProps) {
    const txt = "font-medium text-foreground ";
    const title = "text-lg font-semibold";

    return (
        <p 
            className={cn(`${type === "text" ? txt : title } text-foreground`, className)}
            {...props}
        />
    );
};