import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/hotels" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
