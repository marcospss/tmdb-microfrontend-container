import React from 'react';

import { Container, Message } from './styles';

const AlertErrorBoundary = (): JSX.Element => (
  <Container>
    <Message>Unfortunately, something went wrong.</Message>
  </Container>
);

export default React.memo(AlertErrorBoundary);
