interface Iproducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    qtd?: number;
    rating: {rate: number, count: number};
};