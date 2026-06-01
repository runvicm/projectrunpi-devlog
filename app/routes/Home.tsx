import { DevStatus } from "~/components/sections/DevStatus";
import { Hero } from "~/components/sections/Hero";
import { LogList } from "~/components/sections/LogList";


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