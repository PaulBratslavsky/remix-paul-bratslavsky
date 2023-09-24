export async function getStrapiData(query: string) {
  try {
    const fullUrl = process.env.STRAPI_API_URL + "/api" + query;
    const res = await fetch(fullUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
