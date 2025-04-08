'use client';
import Product from "@models/Product";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { StoreContext, StoreContextType } from "../app/ctx-hooks/useContext/StoreContext";

const StoreItem : React.FC<Product> = ({id,name, imgUrl, description}: Product) => {

    const [value, setValue] = useState<number | string>('');

    const { addToChart, remFromChart } = useContext<StoreContextType>(StoreContext);

    const changeStoreDetail = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const v = target.value ? Number(target.value) : 0;
        let newValue = 0;
        if (v <= 0) { newValue = 0 } else if (v >= 100) { newValue = 100; }
        else { newValue = v; }
        if (value == '') addToChart(id, newValue);
        else {
            const oV = Number(value);
            if (oV > newValue) remFromChart(id, oV - newValue);
            else if (oV < newValue) addToChart(id, newValue - oV);

        }
        setValue(newValue > 0 ? `${newValue}` : '');
    }

    return (
        <div className="rounded border flex flex-col w-50">
            <h3>{name}</h3>
            <Image alt={name} width={100} height={200} src={imgUrl} />
            <p>{description}</p>
            <div>
                <input value={value} onChange={changeStoreDetail} type="number" />
            </div>
        </div>
    );
}

export default StoreItem;