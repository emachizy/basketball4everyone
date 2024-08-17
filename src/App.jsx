// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProject from "./pages/OurProject";
import MeetTheTeam from "./pages/MeetTheTeam";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactUs" element={<Contact />} />
          <Route path="getInvolved" element={<GetInvolved />} />
          <Route path="donate" element={<Donate />} />
          <Route path="ourProject" element={<OurProject />} />
          <Route path="meetTheTeam" element={<MeetTheTeam />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
