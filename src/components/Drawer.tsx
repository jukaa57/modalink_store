"use client"

import { useCartContext } from '@/contexts/cartContext';
import { IconShoppingCart, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { ToggleQuantity } from './ToggleQtd';

type drawerProps = {
  isOpen: boolean;
  onClose: () => void
}

export function Drawer({ isOpen, onClose }: drawerProps) {
  const { productInCart, calculateTotal, deleteProduct, productCounter } = useCartContext();

  const shortensLongTitle = (title: string) => {
    const txt = title.length > 35 ? title.substring(0,35) + '...' : title;
    return txt;
  };

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
            <h2 className="text-xl">Cart</h2>
            <IconShoppingCart className="text-foreground" />
            <p>| Total Products {productCounter()}</p>
          </div>

          <button onClick={onClose} className="text-lg cursor-pointer">X</button>
        </div>

        <div className="flex flex-col py-4 gap-6 items-center ">
          <div className="space-y-1.5 px-4 h-[65dvh] lg:h-[70dvh] overflow-y-scroll  w-full">
            {productInCart.map(prod => (
              <Card key={prod.id} className="flex-row justify-between items-center py-2 px-4 ">
                <CardContent className="p-0">
                  <Image
                    src={String(prod.image)}
                    alt={prod.title}
                    width={50}
                    height={60}
                  />
                  <span >{ shortensLongTitle(prod.title) }</span>
                </CardContent>

                <div className='flex flex-col gap-1 items-center justify-center'>
                  <ToggleQuantity product={prod}/>
                  <div className='flex  gap-1 items-center justify-center'>
                    <span>$ {(prod.price).toFixed(2)}</span>
                    <IconTrash className='text-destructive' onClick={() => deleteProduct(prod.id)} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col justify-between items-center w-[90%] rounded-xl p-4 gap-6 bg-background shadow-md">
            <div className="flex justify-between px-4 w-full">
              <p className='font-semibold'>Total</p>
              <h3 className='font-bold'>$ {calculateTotal().toFixed(2)}</h3>
            </div>

            <button className='bg-primary p-2 text-white rounded-md w-full' disabled={!!(productCounter() <= 0)} onClick={() => console.log("adad")} >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};