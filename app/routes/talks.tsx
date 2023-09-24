import type { MetaFunction } from "@remix-run/node";
import Talks from "~/views/Talks";

export const meta: MetaFunction = () => {
  return [
    { title: "Talks" },
    { name: "Talks Page", content: "Checkout some of these cool talks." },
  ];
};

export default function TalksRoute() {
  return <Talks />;
}
