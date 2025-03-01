import type { ReactNode } from "react";
import Button from "./Button";
import Toggle from "./Toggle";

const Clickies = ["toggle", "button"] as const;

export type Clicky = (typeof Clickies)[number];
export const clickies: Clicky[] = [...Clickies];
export const interactiveClickies: Record<Clicky, () => ReactNode> = {
  toggle: Toggle,
  button: Button,
};

export function isClicky(value: unknown): value is Clicky {
  return typeof value === "string" && clickies.includes(value as Clicky);
}
