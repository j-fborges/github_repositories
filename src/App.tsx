import "./styles/main.css";
import UserCard from "./components/user/UserCard";
import Header from "./components/Header";
import RepoTabs from "./components/repositories/RepoTabs";
import UserRepositories from "./components/repositories/UserRepositories";



function App() {
  

  return (
    <>
      <Header/>
      <div className="layout">
        <UserCard/>
        <UserRepositories/>
      </div>
    </>
  );
}

export default App;
