import { useCartContext } from "@/contexts/cartContext";
import { IproductsCart } from "@/types/products";
import { Text } from "./ui/text";

type toggleProps = {
    product: IproductsCart;
};

export function ToggleQuantity({ product }: toggleProps) {
  const { addProductInCart, removeQuantityOfProduct } = useCartContext();

    return (
        <div className="flex w-full gap-2 items-center">
            <button
            className="px-2 h-[24px] bg-primary-foreground text-foreground font-bold rounded-sm text-center"
            onClick={() => removeQuantityOfProduct({id: product.id, price: product.price, title: product.title, image: product.image, qtd: 1})}>
                -
            </button>
                <Text className="text-sm"> {product.qtd} und </Text>
            <button
            className="px-2 h-[24px] bg-primary-foreground text-foreground font-bold rounded-sm"
            onClick={() => addProductInCart({id: product.id, price: product.price, title: product.title, image: product.image, qtd: 1})}
            >
                +
            </button>
        </div>
    );
};