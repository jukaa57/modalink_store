import { cn } from "@/lib/utils";
import { type Icon} from "@tabler/icons-react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
};

type InputProps =  React.InputHTMLAttributes<HTMLInputElement> &  {
    className?: string;
};

type componentProps = {
    divProps?: ContainerProps;
    inputProps?: InputProps;
    IconLeft?: Icon
    IconRight?: Icon
};

export function Input({divProps, inputProps, IconRight, IconLeft}: componentProps) {

    return (
        <div className={cn("flex justify-center items-center px-1.5 py-1 border gap-1 border-border rounded-md shadow-md", divProps?.className)} {...divProps}>
            { IconLeft &&
                <IconLeft className="text-placeholder" />
            }
            <input
                className={cn("w-full sm:w-48 md:w-96 lg:w-xl focus:outline-none", inputProps?.className)} {...inputProps}
            />
            { IconRight && 
                <IconRight className="text-placeholder" />
            }
        </div>
    );
};