"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/posts",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const isAdmin = true;
  //console.log(session)

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
