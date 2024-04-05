import React, { createContext, useState } from 'react';

export const QrContext = createContext();

export const QrFileNameContext = createContext()

const MyProvider = ({ children }) => {
    const [QrCode, setQrcode] = useState("/QRpreviw.png")
  
    return (
      <QrContext.Provider value={{ QrCode, setQrcode}}>
         {children}
      </QrContext.Provider>
    )
  }

 export const FileNameProvider = ({ children }) => {
    const [fileName, setfileName] = useState("My_QrCode")
  
    return (
      <QrFileNameContext.Provider value={{ fileName, setfileName}}>
         {children}
      </QrFileNameContext.Provider>
    )
  }

  export default MyProvider
  