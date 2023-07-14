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
import Campaign from "./pages/campaign-page/Campaign";
import CampainDetail from "./pages/campaign-detail/CampainDetail";
import LivingLabPage from "./pages/living-lab-page/LivingLabPage";
import LivingLabDetail from "./pages/living-lab-detail/LivingLabDetail";
import Introduce from "./pages/introduce-page/Introduce";
import AnnouncementEdit from "./pages/announcement-edit/AnnouncementEdit";
import ContentEdit from "./pages/content-edit/ContentEdit";
import CampaignEdit from "./pages/campaign-edit/CampaignEdit";
import Freebroad from "./pages/freebroad-page/Freebroad";
import FreeBroadEdit from "./pages/freebroad-edit/FreeBroadEdit";
import LivingLabEdit from "./pages/living-lab-edit/LivingLabEdit";
import FreeBroadDetail from "./pages/freebroad-detail/FreeBroadDetail";
import FreeBroadCreateUser from "./pages/freebroad-create-user/FreeBroadCreateUser";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="" element={<LandingPage />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/announcement" element={<AnnouncementPage />}></Route>
          <Route path="/announcement/:id" element={<NoticeDetail />}></Route>
          <Route
            path="/announcement/edit/:id"
            element={<AnnouncementEdit />}
          ></Route>
          <Route
            path="/announcement/create"
            element={<AnnouncementEdit />}
          ></Route>
          <Route path="/facility" element={<FacilityPage />}></Route>
          <Route path="/living-lab" element={<LivingLabPage />}></Route>
          <Route path="/living-lab/:id" element={<LivingLabDetail />}></Route>
          <Route
            path="/living-lab/edit/:id"
            element={<LivingLabEdit />}
          ></Route>
          <Route path="/living-lab/create" element={<LivingLabEdit />}></Route>
          <Route path="/content" element={<ContentPage />}></Route>
          <Route path="/content/edit/:id" element={<ContentEdit />}></Route>
          <Route path="/content/create" element={<ContentEdit />}></Route>
          <Route path="/campaign" element={<Campaign />}></Route>
          <Route path="/campaign/:id" element={<CampainDetail />}></Route>
          <Route path="/campaign/edit/:id" element={<CampaignEdit />}></Route>
          <Route path="/campaign/create" element={<CampaignEdit />}></Route>
          <Route path="/freeboard" element={<Freebroad />}></Route>
          <Route
            path="/freebroad/detail/:id"
            element={<FreeBroadDetail />}
          ></Route>
          <Route path="/freebroad/edit/:id" element={<FreeBroadEdit />}></Route>
          <Route path="/freebroad/create" element={<FreeBroadEdit />}></Route>
          <Route
            path="/freebroad/create_user"
            element={<FreeBroadCreateUser />}
          ></Route>
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
      </Routes>
    </div>
  );
}

export default App;
