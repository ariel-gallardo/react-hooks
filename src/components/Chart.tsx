import Store from "@models/Store";
import ChartItem from "./ChartItem";
import { useEffect, useState } from "react";
import ChartDetail from "@models/ChartDetail";

const Chart = ({store, dispatch}: {store: Store, dispatch: any}) => {

    const [chart, setChart] = useState([] as ChartDetail[])

    useEffect(() => {
        setChart(store.chart?.items ?? []);
    },[store])

    return (
        <section className={`${store.chart?.items.length ?? 0 > 0 ? 'block' : 'hidden'} border p-2`}>
            <div className="my-2">
                <h1 className="text-center text-3xl">Chart</h1>
            </div>
            <ul className="flex flex-col gap-1">
                {chart.map(x => <ChartItem key={`chart-${x.id}`} item={x} dispatch={dispatch} />)}
            </ul>
        </section>
    );
}

export default Chart;