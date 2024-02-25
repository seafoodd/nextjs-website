import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://i.pinimg.com/564x/04/7d/57/047d57aee4379cb1213bff1d760a1ed6.jpg"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://i.pinimg.com/736x/c6/ec/69/c6ec694c38ec012d022dd1b5e79aee91.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          molestiae optio nulla sequi repellendus magnam, expedita autem
          cupiditate dolorum commodi totam quae perferendis fugit? Dolorum illum
          accusantium odit recusandae aspernatur. Lorem ipsum dolor sit amet,
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
