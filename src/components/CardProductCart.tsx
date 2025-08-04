import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { IproductsCart } from "@/types/products";
import { useCartContext } from "@/contexts/cartContext";
import { ToggleQuantity } from "./ToggleQtd";
import { IconTrash } from "@tabler/icons-react";
import { Text } from "./ui/text";

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
        <Card className="flex-row justify-center gap-0 items-center py-2 px-4 h-32 sm:h-28 md:h-32">
            <CardContent className="p-0 flex justify-between w-full">
                <div className="w-[65%] ">
                    <Image
                        src={String(product.image)}
                        alt={product.title}
                        width={40}
                        className="bg-white"
                        height={60}
                    />
                    <Text className="text-sm" >{ shortensLongTitle(product.title) }</Text>
                </div>
                <div className='flex flex-col items-center justify-center w-42'>
                    <div className='flex gap-4 items-center justify-between'>
                        <ToggleQuantity product={product}/>
                        <IconTrash className='text-destructive' onClick={() => deleteProduct(product.id)} />
                    </div>
                    <Text type="title">$ {(product.price).toFixed(2)}</Text>
                </div>
            </CardContent>
        </Card>
    );
};