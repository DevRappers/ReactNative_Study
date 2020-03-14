import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Container>
      <Text>Hello First APP</Text>
    </Container>
  );
};

export default App;
