import React from 'react';

import { Footer, Title, Text } from './styles';

const FooterBar = (): JSX.Element => (
  <Footer>
    <Title>Let&apos;s talk about TMDb</Title>
    <Text>The Movie Database (TMDb) is a community built movie and TV database.</Text>
    <Text>
      <a href='https://www.themoviedb.org/account/signup' target='_blank' rel='noreferrer'>
        <b>Sign up for an account</b>
      </a>
    </Text>
  </Footer>
);

export default FooterBar;
