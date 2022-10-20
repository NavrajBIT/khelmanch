import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import {Navbar} from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";
import Talent from "./Components/Profile/Talent";
import UserState from "./Context/UserState";
import {HomePage} from "./Components/LandingPage/HomePage";
import {AddVideo} from "./Components/Profile/AddVideo";
import {AddPlayer} from "./Components/Profile/AddPlayer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <HashRouter>
        <UserState>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Categories />} />
            <Route path="/createtalent" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addvideo" element={<AddVideo />} />
            <Route path="/addplayer" element={<AddPlayer />} />
            <Route path="/talent" element={<Talent />} />
          </Routes>
          <Footer />
        </UserState>
      </HashRouter>
    </div>
  );
}

export default App;
