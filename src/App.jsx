import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero id="hero" />
      <Projects id="projects" />
      <Tools id="tools" />

    </div>
  );
};
export default App;
