/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export async function getProducts() {  
    try {
        const payload = await api.get("/products");
        if (payload.status === 200) {
            return payload.data;
        };
    } catch (error) {
        console.error("Error get products ", (error as any).message);
    };
};