import { useCartContext } from "@/contexts/cartContext";
import { IproductsCart } from "@/types/products";

type toggleProps = {
    product: IproductsCart;
};

export function ToggleQuantity({ product }: toggleProps) {
  const { addProductInCart, removeQuantityOfProduct } = useCartContext();

    return (
        <div className="flex gap-2">
            <button className="px-2 bg-primary-foreground text-white font-bold rounded-sm" onClick={() => removeQuantityOfProduct({id: product.id, price: product.price, title: product.title, image: product.image, qtd: 1})}>-</button>
            <p>{product.qtd} und</p>
            <button className="px-2 bg-primary-foreground text-white font-bold rounded-sm" onClick={() => addProductInCart({id: product.id, price: product.price, title: product.title, image: product.image, qtd: 1})}>+</button>
        </div>
    );
};