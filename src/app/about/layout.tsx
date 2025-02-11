import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This page tells you what this is all about",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.layout}>{children}</div>;
}
