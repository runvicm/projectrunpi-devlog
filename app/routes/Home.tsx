import { DevStatus } from "~/components/sections/DevStatus";
import { Hero } from "~/components/sections/Hero";
import { LogList } from "~/components/sections/LogList";
import type { Route } from "./+types/Home";
import { SITE_NAME } from "~/constant/app";


export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE_NAME} - Home` },
    { name: `${SITE_NAME}`, content: `Welcome to ${SITE_NAME}` },
  ];
}


const Home = () => {
  return (
    <>
      <Hero />
      <DevStatus />
      <LogList />
    </>
  )

}

export default Home;