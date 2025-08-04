"use client"
import { Iproducts, IproductsCart } from "@/types/products";
import { createContext, useContext, useState } from "react";

type productProps = {
    search: string;
    searchCleanUp: () => void;
    productsFound: number;
    setSearch: (a: string) => void;
    filterTerms: (prodList: Iproducts[]) => Iproducts[] | []; 
};

const ProductContext = createContext<productProps>({} as productProps);

export const ProductProvaider = ({ children }: Readonly<{
    children: React.ReactNode; 
}>) => {
    const [search, setSearch] = useState<string>("");
    const [productsFound, setProductsFound] = useState<number>(0);

    function filterTerms(products: Iproducts[]) {
        const filter = products.length > 0 
        ? products.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()) || prod.category.toLowerCase().includes(search.toLowerCase())) : [];
        setProductsFound(filter.length);
        return filter;
    };

    function searchCleanUp() {
        setSearch("");
    };

    return (
        <ProductContext.Provider value={{ search, setSearch, filterTerms, productsFound, searchCleanUp}}>
            { children }
        </ProductContext.Provider>
    );
};

export function useProductContext() {
    const ctx = useContext(ProductContext);
    return ctx;
};