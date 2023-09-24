import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { json } from "@remix-run/node";

import Home from "~/views/Home";
import { getStrapiData } from "~/api/get-strapi-data.server";

const query = "/pages?filters[slug]=home";

export const loader = async () => {
  const data = await getStrapiData(query);
  return json({ data: data.data[0] });
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
  const { data } = useLoaderData<typeof loader>();
  return <Home data={data} />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return <div>
    <h1>Something went wrong!</h1>
    <pre>{error?.message}</pre>
  </div>;
}
