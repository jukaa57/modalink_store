"use client"
import { useEffect, useState, useTransition } from "react";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/ui/header";
import { Badge } from "@/components/ui/badge";
import { CartButton } from "@/components/CartButton";
import { Drawer } from "@/components/Drawer";
import { Skeleton } from "@/components/ui/skeleton";

import { getProducts } from "../api/products";
import { Iproducts } from "@/types/products";
import { CardProduct } from "@/components/CardProduct";
import { useCartContext } from "@/contexts/cartContext";

export default function Home() {
  const { productInCart } = useCartContext();
  const [isPending, startTransition] = useTransition();

  const [listProducts, setListProducts] = useState<Iproducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const filterTerms = listProducts.length > 0 
  ? listProducts.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()) || prod.category.toLowerCase().includes(search.toLowerCase())) : [];

  useEffect(() => {
    startTransition(async() => {
      setListProducts(await getProducts());
    });
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
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

      <main className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-[75%]">
        <div className=" w-full">
          { isPending ? (
              <div className="space-y-2">
                <Skeleton className="w-full h-8" />
                <Skeleton className="w-full h-8" />
                <Skeleton className="w-full h-8" />
              </div>
            ) : (
              <>
                {search.length > 0 && (<p>Product(s) found: {filterTerms.length}</p>)}
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                  { filterTerms.map((product) => (
                    <CardProduct key={product.id} product={product} />
                  ))}
                </div>
              </>
            )
          }
        </div>
      </main>

      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </div>
  );
};