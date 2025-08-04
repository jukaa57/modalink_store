import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Iproducts } from "@/types/products";
import { Button } from "./ui/button";
import { useCartContext } from "@/contexts/cartContext";
import Link from "next/link";

type cardProductProps = {
    product: Iproducts;
};

export function CardProduct({ product: { id, image, price, title } }: cardProductProps) {
    const { addProductInCart } = useCartContext();
    const product_id = id;

    return (
        <Card className="justify-between rounded-lg shadow-sm p-3 transition-transform transform h-auto hover:scale-105 hover:shadow-md w-full sm:w-68" >
            <Link href={`/product/${product_id}`}>
                <CardHeader className="flex justify-center mb-2 bg-white h-48 lg:h-52 items-center roundend-md overflow-hidden">
                    <Image
                        src={image as string}
                        alt={title}
                        width={100}
                        height={100}
                    />
                </CardHeader>

                <CardContent className="text-center">
                    <h4 className="text-sm font-medium text-foreground mb-2">{title}</h4>
                    <p className="text-sm font-bold text-foreground">$ {price.toFixed(2)}</p>
                </CardContent>
            </Link>

            <CardFooter className="flex flex-col">
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