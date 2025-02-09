import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
      </nav>
    </header>
  );
}
