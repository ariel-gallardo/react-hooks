'use client';
import { JSX, useCallback, useState } from "react";

const Page = () => {
    const [increment, setIncrement] = useState(1);
    const [output, setOutput] = useState<JSX.Element[]>();
    const [lastGenerated, setLastGenerated] = useState(1);

    const isOutdated = increment !== lastGenerated;

    const callFunction = useCallback(() => {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(<li key={i}>{increment} x {i} = {increment * i}</li>);
        }
        setOutput(table);
        setLastGenerated(increment);
    }, [increment]);

    return (
        <div className="flex justify-center my-4">
            <div className="flex gap-4 flex-col w-60">
                <button
                    className="border bg-black text-xl text-green-500 p-2"
                    onClick={() => setIncrement(prev => prev + 1)}
                >
                    Upgrade Increment
                </button>
                <button
                    className="border bg-black text-xl text-green-500 p-2"
                    onClick={callFunction}
                >
                    Generate Table
                </button>
                <div className={`border p-4 bg-white text-black ${output ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="text-lg font-bold">Tabla de {increment}</h1>
                        {isOutdated && (
                            <span className="text-xs text-red-600 font-semibold">Obsoleto</span>
                        )}
                    </div>
                    <ul className="list-disc ml-5">
                        {output}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Page;
