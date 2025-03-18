import { GlowingCircles } from "./components/GlowingCircles";
import { Layout } from "./layouts/Layout";
import { Features } from "./sections/Features";
import { Home } from "./sections/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Features />
      </Layout>
    </>
  );
}

export default App;
