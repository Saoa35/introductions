import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const mongoose = require("mongoose");
    const Post = mongoose.model("Post");

    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};
