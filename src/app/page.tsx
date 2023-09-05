import Layout from "./layout/layout";

const SomeComponent = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

const App = () => (
  <Layout>
    <SomeComponent />
  </Layout>
);

export default App;
