import type { JSX } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

export default function Header(): JSX.Element {
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
