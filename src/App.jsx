import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
function App(){
    return(
      <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      </>
    );
}

export default App;
