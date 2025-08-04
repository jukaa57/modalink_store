"use client"

import { Iproducts } from "@/types/products";
import Image from "next/image";
import { useCartContext } from "@/contexts/cartContext";
import { Button } from "./ui/button";
import { Drawer } from "./Drawer";
import { useState } from "react";
import { StarRating } from "./ui/starRating";
import SimilarCarousel from "./SimilarCarousel";

type detailsProps = {
    product: Iproducts;
    similar: Iproducts[];
};

export function ProductDetails({ product, similar }: detailsProps) {
  const { addProductInCart } = useCartContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

    return (
        <>
            <div className="flex flex-col p-4 gap-4 lg:flex-row md:w-[90%] lg:w-[80%]">
                <div className="bg-white flex items-center justify-center lg:w-full">
                    <Image src={product.image as string} alt={product.title} width={150} height={150} className=" lg:w-96"  />
                </div>

                <div className="w-full">
                    <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
                    <code className="text-gray-600">{product.category}</code>

                    <div className="flex justify-start gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <p>{product.rating.rate}</p>
                            <StarRating rating={product.rating.rate} />
                        </div>
                        <p className="text-gray-600">({product.rating.count})</p>
                    </div>

                    <p className="text-lg mt-2">$ {product.price.toFixed(2)}</p>
                    <br />
                    <p className="mt-4 font-semibold">About product</p>
                    <p className="">{product.description}</p>

                    <Button
                        className="text-white cursor-pointer mt-16 w-full lg:w-42"
                        onClick={() => addProductInCart({id: product.id, image: product.image, price: product.price, title: product.title, qtd: 1})}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 gap-10">
                <h4 className="font-bold text-xl">Similar Products</h4>

                <SimilarCarousel products={similar} />
            </div>

            <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
        </>
    );
};