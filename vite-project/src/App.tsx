import "./App.css";
import PrivateRoute from "./PrivateRoute";

import Nav from "./component/Navigate/Nav";
import Login from "./pages/loginPage/Login";

import LandingPage from "./pages/landingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import ContactPage from "./pages/contactPage/contactPage";
function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/">
            <Route path="" element={<Nav />}>
              <Route path="" element={<LandingPage />}></Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>

          {/* PrivateRoute */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/" element={<Nav />}>
              <Route path="" element={<LandingPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
