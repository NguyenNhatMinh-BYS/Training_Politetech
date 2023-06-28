import HeaderLogin from "./HeaderLogin";
import FormLogin from "./FormLogin";
import Footer from "../../component/Footter/Footer";

const Login = () => {
  return (
    <div className="w-full h-screen flex  flex-col">
      <div className="">
        <HeaderLogin />
      </div>
      <div className="grow-[9] flex items-center">
        <FormLogin />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
