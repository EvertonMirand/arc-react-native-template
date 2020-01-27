import styled from 'styled-components/native';
import image from '~/assets/background.png'

export const ImageContainer = styled.ImageBackground.attrs({
  source: image,
})`
  width: 100%;
  height: 100%;
`;
