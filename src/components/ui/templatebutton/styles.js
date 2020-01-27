import styled from 'styled-components/native';

export const TpButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => props.primary ? "palevioletred" : "white"};
  color: white ;
  font-size: 1px;
  margin: 1px;
  padding: 0.25px 1px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TextButton = styled.Text`
color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 15px;
  text-align: center;
  margin-top:10px;
`;