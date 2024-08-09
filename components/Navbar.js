"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "../src/app/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="webdev" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={pathname === path ? styles.active : null}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
