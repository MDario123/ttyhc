import Toggle from "@/app/components/Toggle/Toggle";
import { ReactNode } from "react";

const Clickies = ["toggle"] as const;

export type Clicky = (typeof Clickies)[number];
export const clickies: Clicky[] = [...Clickies];
export const interactiveClickies: Record<Clicky, () => ReactNode> = {
  toggle: Toggle,
};
