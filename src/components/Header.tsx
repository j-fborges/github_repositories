import githubLogo from "../assets/githubLogo.png"

function Header () {
    return (
        <header className="header">
        <div className="header__container">
          <img src={githubLogo} alt="GitHub Logo" className="header__logo"/>
          <span className="header__divider">/</span>
          <span className="header__text">
            Profile
          </span>
        </div>
      </header>
    )
}

export default Header