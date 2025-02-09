import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This page tells you what this is all about",
};

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
}
