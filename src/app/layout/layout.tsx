import "../../styles.css";
import Card from "../components/card";

const recipes = [
  {
    title: "Five Bean Chilli Stew",
    image: "/img/skyline.svg",
    author: "Mario",
    timeToPrepare: "25 min",
    description: "skyline",
  },
  {
    title: "Some Other Recipe",
    image: "/img/brooklyn.svg",
    author: "Joana",
    timeToPrepare: "40 min",
    description: "brooklyn",
  },
  {
    title: "Rice and Beans",
    image: "/img/paris.svg",
    author: "Luigi",
    timeToPrepare: "60 min",
    description: "paris",
  },
];

type props = {
  children: string | React.ReactNode;
};

const Layout = ({ children }: props) => (
  // Content wrapper
  <div className="text-primary font-body grid md:grid-cols-3">
    <div className="md:col-span-1">
      <nav>
        <div>
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li className="font-bold">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>{" "}
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="flex justify-center md:justify-end">
        <a href="#" className="btn">
          Log in
        </a>
        <a href="#" className="btn ml-1">
          Sign up
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              imageSrc={recipe.image}
              imgSpan={recipe.title}
              author={recipe.author}
              alt={recipe.description}
              timeToPrepare={recipe.timeToPrepare}
            ></Card>
          ))}
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>

        <div className="mt-8"></div>
        <div className="flex justify-center">
          <div>Load more</div>
        </div>
      </div>
    </main>
  </div>
);

export default Layout;
