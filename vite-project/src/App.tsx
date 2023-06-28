import "./App.css";
import Navigate from "./component/Navigate/Navigate";
import Login from "./pages/LoginPage/Login";
import Page2 from "./pages/Page2/Page2";
import LandingPage from "./pages/landingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate />}>
          <Route path="" element={<LandingPage />}></Route>
          <Route path="page2" element={<Page2 />}></Route>
        </Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
