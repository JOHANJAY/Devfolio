import Nav from "./components/Nav";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Nav />
      {/* Main Content */}
      <Hero />
      <div className="bg-base-light dark:bg-base-dark text-text-dark dark:text-text-dark flex min-h-screen items-center justify-center">
        <h1 className="font-retro text-3xl">Retro Portfolio</h1>
      </div>
    </>
  );
};
export default App;
