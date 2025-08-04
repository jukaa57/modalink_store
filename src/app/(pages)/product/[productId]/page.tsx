"use server"
import { fetchProductById, fetchProducts } from "@/app/api/products";
import { notFound } from 'next/navigation';
import { ProductDetails } from "@/components/ProductDetails";

type productsDetailsProps = {
  params: Promise<{productId: string}>;
};

export default async function ProductDetailPage({ params }: productsDetailsProps) {
  const { productId } = await params;
  try {
    // Faz chamada para api
    const product = await fetchProductById(productId);
    const products = await fetchProducts();

    if (!product) return notFound()

    // Filtra produtos da mesma categoria para mostrar similares
    const similarProducts = products.filter(prod => prod.category === product?.category && prod.id !== product.id);

    return (
      <ProductDetails product={product} similar={similarProducts} />
    );
  } catch (error) {
    console.error(error)
    return notFound();
  };
};