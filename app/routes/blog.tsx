import type { MetaFunction } from "@remix-run/node";
import Blog from "~/views/Blog";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "Blog Page", content: "Checkout some of these cool posts." },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Blog />
    </div>
  );
}
