import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Sentiment from "./pages/Sentiment";
import Image from "./pages/Image";
import Face from "./pages/Face";

function App() {
  return (
    <BrowserRouter>

      <nav
        style={{
          padding: "15px",
          background: "#222",
          display: "flex",
          gap: "20px"
        }}
      >
        <Link to="/" style={{color:"white"}}>Home</Link>
        {/* <Link to="/chatbot" style={{color:"white"}}>Chatbot</Link>
        <Link to="/sentiment" style={{color:"white"}}>Sentiment</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/sentiment" element={<Sentiment />} />
        <Route path="/image" element={<Image />} />
        <Route path="/face" element={<Face />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;