import styled from 'styled-components';
import { device } from '@theme/breakPoint';

export const CardContainer = styled.div`
  display: grid;
  column-gap: 2em;
  row-gap: 2em;
  padding: 1rem;
  grid-template-columns: auto auto auto;
  margin: 4em 4em;
  @media only screen and ${device.sm} {
    grid-template-columns: 1fr;
    margin: 2em 2em;
  }
`;
