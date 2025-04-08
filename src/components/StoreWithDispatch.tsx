import StoreEntity from "@models/StoreWithChart";
import StoreItemWithDispatch from "./StoreItemWithDispatch";
import { useEffect, useState } from "react";
import Product from "@models/Product";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreWithDispatch = ({store,dispatch}: { store: StoreEntity, dispatch: any }) => {

    const [products, setProducts] = useState([] as Product[]);

    useEffect(() => {
        setProducts(store.currentProducts ?? []);
    },[store])

    return (
        <section className={`${products.length > 0 ? 'block' : 'hidden'}`}>
            <h1 className="my-2 text-3xl">Products</h1>
            <div className="grid grid-cols-3 gap-2">
                {products.map(x => (<StoreItemWithDispatch dispatch={dispatch} key={x.id} {...x} chart={store.chart}/>))}
            </div>
        </section>
    );
}

export default StoreWithDispatch;