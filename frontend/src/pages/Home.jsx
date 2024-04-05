import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import QRcode from '../components/QRcode'
import MyProvider, { FileNameProvider } from '../components/ContextApi'

function Home() {
  return (
    <div>
        <FileNameProvider >
          <MyProvider>
            <NavBar />
            <Content />
            <QRcode />
          </MyProvider>
        </FileNameProvider>
    </div>
  )
}

export default Home
