export interface Iproducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image?: string;
    rating: {rate: number, count: number};
};

export interface IproductsCart {
    id: number;
    title: string;
    price: number;
    image?: string;
    qtd: number;
};