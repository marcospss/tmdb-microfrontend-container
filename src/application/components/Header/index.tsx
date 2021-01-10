import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Logo, Title, SubTitle } from './styles';

const AppBar = (): JSX.Element => (
  <Header>
    <Link to='/'>
      <Logo>
        <Title>The Movie Database</Title>
      </Logo>
    </Link>
    <div>
      <Link to='/favorites'>
        <b>Favorites</b>
      </Link>
    </div>
  </Header>
);

export default AppBar;
