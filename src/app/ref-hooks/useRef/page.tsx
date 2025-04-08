'use client';
import { useRef } from "react";

const Page = () => {
    const inputServerRef = useRef<HTMLInputElement>(null);
    const inputClientRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (inputServerRef.current && inputClientRef.current) {
            inputClientRef.current.value = inputServerRef.current.value;
        }
    }

    return (
        <div className="flex justify-center mt-5">
            <div className="flex justify-between gap-5">
                <div className="border">
                    <h3 className="text-white">Vista Servidor</h3>
                    <div>
                        <label>Box 1</label>
                        <input
                            className="text-center text-white w-20"
                            ref={inputServerRef}
                            type="number"
                            onChange={handleChange}
                            min={1}
                        />
                    </div>
                </div>
                <div className="border">
                    <h3 className="text-white">Vista de Cliente</h3>
                    <div className="flex">
                        <label className="p-2 text-white">Box 1 - Num</label>
                        <input
                            className="text-right text-white text-xl w-20"
                            ref={inputClientRef}
                            type="number"
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
