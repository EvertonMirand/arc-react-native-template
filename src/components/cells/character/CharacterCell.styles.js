/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const ContainerCell = styled.View`
    margin-top:20px;
    border-radius:10px;
    height: 250px;
    width: 100%;
    background-color: 'rgba(255, 255, 255, 0.3)';
`;

export const SubContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;    
`;

export const CharacterImage = styled.Image`
    resize-mode:contain;
    margin-top:20px;
    height: 150px;
    width: 100%;    
`;

export const Name = styled.Text`
    text-align:center;
    font-size:18px;
    margin-bottom:20px;
    margin-top:10px;
    color:#FFF
`;
