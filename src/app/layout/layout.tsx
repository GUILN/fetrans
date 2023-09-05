import "../../styles.css";
type props = {
  children: string | React.ReactNode;
};

const Layout = ({ children }: props) => (
  // Content wrapper grid grid-rows-3
  <div className="text-white  min-h-screen content-start flex flex-col justify-between bg-slate-800">
    <div className="flex justify-center">
      <nav className="">
        <span className="xl">Trabalho de Fetrans</span>
      </nav>
    </div>
    <main className="">
      <span className="block row-span-1">Simulação</span>
      <div className="border-solid border-red-300 border-2 rounded-md flex justify-center">
        <canvas id="canvas" className="w-2/3 h-1/3"></canvas>
      </div>
    </main>
    <footer className="bg-tertiary">
      <div className="flex justify-center">
        <span className="xl">Footer</span>
      </div>
    </footer>
  </div>
);

export default Layout;
