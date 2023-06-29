import "./App.css";
import PrivateRoute from "./PrivateRoute";

import { Navigate } from "react-router-dom";
import Nav from "./component/Navigate/Nav";
import Login from "./pages/LoginPage/Login";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import LandingPage from "./pages/landingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Nav />}>
            <Route path="" element={<LandingPage />}></Route>
          </Route>
          {/* PrivateRoute */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/" element={<Nav />}>
              <Route path="" element={<LandingPage />}></Route>

              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
