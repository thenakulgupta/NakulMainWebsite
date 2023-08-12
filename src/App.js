import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";
import Bloglist from "./pages/Bloglist";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails from "./pages/BlogDetails";
import BlogDetails2 from "./pages/BlogDetails2";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

import Demopage from "./pages/Demopage";
import WorkDetails from "./pages/WorkDetails";
import WorkDetails2 from "./pages/WorkDetails2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/multipage" element={<Multipage />} exact />
        <Route path="/blogs" element={<Bloglist />} exact />
        <Route path="/bloglist" element={<Bloglist2 />} exact />
        <Route path="/blogs/:id/:title" element={<BlogDetails />} />
        <Route path="/blog-details/:id/:title" element={<BlogDetails2 />} />

        {/* For Multipage */}
        <Route path="/multipage" element={<Multipage />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/resume" element={<Resume />} exact />
        <Route path="/works" element={<Works />} exact />
        <Route path="/works/:id/:title" element={<WorkDetails />} />
        <Route path="/work-details/:id/:title" element={<WorkDetails2 />} />
        <Route path="/contact" element={<Contact />} exact />

        {/* Demo Purpose Only */}
        <Route path="/demopage" element={<Demopage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
