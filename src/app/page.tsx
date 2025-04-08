import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center text-center">
      <div className="flex py-2 justify-around flex-col gap-2">
        <h1 className="text-3xl">State Hooks</h1>
        <Link href={'/state-hooks/useState'} className="text-white border-2 rounded">UseState</Link>
        <Link href={'/state-hooks/useReducer'} className="text-white border-2 rounded">UseReducer</Link>
        <hr className="text-white"/>
        <h1 className="text-3xl">Context Hooks</h1>
        <Link href={'/ctx-hooks/useContext'} className="text-white border-2 rounded">UseContext</Link>
      </div>
    </div>
  );
}
