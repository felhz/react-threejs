import React from 'react'
import { Link } from 'react-router-dom'
import Map from './three/geo'

const Page = () => {
  return (
    <div>
      <Map />
      <Link to={'/example/earth'}>earth</Link>
      <br />
      <Link to={'/example/geo'}>geo</Link>
    </div>
  )
}

export default Page
