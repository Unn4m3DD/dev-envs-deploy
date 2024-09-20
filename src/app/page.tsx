import React from "react";

import { FlagValues } from "@vercel/flags/react";
import { Donut } from "./Donut";
import { getFlags } from "./getFlags";

export default async function page() {
  const flags = await getFlags();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="text-xl font-semibold">
        A dev environment for another branch appeared!
      </div>
      {flags.showDonut && <Donut {...flags} />}
      <FlagValues values={flags} />
    </div>
  );
}
