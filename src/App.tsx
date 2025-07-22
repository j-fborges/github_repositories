import "./styles/main.css";
import UserCard from "./components/user/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api/getUser";
import Header from "./components/Header";
import RepoTabs from "./components/repositories/RepoTabs";

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
        <RepoTabs reposCount={data.user.publicReposCount || 0} starredCount={data.user.starredReposCount || 0} publicRepositories={data.user.repositories || []} starredRepositories={data.user.starredRepositories || []}/>
      </div>
    </>
  );
}

export default App;
