import { FlagOverridesType, decrypt } from "@vercel/flags";
import { cookies } from "next/headers";

export async function getFlags() {
  const overrideCookie = cookies().get("vercel-flag-overrides")?.value;
  const overrides = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {};

  const flags = {
    color: overrides?.color as string ?? "#FFFFFF",
    horizontalSpin: overrides?.horizontalSpin as number ?? 0,
    showDonut: overrides?.showDonut as boolean ?? false,
  };

  return flags;
}
