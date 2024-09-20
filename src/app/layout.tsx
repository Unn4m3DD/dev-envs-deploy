import "./globals.css";
import { VercelToolbar } from "@vercel/toolbar/next";


export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  return (
    <html lang="en">
      <body>
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
