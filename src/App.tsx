import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import GitHub from "./pages/GitHub";
import StarGame from "./pages/StarGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Hey! Go to <Link to={"/github"}>/github</Link> or
              <Link to={"/star"}>/star</Link>.
            </div>
          }
        />
        <Route path="/github" element={<GitHub />} />
        <Route path="/star" element={<StarGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
