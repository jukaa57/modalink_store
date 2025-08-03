import { fetchProducts } from "./api/products";
import { CatalogProducts } from "@/components/CatalogProducts";
import { Iproducts } from "@/types/products";

export default async function Home() {
  const products: Iproducts[] = await fetchProducts();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      
      <CatalogProducts products={products} />
    </div>
  );
};