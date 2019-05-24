export const theme = {
  colors: {
    mirage: '#161821',
    green: '#00d9af',
    white: '#fff',
    pink: '#f875e2',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 32, 48, 64, 72, 96],
}

export const global = {
  '*, ::before, ::after': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    fontFamily: 'sans-serif',
    backgroundColor: theme.colors.mirage,
    color: theme.colors.white,
  },
  h1: {
    fontWeight: 300,
  },
}
