import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:title" element={<Projects />} />
        {/* <Route path="/blogs" element={<Bloglist />} exact />
        <Route path="/bloglist" element={<Bloglist2 />} exact />
        <Route path="/blogs/:id/:title" element={<BlogDetails />} />
        <Route path="/blog-details/:id/:title" element={<BlogDetails2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
