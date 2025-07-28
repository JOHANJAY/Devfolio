import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero id="hero" />
      <Projects id="projects" />

    </div>
  );
};
export default App;
