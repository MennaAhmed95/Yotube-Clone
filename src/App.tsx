import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import { ChannelPage } from "./container/Channel/Channel.component";
import { Home } from "./container/Home/Home.component";
import { Search } from "./container/Search/Search.component";
import { WatchPage } from "./container/Watch/Watch.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
      </Routes>
    </div>
  );
}

export default App;
