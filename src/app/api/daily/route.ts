import { clickies } from "@/shared/Clickies";

export function getClickyFromDay(day: number) {
  return clickies[Math.floor(day % clickies.length)];
}

export async function GET() {
  const day = new Date().getTime() / 1000 / 60 / 60 / 24;
  const clicky = getClickyFromDay(day);
  return Response.json(clicky);
}
