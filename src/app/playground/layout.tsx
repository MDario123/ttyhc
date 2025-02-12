import type { Metadata } from "next";
import type { JSX } from "react";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Playground",
  description: "You can draw!!",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className={styles.layout}>{children}</div>;
}
