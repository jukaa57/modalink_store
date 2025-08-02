"use client"
import { createContext, useContext, useState, useEffect } from "react";

type productCartProps = {
    id: number;
    title: string;
    image?: string;
    price: number;
    qtd: number;
};

type cartProps = {
    productInCart: productCartProps[];
    addProductInCart: (prod: productCartProps) => void;
    removeQuantityOfProduct: (prod: productCartProps) => void;
    deleteProduct: (id: number) => void;
    calculateTotal: () => number;
};

const CartContext = createContext<cartProps>({} as cartProps);

export const CartProvaider = ({ children }: Readonly<{
    children: React.ReactNode; 
}>) => {

    const [productInCart, setProductInCart] = useState<productCartProps[]>([]);

    useEffect(() => {
        // Here it is updated whenever the cart changes.  
        calculateTotal();
    }, [productInCart]);
    
    function addProductInCart(produdct: productCartProps) {
        setProductInCart((prev) => {
            // Verify if product already exists to cart
            const productExists = prev.find((e) => e.id === produdct.id);

            // if already exists, updated only the quantity
            if (productExists) {
                return prev.map((item) =>
                    item.id === produdct.id
                        ? { ...item, qtd: item.qtd + produdct.qtd }
                        : item
                );
            }

            // If not exists gets the previous value and updates it by adding the new product uploaded
            return [...prev, produdct];
        });

    };

    function removeQuantityOfProduct(product: productCartProps) {
        setProductInCart((prev) => {
            // Try find the product in the cart
            const productIndex = prev.findIndex((e) => e.id === product.id);

            // If not exists, return the cart without changes
            if (productIndex === -1) return prev;

            const productInCart = prev[productIndex];

            // If the quantity is greater than 1, decrease the quantity
            if (productInCart.qtd > 1) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qtd: item.qtd - product.qtd }
                        : item
                );
            }
            // remove from cart if less than or equal to 1
            return prev.filter((item) => item.id !== product.id);
        });
    };

    function deleteProduct(prodId: number) {
        setProductInCart((prev) => {
            // remove product from cart
            return prev.filter((item) => item.id !== prodId);
        });
    };

    function calculateTotal() {
        // Sum total price products
        const sum = (productInCart.reduce((accumulator, {price, qtd}) => {return (price * qtd) + accumulator}, 0)).toFixed(2);
        return parseFloat(sum);
    };

    return (
        <CartContext.Provider value={{ addProductInCart, productInCart, removeQuantityOfProduct, calculateTotal, deleteProduct }}>
            { children }
        </CartContext.Provider>
    );
};

export function useCartContext() {
    const ctx = useContext(CartContext);
    return ctx;
};