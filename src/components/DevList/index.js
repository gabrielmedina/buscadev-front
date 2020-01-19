import React from 'react';

import './style.scss';

import DevItem from '../DevItem';

function DevList(props) {
  const { devs } = props;

  return (
    <ul className="devs">
      {devs.map(dev => (
        <DevItem key={dev._id} dev={dev} />
      ))}
    </ul>
  );
}

export default DevList;