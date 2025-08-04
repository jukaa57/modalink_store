import { fetchProducts } from "../api/products";
import { CatalogProducts } from "@/components/CatalogProducts";
import { Iproducts } from "@/types/products";

export default async function Index() {
  const products: Iproducts[] = await fetchProducts();

  return (
    <div className="font-sans items-center justify-items-center gap-16">  
      <CatalogProducts products={products} />
    </div>
  );
};