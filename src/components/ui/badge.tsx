import { cn } from "@/lib/utils";

type badgeProps = {
    count?: number;
    className?: string;
};

export function Badge({count = 0, className, ...props}: badgeProps) {
    return (
        <span
        className={cn("inline-flex items-center px-1 py-0.5 text-xs font-medium text-white bg-primary rounded-full shadow-md relative", className)}
        {...props}
        >
            {count}
        </span>
    );
};