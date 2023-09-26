import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useQueryfn = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-queryx").then(
        (res) => res.json()
      ),
    staleTime: ms("2 days"),
  });
};

function Example() {
  // const { isLoading, error, data } = useQueryfn();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-queryx").then(
        (res) => res.json()
      ),
  });

  console.log(data);
  console.log(isLoading);
  console.log(error);

  if (isLoading) return "Loading...";

  if (error) return <p>An error has occurred: + {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default Example;
