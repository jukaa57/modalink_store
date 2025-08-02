"use client"
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/ui/header";
import { Badge } from "@/components/ui/badge";
import { CartButton } from "@/components/CartButton";
import { Drawer } from "@/components/Drawer";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
            count={0}
            className="left-2"
          />
          <CartButton
            onClick={toggleDrawer}
          />
        </div>
      </Header>

      <main className="flex gap-8 row-start-2 items-center sm:items-start p-4 w-[75%]">
        <div className=" w-full">

        </div>
      </main>

      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </div>
  );
};