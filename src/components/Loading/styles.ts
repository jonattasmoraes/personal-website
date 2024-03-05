import styled from 'styled-components'

import { colors } from '@/app/styles'

export const Loading = styled.div`
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gray};
    transition: opacity 0.8s, visibility 0.8s;
  }

  .loaded {
    opacity: 0;
    visibility: hidden;
  }

  div::after {
    content: '';
    width: 75px;
    height: 75px;
    border: 15px solid ${colors.white};
    border-top-color: ${colors.grayThree};
    border-radius: 50%;
    animation: loading 0.8s ease-in-out infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`
