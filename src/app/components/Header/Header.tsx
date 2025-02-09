import Link from "next/link";
import styles from "./styles.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map(({ href, label }) => (
          <Link key={"header-link-" + href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
