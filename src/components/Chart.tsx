import ChartItem from "./ChartItem";
import { useContext} from "react";
import { StoreContext, StoreContextType } from "../app/ctx-hooks/useContext/StoreContext";


const Chart = () => {

    const {chart} = useContext(StoreContext) as StoreContextType;


    return (
        <section className={`${chart.items.length ?? 0 > 0 ? 'block' : 'hidden'} border p-2`}>
            <div className="my-2">
                <h1 className="text-center text-3xl">Chart</h1>
            </div>
            <ul className="flex flex-col gap-1">
                {chart.items.map(x => <ChartItem key={`chart-${x.id}`} {...x} />)}
            </ul>
        </section>
    );
}

export default Chart;