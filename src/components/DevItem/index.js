import React from 'react';

import './style.scss';

function DevItem(props) {
  const { dev } = props;

  return (
    <li className="devs__item">
      <section className="dev">
        <header className="dev__header">
          <figure className="dev__figure">
            <img className="dev__avatar" src={dev.avatar_url} alt={dev.name} />
          </figure>
          <div className="dev__content">
            <h1 className="dev__name">{dev.name}</h1>
            <p className="dev__techs">{dev.techs.join(", ")}</p>
          </div>
        </header>
        <p className="dev__bio">{dev.bio}</p>
        <a
          className="dev__link"
          href={`https://github.com/${dev.github_username}`}
        >
          Acessar perfil no GitHub
        </a>
      </section>
    </li>
  );
}

export default DevItem;