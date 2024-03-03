import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";
import Image from "next/image";
import { handleGithubLogin } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <Image src="/github.png" alt="github" width={60} height={60} />
            Sign in with Github
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
