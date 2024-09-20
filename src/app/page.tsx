import { FlagValues } from "@vercel/flags/react";
import { Donut } from "./Donut";
import { getFlags } from "./getFlags";

export default async function Home() {
  const flags = await getFlags();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <FlagValues values={{ newFeature: true }} />
      <div className="text-xl font-semibold">
        A dev environment for another branch appeared!
      </div>
      <Donut />
      {JSON.stringify(flags)}
    </div>
  );
}
