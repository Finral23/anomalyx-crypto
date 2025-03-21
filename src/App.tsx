import { Layout } from "./layouts/Layout";
import { Features } from "./sections/Features";
import Form from "./sections/Form";
import { Home } from "./sections/Home";
import HowToBuy from "./sections/HowToBuy";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Features />
        <Portfolio />
        <HowToBuy />
        <Testimonials />
        <Form />
      </Layout>
    </>
  );
}

export default App;
