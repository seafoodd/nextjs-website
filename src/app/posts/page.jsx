import PostCard from "@/components/postCard/postCard";
import styles from "./posts.module.css";
import { getPosts } from "@/lib/data";
//import { revalidatePath } from "next/cache";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/posts`, {next: {revalidate:60}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  //revalidatePath("/posts");
  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
