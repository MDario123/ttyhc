import "@testing-library/jest-dom";
import { getClickyFromDay } from "./route";
import { clickies } from "@/shared/Clickies";

describe("Daily clicky", () => {
  test("should return a clicky", async () => {
    const today = new Date().getTime() / 1000 / 60 / 60 / 24;
    for (let i = 0; i < 1000; i++) {
      const clicky = getClickyFromDay(today + i);
      expect(clickies).toContain(clicky);
    }
  });
});
