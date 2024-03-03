import Image from "next/image";
import styles from "./home.module.css";
import { redirect } from "next/navigation";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href={"/about"}>
            <button className={styles.button} id={styles.buttonBlue}>
              Learn More
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt=""
            width={400}
            height={30}
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
