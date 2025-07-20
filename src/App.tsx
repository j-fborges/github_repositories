import "./styles/main.css";
import UserCard from "./components/user/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api/getUser";
import Header from "./components/Header";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header/>
      <div className="layout">
        <UserCard user={data.user} userStatus={data.user.status}/>
        <div className="w-[100%] h-[100%]"></div>
      </div>
    </>
  );
}

export default App;
