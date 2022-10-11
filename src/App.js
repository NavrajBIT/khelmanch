import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";
import Talent from "./Components/Profile/Talent";
import UserState from "./Context/UserState";
import {Header} from "./Components/LandingPage/Header";
import {HomePage} from "./Components/LandingPage/HomePage";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <HashRouter>
        <UserState>
          <Header />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Categories />} />
            <Route path="/createtalent" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/talent" element={<Talent />} />
          </Routes>
          <Footer />
        </UserState>
      </HashRouter>
    </div>
  );
}

export default App;
