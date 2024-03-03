'use client'

import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#F1F7FB',
  gray: '#131F24',
  grayTwo: '#4b4b4b',
  grayThree: '#52656D'
}

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
}

export const fontSize = {
  xm: '0.25rem', //4px
  sm: '0.5rem', //8px
  md: '0.75rem', //12px
  lg: '0.875rem', //14px
  xl: '1rem', //16px
  sl: '1.125rem', //18px
  ml: '1.25rem', //20px
  ll: '1.5rem', //24px
  xxl: '1.75rem', //28px
  xl2: '2rem', //32px
  xl3: '3rem' //48px
}

export const GlobalCss = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
  list-style: none;
  text-decoration: none;
}

body {
  background-color: ${colors.gray};
  max-width: 500px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 2%;
  padding-right: 2%;
}
`