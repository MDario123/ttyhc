import type { JSX } from "react";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <div>
      <h1>About</h1>
      <p>You came here to know if this is for you? Yes? Good.</p>
      <h2>Purpose</h2>
      <p>Have a good time.</p>
      <h2>Means</h2>
      <p>Clicky buttons.</p>
      <h2>Place</h2>
      <p>
        Right <Link href="/playground">here</Link>.
      </p>
    </div>
  );
}
