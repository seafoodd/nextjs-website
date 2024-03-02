import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    revalidatePath("/posts");
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};