import ChartDetail from "@models/ChartDetail";
import { Plus, Minus, Trash } from 'lucide-react';
import Image from "next/image";
import { useContext } from "react";
import { StoreContext, StoreContextType } from "../app/ctx-hooks/useContext/StoreContext";

const ChartItem = ({id,name, imageUrl, quantity, subTotal}: ChartDetail) => {

    const {addToChart, remFromChart} = useContext(StoreContext) as StoreContextType;

    const plusItem = () => {
        addToChart(id,1)
    }

    const minusItem = () => {
        remFromChart(id,1);
    }

    const removeItem = () => {
        remFromChart(id,0);
    }

    return (
        <li className="border rounded-2xl p-2 text-sm flex gap-2 bg-cyan-300 justify-between">
            <Image alt={name} width={100} height={200} src={imageUrl} className="w-10" />
            <div className="flex justify-between  w-100 gap-2"> 
                <div className="bg-cyan-400 text-black rounded-xl justify-center flex flex-col p-2 w-100">
                    <div className="flex gap-2">
                        <h6>{name}</h6>
                        <p>x{quantity}</p>
                        <p>{subTotal.toFixed(2)}<b className="text-green-300">$</b></p>
                    </div>
                </div>
                <div className="flex space-x-2 bg-cyan-400 rounded p-2">
                    <Plus onClick={plusItem} strokeWidth={3} className="w-6 h-6 text-green-400 border rounded-2xl p-1 bg-black cursor-pointer" />
                    <Minus onClick={minusItem} strokeWidth={3} className="w-6 h-6 text-yellow-400 border rounded-2xl p-1 bg-black cursor-pointer" />
                    <Trash onClick={removeItem} strokeWidth={3} className="w-6 h-6 text-red-500 border rounded-2xl p-1 bg-black cursor-pointer" />
                </div>
            </div>
        </li>
    );
}

export default ChartItem;