import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/about/About";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
