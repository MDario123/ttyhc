import styles from "./styles.module.css";
import { isClicky } from "@/shared";
import type { Clicky } from "@/shared";
import type { JSX } from "react";
import Link from "next/link";

async function getDailyClicky(): Promise<Clicky> {
  const res: unknown = await (
    await fetch("http://127.0.0.1:3000/api/daily")
  ).json();
  if (!isClicky(res)) {
    throw new Error("Invalid clicky");
  }
  return res;
}

export default async function Home(): Promise<JSX.Element> {
  const clicky = await getDailyClicky();
  return (
    <div className={styles.pageLayout}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>TTYHC</h1>
        <p className={styles.titleClarification}>
          Tinker To Your Heart's Content
        </p>
      </div>
      <p className={styles.introduction}>
        Plenty to explore, nothing to regret.
        <br />
        Go ahead, click away!
      </p>
      <div className={styles.linkWrapper}>
        <Link className={styles.linkButton} href={`/${clicky}`}>
          Daily Clicky
        </Link>
      </div>
      <div className={styles.linkWrapper}>
        <Link className={styles.linkButton} href={`/playground`}>
          Playground
        </Link>
      </div>
    </div>
  );
}
