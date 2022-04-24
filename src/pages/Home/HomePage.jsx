import React from 'react'
import { Link } from 'react-router-dom'
import { DASHBOARD } from '../../routes/CONSTANTS'

export default function HomePage() {
  return (
    <Link to={DASHBOARD}><h1>Dashboard</h1></Link>
  )
}
