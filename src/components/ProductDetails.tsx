"use client"

import Image from "next/image";
import { Iproducts } from "@/types/products";
import { useCartContext } from "@/contexts/cartContext";
import { Button } from "./ui/button";
import { StarRating } from "./ui/starRating";
import SimilarCarousel from "./SimilarCarousel";
import { Text } from "./ui/text";

type detailsProps = {
    product: Iproducts;
    similar: Iproducts[];
};

export function ProductDetails({ product, similar }: detailsProps) {
  const { addProductInCart } = useCartContext();

    return (
        <div className="items-center justify-center px-4 py-12">
            <div className="flex flex-col gap-4 lg:flex-row md:w-[90%] lg:w-[80%]">
                <div className="bg-white flex items-center justify-center lg:w-full rounded-md ">
                    <Image src={product.image as string} alt={product.title} width={150} height={150} className=" lg:w-96"  />
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-4">
                        <Text type="title" className="text-2xl">{product.title}</Text>

                        <code className="text-foreground bg-muted px-1.5 rounded-md w-fit">{product.category}</code>

                        <div className="flex justify-start gap-4 items-center">
                            <div className="flex items-center gap-2">
                                <p>{product.rating.rate}</p>
                                <StarRating rating={product.rating.rate} />
                            </div>
                            <p className="text-gray-600">({product.rating.count})</p>
                        </div>
                    </div>

                    <Text type="title" className="text-3xl mt-8">$ {product.price.toFixed(2)}</Text>

                    <Text className="mt-4 font-semibold ">About product</Text>
                    <Text>{product.description}</Text>

                    <Button
                        className="text-white cursor-pointer mt-16 w-full lg:w-42"
                        onClick={() => addProductInCart({id: product.id, image: product.image, price: product.price, title: product.title, qtd: 1})}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-8 gap-10 bg-muted w-full pt-4 rounded-md">
                <Text type="title" className="text-2xl">Similar Products</Text>
                <SimilarCarousel products={similar} />
            </div>
        </div>
    );
};