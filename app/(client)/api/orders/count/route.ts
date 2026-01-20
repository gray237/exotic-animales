import { NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return NextResponse.json({ count: 0 });
    }

    const query = `
      count(*[
        _type == "order" &&
        clerkUserId == $userId
      ])
    `;

    const count = await backendClient.fetch(query, {
      userId: user.id,
    });

    return NextResponse.json({ count });
  } catch (error) {
    console.error("ORDER COUNT ERROR:", error);
    return NextResponse.json({ count: 0 });
  }
}
