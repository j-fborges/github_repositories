import "./styles/main.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <div className="layout">
        <UserCard />
        <div className="w-[100%] h-[100%]"></div>
      </div>
    </>
  );
}

export default App;
