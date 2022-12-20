import "./App.css";
import Mainpage from "./components/mainpage";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
