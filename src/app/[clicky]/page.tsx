import type { JSX } from "react";
import { interactiveClickies, isClicky } from "@/shared/Clickies";
import { notFound } from "next/navigation";

export default async function SingleClicky({
  params,
}: {
  params: Promise<{ clicky: string }>;
}): Promise<JSX.Element> {
  const clicky = (await params).clicky;

  if (!isClicky(clicky)) {
    notFound();
  }

  const InteractiveClicky = interactiveClickies[clicky];

  return <InteractiveClicky />;
}
