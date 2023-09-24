import type { MetaFunction } from "@remix-run/node";
import Talks from "~/views/Talks";

export const meta: MetaFunction = () => {
  return [
    { title: "Talks" },
    { name: "Talks Page", content: "Checkout some of these cool talks." },
  ];
};

export default function TalksRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Talks />
    </div>
  );
}
