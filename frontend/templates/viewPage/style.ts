import { device } from '@theme/breakPoint';
import styled from 'styled-components';

export const JobContainer = styled.div`
  height: 40vh;
  top: 20%;
  left: 20%;
  bottom: 20%;
  right: 20%;
  position: fixed;
  @media only screen and ${device.sm} {
    top: 15%;
    left: 15%;
    bottom: 15%;
    right: 15%;
  }
`;
