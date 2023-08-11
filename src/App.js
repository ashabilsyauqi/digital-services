import "./App.css";
import "./Components/Components.css";

import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Member from "./Components/Member";
// import Member from "./Components/Member";
function App() {
  return (
    <div>
      <Hero />
      <div className="wrapper">
        <Services />
      </div>
      <About/>
      <div className="wrapper">
        <Member />
      </div>
    </div>
  );
}

export default App;
