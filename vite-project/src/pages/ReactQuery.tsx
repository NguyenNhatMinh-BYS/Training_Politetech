import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { notice } from "@/services/apiNotice";
import { DataNotice } from "@/model/Auth.model";

const queryClient = new QueryClient();
const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};
const fetchData = async ({ queryKey }: any): Promise<Array<DataNotice>> => {
  const [key, { pageSize }] = queryKey;
  const { data } = await notice({ page: "0", page_size: pageSize.toString() });

  console.log(data.data.list);

  return data.data.list;
};
const Example = () => {
  const [pageSize, setPageSize] = useState(1);

  const { status, fetchStatus, error, data } = useQuery<
    Array<DataNotice>,
    Error
  >({ queryKey: ["pageData", { pageSize }], queryFn: fetchData });
  if (status === "loading" && fetchStatus === "fetching") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error?.message}</div>;
  }
  return (
    <div>
      {data &&
        data.map((item: DataNotice) => <div key={item.id}>{item.author}</div>)}
      <div className="flex ">
        <button
          className="mr-[20px] bg-slate-400 px-[10px]"
          onClick={() => setPageSize(pageSize - 1)}
        >
          delete
        </button>
        <button
          className=" bg-slate-400 px-[10px]"
          onClick={() => setPageSize(pageSize + 1)}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default ReactQuery;
