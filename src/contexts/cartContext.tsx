"use client"
import { IproductsCart } from "@/types/products";
import { createContext, useContext, useState } from "react";

type cartProps = {
    productInCart: IproductsCart[];
    addProductInCart: (prod: IproductsCart) => void;
    removeQuantityOfProduct: (prod: IproductsCart) => void;
    deleteProduct: (id: number) => void;
    calculateTotal: () => number;
    productCounter: () => number;
};

const CartContext = createContext<cartProps>({} as cartProps);

export const CartProvaider = ({ children }: Readonly<{
    children: React.ReactNode; 
}>) => {
    const [productInCart, setProductInCart] = useState<IproductsCart[]>([]);

    function addProductInCart(produdct: IproductsCart) {
        setProductInCart((prev) => {
            // Verifica se o produto já está no carrinho
            const productExists = prev.find((e) => e.id === produdct.id);

            // Se já estiver, atualiza apenas a quantidade
            if (productExists) {
                return prev.map((item) =>
                    item.id === produdct.id
                        ? { ...item, qtd: item.qtd + produdct.qtd }
                        : item
                );
            }

            // Se não exitir retornar um novo array, copiando o valor do array anterior com o método spread e adiciona o novo produto
            return [...prev, produdct];
        });

    };

    function removeQuantityOfProduct(product: IproductsCart) {
        setProductInCart((prev) => {
            // Tenta encontrar o produto no carrinho
            const productIndex = prev.findIndex((e) => e.id === product.id);

            // Se não existir, retorna o carrinho sem mudanças
            if (productIndex === -1) return prev;

            const productInCart = prev[productIndex];

            // Se ainda houver quantidade, vai decrementando
            if (productInCart.qtd > 1) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qtd: item.qtd - product.qtd }
                        : item
                );
            }
            // remove do carrinho se não houver quantidade
            return prev.filter((item) => item.id !== product.id);
        });
    };

    function deleteProduct(prodId: number) {
        setProductInCart((prev) => {
            // remove o produto do carrinho
            return prev.filter((item) => item.id !== prodId);
        });
    };

    function calculateTotal() {
        // Soma preço dos produtos e retorna o valor total do carrinho
        const sum = (productInCart.reduce((accumulator, {price, qtd}) => {return (price * qtd) + accumulator}, 0)).toFixed(2);
        return parseFloat(sum);
    };

    function productCounter() {
        // Soma a quantidade total de produtos no carrinho, mesmo quando há mais de 1 do mesmo produto
        const sum = (productInCart.reduce((accumulator, { qtd }) => {return qtd + accumulator}, 0)).toFixed(2);
        return parseFloat(sum);
    }

    return (
        <CartContext.Provider value={{ addProductInCart, productInCart, removeQuantityOfProduct, calculateTotal, deleteProduct, productCounter }}>
            { children }
        </CartContext.Provider>
    );
};

export function useCartContext() {
    const ctx = useContext(CartContext);
    return ctx;
};