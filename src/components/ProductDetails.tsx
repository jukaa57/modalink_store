"use client"

import { Iproducts } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

type detailsProps = {
    product: Iproducts
}

export function ProductDetails({ product }: detailsProps) {

    return (
      <div className="p-6">
        <Link href="/">← Voltar ao catálogo</Link>
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <Image src={product.image as string} alt={product.title} width={150} height={150} className="my-4" />
        <p className="text-gray-600">Categoria: {product.category}</p>
        <p className="text-lg mt-2">Preço: ${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    );
};