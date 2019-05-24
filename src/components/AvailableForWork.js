import React, { useState } from 'react'
import { Button } from './Button'

export const AvailableForWork = () => {
  const [availabilty, setAvailability] = useState(false)

  const toggleAvailability = () => setAvailability(!availabilty)

  return (
    <div border='1px solid' borderColor='green' p={3} mt={4}>
      <h2 fontWeight={300} mt={1}>
        <span
          fontWeight={availabilty ? 500 : null}
          color={availabilty ? 'green' : null}
        >{availabilty ? 'Available' : 'Unavailable'}</span> for work
      </h2>
      <Button onClick={toggleAvailability}>Toggle Availability</Button>
    </div>
  )
}
