import { Layout } from "./layouts/Layout";
import { Features } from "./sections/Features";
import { Home } from "./sections/Home";
import HowToBuy from "./sections/HowToBuy";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Features />
        <Portfolio />
        <HowToBuy />
      </Layout>
    </>
  );
}

export default App;
