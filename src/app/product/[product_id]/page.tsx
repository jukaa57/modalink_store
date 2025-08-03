import { fetchProductById, fetchProducts } from "@/app/api/products";
import { Iproducts } from "@/types/products";
import Link from "next/link";
import { Metadata } from "next";

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
      <div className="p-6">
        <Link href="/">← Voltar ao catálogo</Link>
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-48 my-4" />
        <p className="text-gray-600">Categoria: {product.category}</p>
        <p className="text-lg mt-2">Preço: ${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    );
  } catch (error) {
    return <p>Produto não encontrado.</p>;
  };
};