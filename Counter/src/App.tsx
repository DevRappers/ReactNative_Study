import React from 'react';
import styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <Container>
      <Counter initValue={0} title="This is a Counter App" />
    </Container>
  );
};

export default App;
