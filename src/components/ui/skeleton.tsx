import * as React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn("w-12 h-12 bg-accent animate-pulse rounded-md", className)}
            {...props}
        />
    );
};