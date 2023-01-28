import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import { Home } from "./container/Home/Home.component";
import { Search } from "./container/Search/Search.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
