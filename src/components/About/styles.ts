import { colors, fontSize } from '@/app/styles'
import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 24px;
  color: ${colors.white};

  h2 {
    font-size: ${fontSize.sl};
    color: ${colors.white};
    margin-bottom: 8px;
  }

  p {
    color: ${colors.whiteTwo};
  }
`
