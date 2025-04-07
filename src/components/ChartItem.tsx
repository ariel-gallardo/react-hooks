import { ActionDispatch } from "@actionReducer/ActionType";
import HandleQuantity from "@actionReducer/HandleQuantity";
import ChartDetail from "@models/ChartDetail";
import { Plus, Minus, Trash } from 'lucide-react';
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChartItem = ({item,dispatch}: {item: ChartDetail, dispatch: any}) => {

    const plusItem = () => {
        dispatch({
            type: 'HandleQuantity',
            payload: HandleQuantity(item.id, item.quantity+1)
        } as ActionDispatch<['HandleQuantity']>)
    }

    const minusItem = () => {
        dispatch({
            type: 'HandleQuantity',
            payload: HandleQuantity(item.id, item.quantity - 1)
        } as ActionDispatch<['HandleQuantity']>)
    }

    const removeItem = () => {
        dispatch({
            type: 'HandleQuantity',
            payload: HandleQuantity(item.id, 0)
        } as ActionDispatch<['HandleQuantity']>)
    }

    return (
        <li className="border rounded-2xl p-2 text-sm flex gap-2 bg-cyan-300 justify-between">
            <Image alt={item.name} width={100} height={200} src={item.imageUrl} className="w-10" />
            <div className="flex justify-between  w-100 gap-2"> 
                <div className="bg-cyan-400 text-black rounded-xl justify-center flex flex-col p-2 w-100">
                    <div className="flex gap-2">
                        <h6>{item.name}</h6>
                        <p>x{item.quantity}</p>
                        <p>{item.subTotal.toFixed(2)}<b className="text-green-300">$</b></p>
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