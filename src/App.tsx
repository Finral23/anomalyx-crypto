import { Layout } from "./layouts/Layout";
import { Features } from "./sections/Features";
import { Home } from "./sections/Home";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Features />
        <Portfolio />
      </Layout>
    </>
  );
}

export default App;
