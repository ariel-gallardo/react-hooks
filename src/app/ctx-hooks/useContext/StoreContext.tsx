'use client';

import Chart from "@models/Chart";
import ChartDetail from "@models/ChartDetail";
import Product from "@models/Product";
import Store from "@models/Store";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import ProductsJson from '@json/products.json';


export interface StoreContextType{
    chart: Chart
    store: Store,
    loadStore: (page: number) => void
    unloadStore: () => void
    setPagination: Dispatch<SetStateAction<number>>
    addToChart: (id: number, q: number) => void
    remFromChart: (id: number, q: number) => void
} 

interface StoreContextProps{
    children: ReactNode
}

export const StoreContext = createContext<StoreContextType>({
    chart: {
        items: [],
        status: 'Searching'
    } as Chart,
    store: {
        products: [],
        nextPage: null,
        prevPage: null,
        page: null
    } as Store
} as StoreContextType);



const StoreProvider: React.FC<StoreContextProps> = ({children}) => {

    const [chart, setChart] = useState<Chart>({
        items: [] as ChartDetail[],
        status: 'Searching'
    } as Chart);

    const [store, setStore] = useState<Store>({
        products: [] as Product[]
    } as Store);

    const [pagination, setPagination] = useState(10);

    const loadStore = (page: number) => {
        const totalPages = Math.ceil(ProductsJson.length / pagination);
        if (page < 0 || page >= totalPages) return;
        const start = pagination * page;
        const end = start + pagination;
        const elems = ProductsJson.slice(start, end);
        setStore({
            products: elems,
            page: elems.length > 0 ? page : null,
            prevPage: page > 0 ? page - 1 : null,
            nextPage: page < totalPages - 1 ? page + 1 : null,
        });
    }

    const unloadStore = () => {
        setStore({
            nextPage: null,
            page: null,
            prevPage: null,
            products: []
        });
    }

    const addToChart = (id: number, q: number) => {
        if (q <= 0 || q > 100) return;

        setChart(prev => {
            const existingItemIndex = prev.items.findIndex(item => item.id === id);
            const newItems = [...prev.items];
            const cProd = ProductsJson.find(x => x.id == id) as Product;
            if (existingItemIndex !== -1) {
                const existingItem = newItems[existingItemIndex];
                const newQuantity = existingItem.quantity + q;

                if (newQuantity > 100) return prev;

                newItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: newQuantity,
                    subTotal: newQuantity * cProd.price
                };
            } 
            else {
                
                newItems.push({
                    id: id,
                    quantity: q,
                    imageUrl: cProd.imgUrl,
                    name: cProd.name,
                    subTotal: q * cProd.price
                });
            }
            return {
                ...prev,
                items: newItems
            };
        });
    };

    const remFromChart = (id: number, q: number) => {
        if (q <= 0){
            setChart({
                ...chart,
                items: chart.items.filter(x => x.id !== id)
            })
        }
        else
        setChart(prev => {
            const existingItemIndex = prev.items.findIndex(item => item.id === id);
            if (existingItemIndex === -1) return prev;

            const existingItem = prev.items[existingItemIndex];
            const newQuantity = existingItem.quantity - q;

            const newItems = [...prev.items];
            if (newQuantity <= 0) {
                newItems.splice(existingItemIndex, 1);
            } else {
                const cProd = ProductsJson.find(x => x.id == id) as Product;
                newItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: newQuantity,
                    id: id,
                    imageUrl: cProd.imgUrl,
                    name: cProd.name,
                    subTotal: cProd.price * newQuantity
                };
            }

            return {
                ...prev,
                items: newItems
            };
        });
    };

    return (
        <StoreContext.Provider value={{
            chart,
            addToChart,
            remFromChart,
            store,
            loadStore,
            unloadStore,
            setPagination
        } as StoreContextType}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;