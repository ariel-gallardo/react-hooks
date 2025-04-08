import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center text-center text-white">
      <div className="flex py-2 justify-around flex-col gap-2">
        <h1 className="text-3xl">State Hooks</h1>
        <Link href={'/state-hooks/useState'} className=" border-2 rounded">UseState</Link>
        <Link href={'/state-hooks/useReducer'} className=" border-2 rounded">UseReducer</Link>
        <hr/>
        <h1 className="text-3xl">Context Hooks</h1>
        <Link href={'/ctx-hooks/useContext'} className=" border-2 rounded">UseContext</Link>
        <hr/>
        <h1 className="text-3xl">Optimization Hooks</h1>
        <Link href={'/opt-hooks/useCallback'} className=" border-2 rounded">UseCallback</Link>
        <hr/>
        <h1>Ref Hooks</h1>
        <Link href={'/ref-hooks/useRef'} className=" border-2 rounded">useRef</Link>
      </div>
    </div>
  );
}
