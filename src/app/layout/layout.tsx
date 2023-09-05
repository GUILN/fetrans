import "../../styles.css";
import { simulationApp } from "../simulation/app";
type props = {
  children: string | React.ReactNode;
};

simulationApp().run();

const Layout = ({ children }: props) => (
  // Content wrapper
  <div className="text-gray-500 min-h-screen content-start flex flex-col justify-between bg-slate-800">
    <div className="flex justify-center ">
      <nav className="">
        <span className="xl">Trabalho de Fetrans</span>
      </nav>
    </div>
    <main className="mt-8 flex justify-center content-start">
      <div className="border-solid border-red-300 border-2 rounded-md w-full h-full block">
        <canvas id="canvas" className="w-full h-full"></canvas>
      </div>
    </main>
    <footer className="bg-tertiary"></footer>
  </div>
);

export default Layout;
