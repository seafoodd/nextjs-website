import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//   },
//   {
//     id: 3,
//     name: "John Smith",
//   },
// ];

// const posts = [
//   {
//     id: 1,
//     userId: 1,
//     body: ".....",
//     title: "Post 1",
//   },
//   {
//     id: 2,
//     userId: 1,
//     body: ".....",
//     title: "Post 2",
//   },
//   {
//     id: 3,
//     userId: 2,
//     body: ".....",
//     title: "Post 3",
//   },
//   {
//     id: 4,
//     userId: 3,
//     body: ".....",
//     title: "Post 4",
//   },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug }); // ({slug}) is the same as ({slug: slug})
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
