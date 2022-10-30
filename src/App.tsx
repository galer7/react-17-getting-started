import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GitHub from "./pages/GitHub";
import StarGame from "./pages/StarGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitHub />}></Route>
        <Route path="/signup" element={<StarGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
