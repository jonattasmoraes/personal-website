import styled from 'styled-components'

import { breakpoints, colors, fontSize } from '@/app/styles'

export const Card = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(5, 1fr);
  margin-top: ${fontSize.ll};

  span {
    display: flex;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  div:nth-child(1) {
    grid-column: span 1 / span 1;

    @media (max-width: ${breakpoints.xm}) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

  div:nth-child(2) {
    grid-column: span 4 / span 4;

    @media (max-width: ${breakpoints.xm}) {
      grid-column: span 5 / span 5;
    }

    img {
      width: auto;
      height: 50px;

      &:hover {
        transform: scale(1.05);
      }
    }

    a {
      display: flex;
      color: ${colors.white};

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin-bottom: 8px;
      color: ${colors.whiteTwo};
      text-align: justify;
    }
  }
`

export const Links = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-top: 8px;

  svg {
    margin-left: 4px;
    margin-top: -2px;
  }
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  color: ${colors.white};

  svg {
    margin-left: 4px;
    margin-top: -8px;
  }
`
