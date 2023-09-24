import type { MetaFunction } from "@remix-run/node";
import Home from "~/views/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Home />
    </div>
  );
}
