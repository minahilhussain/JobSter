import styled from 'styled-components';
import { colors } from '../../Theme/colors';
export const Title = styled.h1`
  font-size: 2em;
  color: ${colors.green};
`;

export const Wrapper = styled.section`
  padding: 1.3em;
  background: ${colors.darkBlue};
  padding-left: 4em;
`;

// export const Heading = styled.h2.attrs(() => ({
//   className: 'display-4',
// }))`
//   font-weight: bold;
//   color: ${colors.darkBlue};
//   background-color: red;
// `;
