import type { Clicky } from "@/shared/Clickies";
import { clickies } from "@/shared/Clickies";

export function getClickyFromDay(day: number): Clicky {
  return clickies[Math.floor(day % clickies.length)];
}
