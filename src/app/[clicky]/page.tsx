import { clickies, Clicky, interactiveClickies } from "@/lib/clickies";
import { notFound } from "next/navigation";

export default async function SingleClicky({
  params,
}: {
  params: Promise<{ clicky: string }>;
}) {
  const clicky = (await params).clicky;

  if (!clickies.includes(clicky as Clicky)) {
    notFound();
  }

  const InteractiveClicky = interactiveClickies[clicky as Clicky];

  return <InteractiveClicky />;
}
