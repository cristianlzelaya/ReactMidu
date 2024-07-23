import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isfollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isfollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isfollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isfollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="el avatar de midu"
        />
        <div className="tw-follorCard-info">
          <strong>{children} </strong>
          <span className="tw-follorCard-infoUserName">@{userName} </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
