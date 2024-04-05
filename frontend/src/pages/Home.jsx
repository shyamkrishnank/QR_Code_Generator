import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import QRcode from '../components/QRcode'
import MyProvider from '../components/ContextApi'

function Home() {
  return (
    <div>
        <MyProvider>
           <NavBar />
           <Content />
           <QRcode />
        </MyProvider>
    </div>
  )
}

export default Home
