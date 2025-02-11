import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clicky",
  description: "One lonely clicky T-T",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>;
}
