import type { User, UserStatus } from "../../types/User";

type UserCardProps = {
  user: User,
  userStatus: UserStatus
}

function UserCard({user, userStatus}:UserCardProps) {

  return (
    <div className="user-card">
      <div className="user-card__avatar relative shadow-xl">
        <img src={user.avatar_url || ""} alt="user avatar" className="user-card__avatar" />
        <div className="user-card__status-emoji" dangerouslySetInnerHTML={{ __html: userStatus.emoji }}>
        </div>
      </div>
      <h2 className="user-card__name">{user.name}</h2>
      <h3 className="user-card__bio">{user.bio}</h3>
    </div>
  );
}

export default UserCard;
