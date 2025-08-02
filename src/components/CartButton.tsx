import { cn } from "@/lib/utils";
import { IconShoppingCart } from "@tabler/icons-react";

type cartButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

export function CartButton({className, ...props}: cartButtonProps) {

    return (
        <button className={cn("cursor-pointer hover:opacity-75 transition duration-200 ease-in-out", className )} {...props}>
            <IconShoppingCart className="text-foreground"/>
        </button>
    );
};