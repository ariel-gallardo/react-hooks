'use client';
import { useState } from "react";

const BlockComponent = () => {

    const [bgColor, setBgColor] = useState('bg-black');

    const setBlack = () => { setBgColor('bg-black') }
    const setBlue = () => { setBgColor('bg-blue-500') }
    const setAmber = () => { setBgColor('bg-amber-500') }
    const setCyan = () => { setBgColor('bg-cyan-500') }
    const setPurple = () => { setBgColor('bg-purple-500') }

    return (
        <div className="flex justify-center">
            <div className="text-center flex flex-col gap-3">
                <div>
                    <h1 className="text-3xl">Use State Hook</h1>
                    <h3>Select Background Color</h3>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 justify-center">
                        <button type="button" className="text-white p-1 rounded bg-black" onClick={setBlack}>Black</button>
                        <button type="button" className="text-white p-1 rounded bg-blue-500" onClick={setBlue}>Blue</button>
                        <button type="button" className="text-white p-1 rounded bg-amber-500" onClick={setAmber}>Amber</button>
                        <button type="button" className="text-white p-1 rounded bg-cyan-500" onClick={setCyan}>Cyan</button>
                        <button type="button" className="text-white p-1 rounded bg-purple-500" onClick={setPurple}>Purple</button>
                    </div>
                    <div className={`${bgColor} w-[300px] h-[300px] border-2 rounded`}></div>
                </div>
            </div>
        </div>
    );
};

export default BlockComponent;