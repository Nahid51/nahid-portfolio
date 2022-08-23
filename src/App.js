import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;