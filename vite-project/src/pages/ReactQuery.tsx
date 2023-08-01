import React, { useRef, useState } from "react";
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
const Example = () => {
  const pageSize = useRef(1);
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const fetchData = async ({ queryKey }: any): Promise<Array<DataNotice>> => {
    const [key, pageSize] = queryKey;
    console.log(pageSize);
    const { data } = await notice({
      page: "0",
      page_size: pageSize.toString(),
    });

    return data.data.list;
  };
  const { status, fetchStatus, data, refetch } = useQuery<
    Array<DataNotice>,
    Error
  >({
    queryKey: ["pageData", pageSize.current],
    queryFn: fetchData,
    keepPreviousData: true,
    // retry: 3,
  });

  const { mutate } = useMutation({
    mutationFn: (data: FormLogin) => {
      return Login(data);
    },
    onMutate: (variables) => {
      console.log("onMutate", variables);
    },
    onError: (error: any) => {
      toast.error(`ERROR ${error.response.data.code} !`);
    },
    onSuccess: () => {
      toast.success(`Successfully`);
    },
  });

  if (status === "loading" && fetchStatus === "fetching") {
    return <div>Loading...</div>;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      { username: name, password: passwords },
      {
        onSuccess: () => {
          console.log("success2");
        },
      }
    );
  };

  return (
    <div>
      {data &&
        data.map((item: DataNotice) => <div key={item.id}>{item.author}</div>)}
      <div className="flex ">
        <button
          className="mr-[20px] bg-slate-400 px-[10px]"
          onClick={() => {
            pageSize.current -= 1;
            refetch();
          }}
        >
          delete
        </button>
        <button
          className=" bg-slate-400 px-[10px]"
          onClick={() => {
            pageSize.current += 1;
            refetch();
          }}
        >
          add
        </button>
      </div>
      <form className="mt-[60px]" onSubmit={handleSubmit}>
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
