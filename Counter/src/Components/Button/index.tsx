import React from 'react';
import styled from 'styled-components/native';
import AddIcon from '../../Assets/Images/add.png';
import RemoveIcon from '../../Assets/Images/remove.png';

const Container = styled.TouchableOpacity``;
const Icon = styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon source={iconName === 'plus' ? AddIcon : RemoveIcon} />
    </Container>
  );
};

export default Button;
