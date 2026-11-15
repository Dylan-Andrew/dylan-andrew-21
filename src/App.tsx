import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const About = lazy(() => import("./routes/about/about.component"));
const Experiences = lazy(() => import("./routes/experiences/experiences.component"));
const Projects = lazy(() => import("./routes/projects/projects.component"));
const Passions = lazy(() => import("./routes/passions/passions.component"));
const NotFound = lazy(() => import("./routes/not-found/not-found.component"));

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experiences" element={<Experiences />} />
      <Route path="projects" element={<Projects />} />
      <Route path="passions" element={<Passions />} />
    </Route>
    <Route element={<Layout showSignOff={false} />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
