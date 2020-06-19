import React from 'react';
import styled from 'styled-components/native';
import Todo from './Screens/Todo';

import {TodoListContextProvider} from './Context/TodoListContext';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
