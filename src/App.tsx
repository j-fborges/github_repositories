import "./styles/main.css";
import UserCard from "./components/user/UserCard";
import Header from "./components/Header";
import UserRepositories from "./components/repositories/UserRepositories";
import RepoExplorer from "./components/repositories/explorer/RepoExplorer";



function App() {
  

  return (
    <>
      <Header/>
      <div className="layout">
        <UserCard/>
        <UserRepositories/>
        <RepoExplorer/>
      </div>
    </>
  );
}

export default App;
