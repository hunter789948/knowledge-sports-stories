import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/sports_page";
import Cricket from "./pages/Cricket";
import Football from "./pages/Football";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <main className=" bg-gray-950 pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/sports/cricket" element={<Cricket />} />
          <Route path="/sports/football" element={<Football />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<Story />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );

}
export default App;
