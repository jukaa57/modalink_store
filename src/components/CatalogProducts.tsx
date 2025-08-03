"use client"

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/ui/header";
import { Badge } from "@/components/ui/badge";
import { CartButton } from "@/components/CartButton";
import { Drawer } from "@/components/Drawer";
import { Iproducts } from "@/types/products";
import { CardProduct } from "@/components/CardProduct";
import { useCartContext } from "@/contexts/cartContext";

type catalogProps = {
  products: Iproducts[]
}

export function CatalogProducts( {products}: catalogProps) {
  const { productInCart } = useCartContext();

  const [search, setSearch] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const filterTerms = products.length > 0 
  ? products.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()) || prod.category.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <>
      <Header>
        <Logo />

        <SearchBar
          searchTerms={search}
          setSearchTerms={setSearch}
        />

        <div className="flex flex-col items-center justify-start h-full pt-1.5">
          <Badge
            count={productInCart.length}
            className="left-2"
          />

          <CartButton
            onClick={toggleDrawer}
          />
        </div>
      </Header>

      <main className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-full md:w-[90%] lg:w-[80%] self-start">
        <div className=" w-full ">
        { 
          <>
            { search.length > 0 && (<p>Product(s) found: {filterTerms.length}</p>) }
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              { filterTerms.map((product) => 
                <CardProduct key={product.id} product={product} />
              ) }
            </div>
          </>
        }
        </div>
      </main>

      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </>
  );
};