import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://i.pinimg.com/736x/e7/24/6f/e7246faad7d711261c076828a04fa151.jpg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          aliquam soluta enim ex qui amet beatae quos facilis recusandae, modi
          nemo corrupti, laboriosam deserunt, tenetur maxime ullam deleniti
          quaerat pariatur!
        </p>
        <Link className={styles.link} href="/posts/1">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
