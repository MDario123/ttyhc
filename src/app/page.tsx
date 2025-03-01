import styles from "./styles.module.css";
import { api_address, isClicky } from "@/shared";
import type { Clicky } from "@/shared";
import type { JSX } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getDailyClicky(): Promise<Clicky> {
  const res: unknown = await (await fetch(api_address.daily)).json();
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
          Tinker To Your Heart{"'"}s Content
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
