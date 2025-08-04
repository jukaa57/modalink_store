"use client"

import { Iproducts } from "@/types/products";
import { CardProduct } from "@/components/CardProduct";
import { useProductContext } from "@/contexts/productContext";
import { Text } from "./ui/text";

type catalogProps = {
  products: Iproducts[];
};

export function CatalogProducts( {products}: catalogProps) {
  const { filterTerms, search, productsFound } = useProductContext();
 
  return (
    <div className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-full md:w-[90%] lg:w-[75%] self-start">
      <div className=" w-full ">
      { 
        <>
          { search.length > 0 &&
            <Text className="text-sm">Product(s) found: {productsFound}</Text>
          }
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            { filterTerms(products).map((product) => 
              <CardProduct key={product.id} product={product} />
            )}
          </div>
        </>
      }
      </div>
    </div>
  );
};