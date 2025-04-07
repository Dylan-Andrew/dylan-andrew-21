import { Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Experiences from "./routes/experiences/experiences.component";
import Projects from "./routes/projects/projects.component";
import Passions from "./routes/passions/passions.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="projects" element={<Projects />} />
        <Route path="passions" element={<Passions />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
