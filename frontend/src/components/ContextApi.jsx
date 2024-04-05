import React, { createContext, useState } from 'react';

export const QrContext = createContext();

const MyProvider = ({ children }) => {
    const [QrCode, setQrcode] = useState("/QRpreviw.png")
  
    return (
      <QrContext.Provider value={{ QrCode, setQrcode}}>
        {children}
      </QrContext.Provider>
    )
  }

  export default MyProvider
  