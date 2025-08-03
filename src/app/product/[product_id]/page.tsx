import { fetchProductById, fetchProducts } from "@/app/api/products";
import { Iproducts } from "@/types/products";
import Link from "next/link";
import { Metadata } from "next";
import { ProductDetails } from "@/components/ProductDetails";

type Props = {
  params: { product_id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Produto ${params.product_id}`,
  };
};

export async function generateStaticParams() {
  const products: Iproducts[] = await fetchProducts();

  return products.map((product) => ({
    product_id: product.id.toString(),
  }));
};

export default async function ProductDetailPage({ params }: Props) {
  const productId = params.product_id;

  try {
    const product: Iproducts = await fetchProductById(productId);

    return (
      <ProductDetails product={product} />
    );
  } catch (error) {
    return <p>Produto não encontrado.</p>;
  };
};