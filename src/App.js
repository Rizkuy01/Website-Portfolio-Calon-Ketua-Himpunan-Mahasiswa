import Contact from './component/Contact';
import Goals from './component/Goals';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Project from './component/project';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Goals />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
