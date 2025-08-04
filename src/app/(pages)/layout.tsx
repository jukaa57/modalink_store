"use client"
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/header";
import { CartButton } from "@/components/CartButton";
import { useCartContext } from "@/contexts/cartContext";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { useProductContext } from "@/contexts/productContext";
import { usePathname } from 'next/navigation';

export default function Layout({
  children
}: {
  children:  React.ReactNode;
}) {
  const { productInCart } = useCartContext();
  const { search, setSearch, searchCleanUp } = useProductContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  
  const router = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const ShowSearchBar = () => {
    if(router.trim() === "/") {
      return true;
    };
    searchCleanUp();
    return false;
  };

  return (
    <>
      <Header>
        <Link href="/">
          <Logo />
        </Link>

        {
          ShowSearchBar() &&
          <SearchBar
            searchTerms={search}
            setSearchTerms={setSearch}
          />
        }

        <div className="flex flex-col items-center justify-start h-full pt-1.5">
          <Badge
            className="left-1.5"
            count={productInCart.length}
          />

          <CartButton
            onClick={toggleDrawer}
          />
        </div>
      </Header>

      <main>
        {children}
      </main>
    </>
  );
}
