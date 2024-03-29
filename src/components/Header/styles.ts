import { breakpoints, colors, fontSize } from '@/app/styles'
import styled from 'styled-components'

export const Backgrond = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  height: 174px;
  z-index: 1;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const Info = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(5, 1fr);
  margin-top: 24px;
  font-size: ${fontSize.xl};

  div:nth-child(1) {
    grid-column: span 3 / span 3;

    @media (max-width: ${breakpoints.xm}) {
      grid-column: span 5 / span 5;
    }

    h1 {
      font-size: ${fontSize.xxl};
      color: ${colors.white};

      @media (max-width: ${breakpoints.xm}) {
        display: flex;
        justify-content: center;
      }
    }

    p {
      margin-top: 4px;
      margin-bottom: 4px;
      color: ${colors.whiteTwo};

      @media (max-width: ${breakpoints.xm}) {
        display: flex;
        justify-content: center;
      }
    }

    p:nth-child(1) {
      display: flex;
      align-items: center;
      width: 150px;
      color: ${colors.white};
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${colors.white};
      }

      svg {
        margin-left: 4px;
        margin-top: -4px;
      }
    }

    a {
      display: flex;

      @media (max-width: ${breakpoints.xm}) {
        justify-content: center;
      }
    }
  }

  div:nth-child(2) {
    grid-column: span 2 / span 2;
    display: flex;
    justify-content: flex-end;
    margin-top: 46px;
    color: ${colors.white};

    @media (max-width: ${breakpoints.xm}) {
      display: none;
    }

    span {
      margin-left: 8px;
    }

    svg {
      font-size: ${fontSize.xl2};
    }
  }
`
