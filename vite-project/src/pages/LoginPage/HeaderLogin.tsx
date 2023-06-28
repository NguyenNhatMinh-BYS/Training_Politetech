import logo from "../../assets/data/img/logo@2x.png";

const HeaderLogin = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 h-[100px] w-full flex justify-center">
      <div className="flex items-center h-full w-80 ">
        <img src={logo} alt="logo" className="h-8" />
        <div className="bg-red h-full flex items-end m-4">
          {" "}
          <p className=" mb-8 text-white">[ 관리자 ]</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
