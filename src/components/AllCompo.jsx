import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Services from './Services'
import Industry from './Industry'
import Overview from './Overview'
import Clients from './Clients'
export default function AllCompo() {
  return (
    <div> 
      <Home/>
      <Services/>
      <Industry/>
      <Overview/>
    </div>
  )
}
