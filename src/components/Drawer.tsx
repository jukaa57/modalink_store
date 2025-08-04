"use client"

import { useCartContext } from '@/contexts/cartContext';
import { IconShoppingCart } from '@tabler/icons-react';
import { CardProductCart } from './CardProductCart';
import { Text } from './ui/text';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

type drawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Drawer({ isOpen, onClose }: drawerProps) {
  const { productInCart, calculateTotal, productCounter, cleanUpCart } = useCartContext();

  const router = useRouter();

  return (
    <div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-90" 
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 w-full  md:w-96 lg:w-xl h-full bg-muted shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-99`}
      >
        <div className="flex bg-background shadow-md justify-between p-4 border-b border-border">
          <div className="flex justify-between items-center gap-1.5" >
            <Text type='title' className="text-xl">Cart</Text>
            <IconShoppingCart className="text-foreground" />
            <Text>| Total Products {productCounter()}</Text>
          </div>

          <button onClick={onClose} className="text-lg cursor-pointer">X</button>
        </div>

        <div className="flex flex-col py-4 px-2 gap-6 items-center ">
          <div className="space-y-1.5 h-[65dvh] lg:h-[70dvh] overflow-y-scroll w-full">
            {productInCart.map(prod =>
              <CardProductCart key={prod.id} product={prod} />
            )}
          </div>

          <div className="flex flex-col justify-between items-center w-[90%] rounded-xl p-4 gap-6 bg-background shadow-md">
            <div className="flex justify-between px-4 w-full">
              <Text type='title'>Total</Text>
              <Text type='title' className='font-extrabold'>$ {calculateTotal().toFixed(2)}</Text>
            </div>
            <Button
            className={`p-2 w-full`}
            disabled={!!(productCounter() <= 0)}
            onClick={() => {
              onClose();
              cleanUpCart();
              router.replace('/success')
            }}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};