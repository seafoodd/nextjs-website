import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: 'About Page',
  description: 'About description',
}

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>234 K+</h1>
              <p>People reached</p>
            </div>
            <div className={styles.box}>
              <h1>5 K+</h1>
              <p>Services and plugins</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="About" fill className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
