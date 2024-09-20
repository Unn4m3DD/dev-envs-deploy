"use client";
import { useDonut } from "./hooks/useDonut";

export default function Home() {
  const donut = useDonut();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="text-xl font-semibold">Hello world!</div>
      <div className="">This is the mainline branch deploy</div>
      <div className="font-mono text-center whitespace-break-spaces select-none">
        {donut}
      </div>
    </div>
  );
}
