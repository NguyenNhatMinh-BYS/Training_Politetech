import logoFooter from "../../assets/data/img/Screenshot 2023-06-27 120013.png";
const Footer = () => {
  return (
    <footer className="w-full h-158 bg-footer">
      <div className="lg:w-80 flex items-center h-full  text-textFooter justify-center ">
        <div className="flex w-80 items-center min-[180px]:flex-col min-[180px]:items-start md:items-center md:flex-row ">
          <img
            src={logoFooter}
            alt="logoFooter"
            className="min-[180px]:h-20 min-[720px]:h-32"
          />
          <div className="ml-5">
            <p className="text-sm">
              <span>47340 부산광역시 부산진구 엄광로 176</span>|
              <span>TEL. 051-890-1754</span>| <span>FAX. 051-890-1759</span>
            </p>
            <p className="text-sm">
              COPYRIGHT 2023 DONG-EUI UNIVERSITY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
