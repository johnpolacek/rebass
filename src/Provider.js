import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  shape,
  arrayOf,
  oneOfType,
  array,
  object,
  string,
  number,
} from 'prop-types'
import theme from './theme'

const Base = styled.div([], props => ({
  fontFamily: props.theme.fonts.sans || theme.fonts
}))

const Provider = props => (
  <ThemeProvider theme={Object.assign({}, theme, props.theme)}>
    <Base {...props} />
  </ThemeProvider>
)

Provider.propTypes = {
  theme: shape({
    breakpoints: arrayOf(number),
    space: arrayOf(number),
    fontSizes: arrayOf(number),
    weights: arrayOf(number),
    colors: oneOfType([
      object,
      array
    ]),
    fonts: shape({
      sans: string,
      serif: string,
      mono: string
    }),
    radius: number
  })
}

export default Provider
