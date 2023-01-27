import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import { Home } from "./container/Home/Home.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
