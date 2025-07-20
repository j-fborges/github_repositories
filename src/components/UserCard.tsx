import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/getUser";

function UserCard() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <header className="user-card">
      <img src={data.avatar_url} alt="user avatar" className="user-card__avatar" />
      <h2 className="user-card__name">{data.name}</h2>
      <h3 className="user-card__bio">{data.bio}</h3>
    </header>
  );
}

export default UserCard;
