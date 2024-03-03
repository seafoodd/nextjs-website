"use client";

import { register } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirm password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
