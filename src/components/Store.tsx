import { useContext } from "react";
import { StoreContext, StoreContextType } from "../app/ctx-hooks/useContext/StoreContext";
import StoreItem from "./StoreItem";

const Store = () => {

    const {store} = useContext(StoreContext) as StoreContextType;


    return (
        <section className={`${store.products ?? [].length > 0 ? 'block' : 'hidden'}`}>
            <h1 className="my-2 text-3xl">Products</h1>
            <div className="grid grid-cols-3 gap-2">
                {(store.products ?? []).map(x => (<StoreItem key={x.id} {...x} />))}
            </div>
        </section>
    );
}

export default Store;