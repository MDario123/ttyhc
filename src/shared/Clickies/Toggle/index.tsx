"use client";

import type { JSX } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { colors, useClickiesContext } from "@/shared";

export default function Toggle(): JSX.Element {
  const [[isToggled, colorIdx], setIsToggled] = useState([false, 0]);
  const clickiesContext = useClickiesContext();

  const toggle = () => {
    setIsToggled(([isToggled, colorIdx]) => {
      return [!isToggled, (colorIdx + (isToggled ? 1 : 0)) % colors.length];
    });
  };

  const color = `var(--${colors[colorIdx]})`;

  return (
    <button
      className={[styles.toggle, isToggled ? styles.on : styles.off].join(" ")}
      style={{
        backgroundColor: isToggled ? color : undefined,
      }}
      onClick={() => toggle()}
      onMouseEnter={
        clickiesContext.sensitiveClickies ? () => toggle() : undefined
      }
    >
      <div>
        <div style={{ backgroundColor: color }} />
      </div>
    </button>
  );
}
