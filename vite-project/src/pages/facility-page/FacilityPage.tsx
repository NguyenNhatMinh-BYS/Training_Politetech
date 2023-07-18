import React, { useEffect, useState, createContext } from "react";
import Nav from "@/component/Navigate/Nav";
import Banner from "./component/Banner";
import Footer from "@/component/Footter/Footer";
import Content from "./component/Content";
import useWebSocket from "react-use-websocket";
import ContentAdmin from "./component/ContentAdmin";
import { FacilityData, CommandType } from "@/model/Auth.model";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";

const FacilityPage = () => {
 
  const [role, setRole] = useState();
  const [, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [data] = useState<Array<FacilityData>>([]);
  const [request, setRequest] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { VITE_SOCKET_FACILITY_ENDPOINT } = import.meta.env;
  const dispath = useDispatch();
  const { readyState, sendJsonMessage } = useWebSocket(
    VITE_SOCKET_FACILITY_ENDPOINT,
    {
      onOpen: () => {
        console.log("Success!");
      },
      onClose: () => {
        console.log("close!");
      },
      onMessage: (e) => {
        const res = JSON.parse(e.data);
        if (typeof res?.data?.number === "number" && request === 0) {
          setTotalCount(res?.data?.number);

          setRequest(1);
          return;
        }
        if (res.data && request === 1) {
          data.push(res.data);
          if (data.length % 10 === 0 || data.length === totalCount) {
            // rerender batch
            forceUpdate();
          }
          if (data.length === totalCount - 1) {
            dispath(activeLoading(false));
          }
        }
      },
      onError: (e) => {
        console.log("error", e);
      },
      filter: () => false,
    }
  );
  useEffect(() => {
    if (readyState === 1) {
      // 1 - open
      dispath(activeLoading(true));
      sendJsonMessage({
        head: "monitoring",
        command: CommandType.spot,
        data: {
          request,
        },
      });
    }
  }, [readyState, request]);
  useEffect(() => {
    const dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      setRole(JSON.parse(dataUser).role);
    }
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  
  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      {role !== "Admin" ? (
        <Content
          data={data}
         
          
        />
      ) : (
        <ContentAdmin />
      )}
      <Footer />
    </div>
  );
};

export default FacilityPage;
