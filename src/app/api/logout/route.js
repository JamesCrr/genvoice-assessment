import { cookies } from "next/headers";

export async function POST(request) {
  const response = { success: true, msg: "" };
  // Destroy cookies
  cookies().set("session", "", { expires: new Date(0) });

  return Response.json(response);
}
