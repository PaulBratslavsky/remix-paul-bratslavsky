import type { FC } from "react";

interface HomePageProps {
  data: {
    id: string;
    attributes: {
      heading: string;
      description: string;
    };
  };
}

const Home: FC<HomePageProps> = ({ data }) => {
  const { heading, description } = data.attributes;
  return <div>
    <h1>{heading}</h1>
    <p>{description}</p>
  </div>;
};

export default Home;
