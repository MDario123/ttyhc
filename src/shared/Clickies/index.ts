import Button from "./Button";
import Toggle from "./Toggle";
import { ReactNode } from "react";

const Clickies = ["toggle", "button"] as const;

export type Clicky = (typeof Clickies)[number];
export const clickies: Clicky[] = [...Clickies];
export const interactiveClickies: Record<Clicky, () => ReactNode> = {
  toggle: Toggle,
  button: Button,
};
