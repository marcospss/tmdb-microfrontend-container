import React from 'react';

import { Container, Loader } from './styles';

const LoaderAnimation = (): JSX.Element => (
  <Container>
    <Loader />
  </Container>
);

export default React.memo(LoaderAnimation);
