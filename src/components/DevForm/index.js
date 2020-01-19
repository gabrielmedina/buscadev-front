import React, { useState, useEffect } from 'react';

import './style.scss';

function DevForm(props) {
  const [techs, setTechs] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    const { onSubmit } = props;
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form className="form" onSubmit={handleAddDev}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Cadastrar</legend>

        <div className="form__field">
          <label className="form__label" htmlFor="github_username">
            Usuário do GitHub
          </label>
          <input
            id="github_username"
            name="github_username"
            className="form__input"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="techs">
            Tecnologias
          </label>
          <input
            id="techs"
            name="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            className="form__input"
            required
          />
        </div>

        <div className="form__fields-group">
          <div className="form__field">
            <label className="form__label" htmlFor="latitude">
              Latitude
            </label>
            <input
              id="latitude"
              name="latitude"
              className="form__input"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="longitude">
              Longitude
            </label>
            <input
              id="longitude"
              name="longitude"
              className="form__input"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
            />
          </div>
        </div>
      </fieldset>

      <div className="form__actions">
        <button className="form__btn" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
}

export default DevForm;
