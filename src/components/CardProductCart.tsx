import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { IproductsCart } from "@/types/products";
import { useCartContext } from "@/contexts/cartContext";
import { ToggleQuantity } from "./ToggleQtd";
import { IconTrash } from "@tabler/icons-react";

type cardProductCartProps = {
    product: IproductsCart;
};

export function CardProductCart({ product }: cardProductCartProps) {
    const { deleteProduct } = useCartContext();

    const shortensLongTitle = (title: string) => {
        const txt = title.length > 30 ? title.substring(0,35) + '...' : title;
        return txt;
    };

    return (
        <Card className="flex-row justify-between items-center py-2 px-4 h-36 sm:h-28 md:h-32 text-sm">
            <CardContent className="p-0 w-[70%]">
                <Image
                    src={String(product.image)}
                    alt={product.title}
                    width={40}
                    height={60}
                />
                <span >{ shortensLongTitle(product.title) }</span>
            </CardContent>

            <div className='flex flex-col items-center justify-between w-32'>
                <ToggleQuantity product={product}/>
                <div className='flex  gap-2 items-center justify-between'>
                    <span className="font-semibold">$ {(product.price).toFixed(2)}</span>
                    <IconTrash className='text-destructive' onClick={() => deleteProduct(product.id)} />
                </div>
            </div>
        </Card>
    );
};