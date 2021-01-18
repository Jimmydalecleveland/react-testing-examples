import React, { useState, useEffect } from 'react'
import swapiGetter from './swapiGetter'

const SwapiGetter = () => {
  const [person, setPerson] = useState()

  useEffect(() => {
    swapiGetter(1).then(res => {
      // You can confirm your mocked value is being called like this:
      // console.log('mockedValue in useEffect ->', res.data)
      setPerson(res.data)
    })
  }, [])

  if (!person) return <h1>...Loading</h1>

  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  )
}

export default SwapiGetter
