"use client"

import { Iproducts } from "@/types/products";
import { CardProduct } from "@/components/CardProduct";
import { useProductContext } from "@/contexts/productContext";
import { Text } from "./ui/text";
import { useEffect, useState } from "react";

type catalogProps = {
  products: Iproducts[];
};

export function CatalogProducts( {products}: catalogProps) {
  const { filterTerms, search, setProductsFound, productsFound } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState<Iproducts[]>([])
   

  useEffect(() => {
    const result = filterTerms(products);
    setFilteredProducts(result);
    setProductsFound(result.length);
  }, [products, search]);
 
  return (
    <div className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-full md:w-[90%] lg:w-[80%] self-start">
      <div className=" w-full ">
      { 
        <>
          { search.length > 0 &&
            <Text className="text-sm">Product(s) found: {productsFound}</Text>
          }
          <br />
          <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            { filteredProducts.map((product) => 
              <CardProduct key={product.id} product={product} />
            )}
          </div>
        </>
      }
      </div>
    </div>
  );
};