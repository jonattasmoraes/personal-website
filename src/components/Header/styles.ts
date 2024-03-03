import { colors, fontSize } from '@/app/styles'
import styled from 'styled-components'

export const Avatar = styled.div`
  display: flex;
  background-color: ${colors.grayTwo};
  border-radius: 16px;
  justify-content: center;
`

export const Backgrond = styled.div`
  display: flex;
  height: 174px;

  img {
    margin-top: 12px;
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

    h1 {
      font-size: ${fontSize.xxl};
      color: ${colors.white};
    }

    p {
      margin-top: 4px;
      margin-bottom: 4px;
      color: ${colors.grayThree};
    }

    a {
      margin-top: 4px;
      color: ${colors.white};

      &:hover {
        border-bottom: 1px solid ${colors.white};
      }
    }
  }

  div:nth-child(2) {
    grid-column: span 2 / span 2;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    color: ${colors.white};

    span {
      margin-left: 8px;
    }

    svg {
      font-size: ${fontSize.xl2};
    }
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.grayThree};
  margin-top: 24px;
  margin-bottom: 24px;
`