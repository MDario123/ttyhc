import type { Clicky } from "@/shared/Clickies";
import { clickies } from "@/shared/Clickies";

export function getClickyFromDay(day: number): Clicky {
  return clickies[Math.floor(day % clickies.length)];
}

export function GET(): Response {
  const day = new Date().getTime() / 1000 / 60 / 60 / 24;
  const clicky = getClickyFromDay(day);
  return Response.json(clicky);
}
