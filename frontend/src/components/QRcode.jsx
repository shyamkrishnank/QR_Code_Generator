import React, { useContext, useEffect } from 'react'
import { QrContext } from './ContextApi'



function QRcode() {
    const {QrCode, setQrcode} = useContext(QrContext)
    useEffect(()=>{

    },[QrCode])
  return (
    <div className='flex flex-col justify-center mt-4'>
      <div className='my-2 flex w-full justify-center'><h1 className='text-xl font-bold'>QR Preview</h1></div>  
      <div className='flex w-full justify-center'>
        <img  src={QrCode} className='border w-64' />
      </div>
    </div>
  )
}

export default QRcode
