import { NextResponse, type NextRequest } from "next/server";
import { verifyAccess, type ApiData } from "@vercel/flags";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

  return NextResponse.json<ApiData>({
    definitions: {
      color: {
        description: "Controls the donut's color",
        options: [
          { value: "red", label: "Red" },
          { value: "green", label: "Green" },
          { value: "blue", label: "Blue" },
        ],
      },
      horizontalSpin: {
        description: "Controls the donut's horizontal spin",
        options: [
          { value: 1, label: "Left" },
          { value: -1, label: "Right" },
          { value: 0, label: "None" },
        ],
      },
    },
  });
}
