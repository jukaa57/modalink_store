/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iproducts } from "@/types/products";
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export async function fetchProducts(): Promise<Iproducts[]> {  
  try {
    const payload = await api.get("/products");
    if (payload.status !== 200) 
      throw new Error('Error get products');

    return payload.data;
  } catch (error) {
    throw new Error('Error get products', (error as any).message);
  };
};