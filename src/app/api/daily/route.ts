import { getClickyFromDay } from "./helper";

export function GET(): Response {
  const day = new Date().getTime() / 1000 / 60 / 60 / 24;
  const clicky = getClickyFromDay(day);
  return Response.json(clicky);
}
