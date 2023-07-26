import React from "react";
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
  const { data } = await notice({ page: "0" });
  const [key, sss, { age }] = queryKey;
  console.log(key, sss, age);

  console.log(data.data.list);

  return data.data.list;
};
const Example = () => {
  const age = 18;
  const { status, fetchStatus, error, data } = useQuery<
    Array<DataNotice>,
    Error
  >({ queryKey: ["repoData", "Minh", { age }], queryFn: fetchData });
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
    </div>
  );
};

export default ReactQuery;
