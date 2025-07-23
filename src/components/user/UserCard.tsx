import { useQuery } from "@tanstack/react-query";
import UserAdditionalInformation from "./UserAdditionalInformation";
import { getUser } from "../../api/getUser";


function UserCard(){
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: ()=>getUser(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const user = data.user

  return (
    <div className="user-card">
      <div className="user-card__avatar relative shadow-xl">
        <img
          src={user.avatar_url || ""}
          alt="user avatar"
          className="user-card__avatar"
        />
        <div
          className="user-card__status-emoji"
          dangerouslySetInnerHTML={{ __html: user.status?.emoji || "" }}
        ></div>
      </div>
      <h2 className="user-card__name">{user.name}</h2>
      <h3 className="user-card__bio">{user.bio}</h3>
      <UserAdditionalInformation user={user} />
    </div>
  );
}

export default UserCard;
