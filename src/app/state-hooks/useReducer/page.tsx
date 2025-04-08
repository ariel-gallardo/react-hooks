'use client';

import { useReducer } from "react";
import StoreFunction from "./StoreFunction";
import StoreEntity from "@models/StoreWithChart";
import { ActionDispatch } from "./actions/ActionType";
import LoadProducts from "./actions/LoadProducts";
import Products from "@json/products.json";
import Store from "@components/StoreWithDispatch";
import Chart from "@components/ChartWithDispatch";

const Page = () => {
    const [store, dispatch] = useReducer(StoreFunction, {
        page: 0,
        nextPage: null,
        prevPage: null,
        currentProducts: null,
        products: null
    } as StoreEntity);

    const loadProducts = () =>{
        dispatch({
            type: 'LoadProducts',
            payload: LoadProducts(Products)
        } as ActionDispatch<['LoadProducts']>)
    }

    const unloadProducts = () => {
        dispatch({
            type: 'UnloadProducts'
        } as ActionDispatch<['UnloadProducts']>)
    }

    return (
        <div className="flex justify-center text-white">
            <div className="text-center grid">
                <div>
                    <h1 className="text-3xl">Use Reducer Hook</h1>
                    <h3>Store Example</h3>
                    <div className="flex justify-center">
                        <button className={`p-2 border rounded ${store.currentProducts ? 'hidden' : 'block'}`} onClick={loadProducts}>Load Products</button>
                        <button className={`p-2 border rounded ${store.currentProducts ? 'block' : 'hidden'}`} onClick={unloadProducts}>Unload Products</button>
                    </div>
                </div>
                <article className="flex gap-3  my-2">
                    <Store store={store} dispatch={dispatch} />
                    <Chart store={store} dispatch={dispatch} />
                </article>
            </div>
        </div>
    );
}

export default Page;