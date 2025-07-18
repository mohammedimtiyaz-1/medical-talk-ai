import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const user = await currentUser();
  try {
    // check if the user is exists
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    if (users.length > 0) {
      return Response.json(users[0]);
    } else {
      const result = await db
        .insert(usersTable)
        .values({
          name: user?.fullName || "Unknown User",
          email: user?.primaryEmailAddress?.emailAddress || "",
          credits: 10, // Default credits, adjust as needed
        })
        .returning();

      return Response.json(result);
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
