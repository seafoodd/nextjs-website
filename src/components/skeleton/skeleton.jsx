import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>Loading...</span>
      </div>
    </div>
  );
};

export default Skeleton;