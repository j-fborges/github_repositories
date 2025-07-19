import { useQuery } from "@tanstack/react-query";
import "./styles/main.css";
import { getUser } from "./api/getUser";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
    </>
  );
}

export default App;
