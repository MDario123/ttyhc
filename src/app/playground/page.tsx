"use client";

import { clickies, interactiveClickies } from "@/lib/clickies";
import { JSX, useEffect, useState } from "react";

export default function Playground() {
  const [clickiesToRender, setClickiesToRender] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatedClickies = [];
    for (let i = 0; i < 100; i++) {
      const X =
        interactiveClickies[
        clickies[Math.floor(Math.random() * clickies.length)]
        ];
      generatedClickies.push(<X key={i} />);
    }
    setClickiesToRender(generatedClickies);
  }, []);

  return <>{clickiesToRender}</>;
}
