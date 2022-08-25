import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/singleProject/:id" element={<SingleProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;