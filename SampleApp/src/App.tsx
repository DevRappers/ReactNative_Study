/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Theme from './Theme';

interface StyledProps {
  theme?: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledProps) =>
    props.theme && props.theme.color.black};
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Hello World</MainText>
      </Container>
    </ThemeProvider>
  );
};

export default App;