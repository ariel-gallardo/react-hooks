'use client';

import { useContext } from "react";
import { StoreContext, StoreContextType } from "./StoreContext";
import Store from "@components/Store";
import Chart from "@components/Chart";

const UseContextPage = () => {



    const storeContext = useContext(StoreContext) as StoreContextType
    const { loadStore, unloadStore, store } = storeContext;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loadProducts = (page: number = 1) => {
        loadStore(page);
    }

    const unloadProducts = () => {
        unloadStore();
    }

    return (
        <div className="flex justify-center text-white">
            <div className="text-center grid">
                <div>
                    <h1 className="text-3xl">Use Reducer Hook</h1>
                    <h3>Store Example</h3>
                    <div className="flex justify-center">
                        <button className={`p-2 border rounded ${(store.products?.length ?? 0) != 0 ? 'hidden' : 'block'}`} onClick={() => loadStore(1)}>Load Products</button>
                        <button className={`p-2 border rounded ${(store.products?.length ?? 0) > 0 ? 'block' : 'hidden'}`} onClick={unloadProducts}>Unload Products</button>
                    </div>
                </div>
                <article className="flex gap-3  my-2">
                    <Store/>
                    <Chart/>
                </article>
            </div>
        </div>
    );
}

export default UseContextPage;