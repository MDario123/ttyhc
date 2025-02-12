"use client";

import type { JSX } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useClickiesContext } from "@/shared";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

export default function Header(): JSX.Element {
  const { sensitiveClickies, setSensitiveClickies } = useClickiesContext();

  const toggle = () => {
    setSensitiveClickies?.((prev) => !prev);
  };

  const color = `var(--green)`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map(({ href, label }) => (
          <Link key={"header-link-" + href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
      <button
        className={[
          styles.toggle,
          sensitiveClickies ? styles.on : styles.off,
        ].join(" ")}
        style={{
          backgroundColor: sensitiveClickies ? color : undefined,
        }}
        onClick={() => toggle()}
      >
        <div>
          <div style={{ backgroundColor: color }} />
        </div>
      </button>
    </header>
  );
}
