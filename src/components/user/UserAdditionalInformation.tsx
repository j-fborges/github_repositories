import chevronDown from "../../assets/chevronDown.svg";
import chevronUp from "../../assets/chevronUp.svg";
import type { User } from "../../types/User";
import useDrawerStore from "./InformationDrawerStore";
import enterpriseIcon from "../../assets/enterpriseIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";
import mapPinIcon from "../../assets/mapPinIcon.svg";

type UserAdditionalInformationProps = {
  user: User;
};

function UserAdditionalInformation({ user }: UserAdditionalInformationProps) {
  const { isOpen, toggleDrawer } = useDrawerStore();

  return (
    <>
      <div className="info-drawer--mobile-screen">
        <button className="info-drawer__button" onClick={toggleDrawer}>
          <span className="info-drawer__button-title">
            Informações Adicionais
          </span>
          <img
            src={isOpen ? chevronUp : chevronDown}
            alt="ícone de abrir aba"
          />
        </button>
        {isOpen && (
          <div className="info-drawer__link-container">
            <a className="info-drawer__link">
              <img
                src={enterpriseIcon}
                alt="ícone empresa"
                className="info-drawer__link-icon"
              />
              <span className="info-drawer__link-text">{user.company}</span>
            </a>
            <a className="info-drawer__link">
              <img
                src={mapPinIcon}
                alt="ícone local"
                className="info-drawer__link-icon"
              />
              <span className="info-drawer__link-text">{user.location}</span>
            </a>
            <a className="info-drawer__link" href={user.blog}>
              <img
                src={linkIcon}
                alt="ícone link"
                className="info-drawer__link-icon"
              />
              <span className="info-drawer__link-text">{(user.blog || "")?.replace("https://www.", "")}</span>
            </a>
            <a className="info-drawer__link" href={user.instagram_url}>
              <img
                src={instagramIcon}
                alt="ícone instagram"
                className="info-drawer__link-icon"
              />
              <span className="info-drawer__link-text">
                {user.instagram_nickname}
              </span>
            </a>
          </div>
        )}
      </div>
      <div className="info-drawer--medium-screen">
        <div className="info-drawer__link-container">
          <a className="info-drawer__link">
            <img
              src={enterpriseIcon}
              alt="ícone empresa"
              className="info-drawer__link-icon"
            />
            <span className="info-drawer__link-text">{user.company}</span>
          </a>
          <a className="info-drawer__link">
            <img
              src={mapPinIcon}
              alt="ícone local"
              className="info-drawer__link-icon"
            />
            <span className="info-drawer__link-text">{user.location}</span>
          </a>
          <a className="info-drawer__link" href={user.blog}>
            <img
              src={linkIcon}
              alt="ícone link"
              className="info-drawer__link-icon"
            />
            <span className="info-drawer__link-text">
              {(user.blog || "")?.replace("https://www.", "")}
            </span>
          </a>
          <a className="info-drawer__link" href={user.instagram_url}>
            <img
              src={instagramIcon}
              alt="ícone instagram"
              className="info-drawer__link-icon"
            />
            <span className="info-drawer__link-text">
              {user.instagram_nickname}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default UserAdditionalInformation;
