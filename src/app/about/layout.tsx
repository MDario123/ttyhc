import type { Metadata } from "next";
import type { JSX } from "react";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "This page tells you what this is all about",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <div className={styles.layout}>{children}</div>;
}
