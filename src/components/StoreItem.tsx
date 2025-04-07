import { ActionDispatch } from "@actionReducer/ActionType";
import HandleQuantity from "@actionReducer/HandleQuantity";
import ProductStore from "@models/ProductStore";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const StoreItem = ({id, name, imgUrl, description, dispatch, chart}: ProductStore) => {

    const [value, setValue] = useState<number|string>('');

    const changeStoreDetail = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const v = target.value ? Number(target.value) : 0;
        let newValue = 0;
        if (v <= 0){newValue = 0}else if(v >= 100){newValue = 100;}
        else{ newValue = v;}
        setValue(newValue > 0 ? `${newValue}` : '');
        dispatch({
            type: 'HandleQuantity',
            payload: HandleQuantity(id, newValue)
        } as ActionDispatch<['HandleQuantity']>)
    }

    useEffect(() => {
        const cItem = chart?.items.find(x => x.id == id);
        if(cItem) setValue(cItem.quantity);
        else setValue('');
    },[chart, id])

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