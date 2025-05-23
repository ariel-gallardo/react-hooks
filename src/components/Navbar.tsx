import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='h-[10vh] bg-cyan-950'>
            <div className="flex flex-col h-[10vh] justify-center ">
                <div className="flex gap-1 justify-around">
                    <Link href={'/'} className="text-white border-2 rounded">Home</Link>
                    <Link href={'/state-hooks/useState'} className="text-white border-2 rounded">UseState</Link>
                    <Link href={'/state-hooks/useReducer'} className="text-white border-2 rounded">UseReducer</Link>
                    <Link href={'/ctx-hooks/useContext'} className="text-white border-2 rounded">UseContext</Link>
                    <Link href={'/opt-hooks/useCallback'} className="text-white border-2 rounded">UseCallback</Link>
                    <Link href={'/ref-hooks/useRef'} className="text-white border-2 rounded">useRef</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;