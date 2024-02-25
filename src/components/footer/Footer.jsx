import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>seafood.dev</div>
      <div className={styles.text}>
        Seafood creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
