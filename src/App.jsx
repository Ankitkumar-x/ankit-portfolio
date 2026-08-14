import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
         
        <About />

        <Skills />

        <Projects />

        <Education />

        <Experience />
        
        <Achievements />

        <Contact />
        
      </main>
    </div>
  );
}

export default App;