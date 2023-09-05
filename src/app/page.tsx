"use client";
import { useEffect } from "react";
import Layout from "./layout/layout";
import { simulationApp } from "./simulation/app";

const SomeComponent = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

const App = () => {
  useEffect(() => {
    simulationApp().run();
  }, []);
  return (
    <Layout>
      <SomeComponent />
    </Layout>
  );
};
export default App;
