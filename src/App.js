import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Programs from "./pages/Programs"
import Footer from "./components/Footer"
import Application from "./pages/Application"

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/application" element={<Application />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
