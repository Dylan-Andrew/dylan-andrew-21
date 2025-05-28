import { Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Experiences from "./routes/experiences/experiences.component";
// import Projects from "./routes/projects/projects.component";
import Passions from "./routes/passions/passions.component";

const App = () => {
  return (
    <Routes>
      <Route path="/dylan-andrew-21/" element={<Navigation />}>
        <Route path="/dylan-andrew-21/" element={<Home />} />
        <Route path="/dylan-andrew-21/about" element={<About />} />
        <Route path="/dylan-andrew-21/experiences" element={<Experiences />} />
        {/* <Route path="/dylan-andrew-21/projects" element={<Projects />} /> */}
        <Route path="/dylan-andrew-21/passions" element={<Passions />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
