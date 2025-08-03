import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Iproducts } from "@/types/products";
import { Button } from "./ui/button";
import { useCartContext } from "@/contexts/cartContext";

type cardProductProps = {
    product: Iproducts
}

export function CardProduct({ product: { id, image, price, title } }: cardProductProps) {
    const { addProductInCart } = useCartContext();

    return (
        <Card className="justify-between rounded-lg shadow-sm p-3 transition-transform transform h-auto hover:scale-105 w-full" >
            <CardHeader className="flex justify-center mb-4 bg-white h-52 items-center roundend-md overflow-hidden">
                <Image
                    src={image as string}
                    alt={title}
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </CardHeader>

            <CardContent className="text-center">
                <h4 className="text-sm font-medium text-foreground mb-2">{title}</h4>
                <p className="text-sm font-bold text-foreground">$ {price.toFixed(2)}</p>
            </CardContent>

            <CardFooter className="flex flex-col space-y-1 justify-end">
                <Button
                    className="text-white cursor-pointer w-full bg-primary-foreground"
                //   onClick={() => removeQuantityOfProduct({id: product.id, image: product.image, price: product.price, title: product.title, qtd: 1})}
                >
                Details
                </Button>
                <Button 
                    className="text-white cursor-pointer w-full"
                    onClick={() => addProductInCart({id, image, price, title, qtd: 1})}
                >
                Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};