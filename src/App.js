import "./App.css";
import "./Components/Components.css";

import Hero from "./Components/Hero";
import Services from "./Components/Services";
function App() {
  return (
    <div>
      <Hero />
      <div className="wrapper">
        <Services />
      </div>
    </div>
  );
}

export default App;
