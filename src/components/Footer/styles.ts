import styled from 'styled-components'

import { breakpoints, colors, fontSize } from '@/app/styles'

export const Container = styled.div`
  h2 {
    font-size: ${fontSize.sl};
    color: ${colors.white};
    margin-bottom: ${fontSize.ll};
    margin-top: ${fontSize.ll};
  }
`

export const Links = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 24px;

  div:nth-child(1) {
    grid-column: span 1 / span 1;
    margin-bottom: 8px;

    p {
      color: ${colors.white};
    }

    @media (max-width: ${breakpoints.xm}) {
      margin-bottom: 0;
    }
  }

  div:nth-child(2) {
    grid-column: span 4 / span 4;

    div {
      display: flex;
    }

    a {
      display: flex;
      color: ${colors.whiteTwo};

      &:hover {
        text-decoration: underline;
      }

      svg {
        margin-left: 4px;
      }
    }

    @media (max-width: ${breakpoints.xm}) {
      grid-column: span 5 / span 5;
    }
  }
`
