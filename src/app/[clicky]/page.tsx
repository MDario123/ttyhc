import type { Clicky } from "@/shared/Clickies";
import type { JSX } from "react";
import { clickies, interactiveClickies } from "@/shared/Clickies";
import { notFound } from "next/navigation";

export default async function SingleClicky({
  params,
}: {
  params: Promise<{ clicky: string }>;
}): Promise<JSX.Element> {
  const clicky = (await params).clicky;

  if (!clickies.includes(clicky as Clicky)) {
    notFound();
  }

  const InteractiveClicky = interactiveClickies[clicky as Clicky];

  return <InteractiveClicky />;
}
