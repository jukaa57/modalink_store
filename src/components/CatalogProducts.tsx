"use client"

import { useState } from "react";
import { Drawer } from "@/components/Drawer";
import { Iproducts } from "@/types/products";
import { CardProduct } from "@/components/CardProduct";
import { useProductContext } from "@/contexts/productContext";

type catalogProps = {
  products: Iproducts[];
};

export function CatalogProducts( {products}: catalogProps) {
  const { filterTerms, search, productsFound } = useProductContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <main className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-full md:w-[90%] lg:w-[80%] self-start">
        <div className=" w-full ">
        { 
          <>
            { search.length > 0 && (<p>Product(s) found: {productsFound}</p>) }
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              { filterTerms(products).map((product) => (
                <CardProduct key={product.id} product={product} />
              )) }
            </div>
          </>
        }
        </div>
      </main>

      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </>
  );
};