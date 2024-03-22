import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/axios";
import ms from "ms";

const apiClient = new APIClient("api/today_question");

const useQuestion = () =>
  useQuery({
    queryKey: ["question", "id"],
    queryFn: ({ signal }) => apiClient.get({ signal }),
    // staleTime: ms("5s"),
    cacheTime: ms("0s"),
  });

export default useQuestion;
