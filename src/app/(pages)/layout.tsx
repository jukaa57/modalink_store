"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/header";
import { CartButton } from "@/components/CartButton";
import { useCartContext } from "@/contexts/cartContext";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { useProductContext } from "@/contexts/productContext";
import { usePathname } from 'next/navigation';
import { Drawer } from "@/components/Drawer";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function Layout({
  children
}: {
  children:  React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const { productInCart } = useCartContext();
  const { search, setSearch, cleanUpSearchBar } = useProductContext();
  const [mounted, setMounted] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  
  const router = usePathname();

  useEffect(()=> setMounted(true), [])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Se for página prinipal mostrará barra de pesquisa
  const ShowSearchBar = () => {
    if(router.trim() === "/") {
      return true;
    };
    cleanUpSearchBar();
    return false;
  };

  if (!mounted) return null
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
        <div className="flex items-center gap-4">
          { theme === "dark" ?
            <IconSun className="text-yellow-400 cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
          :
            <IconMoon className="text-foreground cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
          }
          <div className="flex flex-col items-center justify-start pt-1.5">
            <Badge
              className="left-1.5"
              count={productInCart.length}
            />

            <CartButton
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </Header>
      <main className="py-16 min-h-screen">
        {children}
      </main>
      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </>
  );
}
