import "./globals.css";
import { VercelToolbar } from "@vercel/toolbar/next";
import { FlagValues } from "@vercel/flags/react";
import { Donut } from "./Donut";
import { getFlags } from "./getFlags";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  const flags = await getFlags();
  return (
    <html lang="en">
      <body>
        {children}
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <div className="text-xl font-semibold">
            A dev environment for another branch appeared!
          </div>
          {flags.showDonut && <Donut {...flags} />}
        </div>
        <FlagValues values={flags} />
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
