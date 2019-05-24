import React from 'react'

export const Button = props =>
  <button
    borderColor='green'
    bg='transparent'
    color='white'
    p={2}
    fontSize={1}
    transition='0.3s'
    css={{
      ':hover': {
        backgroundColor: 'green',
        color: 'mirage',
      }
    }}
    {...props}
  />
