import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { notice } from "@/services/apiNotice";
import { DataNotice } from "@/model/Auth.model";
import { Login } from "@/services/apiUser";
import { toast } from "react-toastify";
interface FormLogin {
  username: string;
  password: string;
}
const queryClient = new QueryClient();
const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mt-[200px]">
        <Example />
      </div>
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
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const { status, fetchStatus, error, data } = useQuery<
    Array<DataNotice>,
    Error
  >({
    queryKey: ["pageData", { pageSize }],
    queryFn: fetchData,
    keepPreviousData: true,
  });

  const { mutate } = useMutation({
    mutationFn: (dataLogin: FormLogin) => {
      return Login(dataLogin);
    },
    onMutate: (variables) => {
      console.log("onMutate", variables);
    },
    onSuccess: (data) => {
      console.log("succes", data);
    },
    onError: (error: any) => {
      console.log("error", error.message);
    },
    onSettled: (data, error, variables) => {
      console.log("settled", variables, data);
    },
  });

  if (status === "loading" && fetchStatus === "fetching") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error?.message}</div>;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      username: name,
      password: passwords,
    });
  };
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
      <form onSubmit={handleSubmit} className="mt-[60px]">
        <input
          className="border-[1px] border-solid"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-[1px] border-solid ml-[20px]"
          type="text"
          value={passwords}
          onChange={(e) => setPasswords(e.target.value)}
        />
        <button
          type="submit"
          className="py-[10px] px-[30px] bg-slate-400 rounded-md ml-[20px]"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default ReactQuery;
