import styled from '@emotion/styled'
import { themeGet } from 'styled-system'

export const Link = styled.a(props => {
  const { green, mirage } = themeGet('colors')(props)

  return {
    display: 'inline-block',
    padding: themeGet('space.1')(props),
    textDecoration: 'none',
    color: green,
    borderBottom: '1px solid',
    transition: '0.2s ease',
    borderColor: green,
    ':hover': {
      backgroundColor: green,
      color: mirage,
    },
  }
})

