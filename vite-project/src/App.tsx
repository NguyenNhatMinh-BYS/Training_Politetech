import "./App.css";
import PrivateRoute from "./PrivateRoute";

import Login from "./pages/login-page/Login";

import LandingPage from "./pages/landing-page/LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import NoticeDetail from "./pages/announcement-detail/AnnouncementDetail";
import AnnouncementPage from "./pages/announcement-page/AnnouncementPage";
import FacilityPage from "./pages/facility-page/FacilityPage";
import ContentPage from "./pages/content-page/ContentPage";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/">
            <Route path="" element={<LandingPage />}></Route>
            <Route path="/announcement" element={<AnnouncementPage />}></Route>
            <Route path="/announcement/:id" element={<NoticeDetail />}></Route>
            <Route path="/facility" element={<FacilityPage />}></Route>
            <Route path="/content" element={<ContentPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>

          {/* PrivateRoute */}
          {/* <Route path="" element={<PrivateRoute />}>
            <Route path="/" element={<Nav colorText="text-white" />}></Route>
            <Route path="/" element={<Nav colorText="text-black" />}>
              <Route path="announcement" element={<AnnouncementPage />}></Route>
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
