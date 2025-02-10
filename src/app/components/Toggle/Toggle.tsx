"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { colors } from "@/lib/colors";

export default function Toggle() {
  const [[isToggled, colorIdx], setIsToggled] = useState([false, 0]);

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
    >
      <div>
        <div style={{ backgroundColor: color }} />
      </div>
    </button>
  );
}
