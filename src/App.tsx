import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import AppBar1 from "./components/Appbar1";
import FooterSection from "./components/Footer"; 
import Projects from "./pages/Projects"; 


function App() {
  return (
    <Box width={"100vw"} height={"100vh"}>
      <BrowserRouter>
      <AppBar1/>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </Box>
  );
}

export default App;
