/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iproducts } from "@/types/products";
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export async function fetchProducts(): Promise<Iproducts[]> {  
  try {
    const res = await api.get("/products");
    if (res.status !== 200) {
      console.error('Error get products');
      return [];
    };

    return res.data;
  } catch (error) {
    throw new Error('Error get products', (error as any).message);
  };
};

export async function fetchProductById(productId: string): Promise<Iproducts | null> {
  try {
    const res = await api.get(`/products/${productId}`);
    if (res.status !== 200) {
      console.error('Error get products');
      return null
    }

    return res.data;
  } catch (error) {
    throw new Error('Error get products', (error as any).message);
  };
};