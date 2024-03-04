import { colors, fontSize } from '@/app/styles'
import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: ${fontSize.sl};
    color: ${colors.white};
    margin-bottom: ${fontSize.ll};
  }
`

export const Card = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(5, 1fr);

  div:nth-child(1) {
    grid-column: span 1 / span 1;

    span {
      color: ${colors.white};
    }

    @media (max-width: 400px) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

  div:nth-child(2) {
    grid-column: span 4 / span 4;

    @media (max-width: 400px) {
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

      svg {
        margin-left: 4px;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      color: ${colors.white};
      margin-bottom: 4px;
      margin-top: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${colors.white};
      }

      svg {
        margin-left: 4px;
        margin-top: -8px;
      }
    }

    p {
      margin-bottom: 4px;
      color: ${colors.whiteTwo};
      text-align: justify;
    }

    span:nth-child(1) {
      display: flex;
      margin-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${colors.white};
      }

      svg {
        margin-left: 4px;
        margin-top: -2px;
      }
    }

    span {
      color: ${colors.white};
    }
  }
`
