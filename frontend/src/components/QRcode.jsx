import React, { useContext,  useRef } from 'react'
import { QrContext, QrFileNameContext } from './ContextApi'
import html2canvas from 'html2canvas';



function QRcode() {
    const element = useRef(null);
    const {QrCode, setQrcode} = useContext(QrContext)
    const {fileName} = useContext(QrFileNameContext)
    const handleDownloadImage = async () => {
              const canvas = await html2canvas(element.current)
              const data = canvas.toDataURL('image/png')
              const link = document.createElement('a')
              link.href = data
              link.download = fileName + '.png'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
     }    
  return (
    <div className='flex flex-col justify-center mt-4'>
      <div className='my-2 flex w-full justify-center'><h1 className='text-xl font-bold'>QR Preview</h1></div>  
      <div ref={element} className='flex w-full justify-center'>
        <img ref={element} src={QrCode} className='border w-64' />
      </div>
      <div className='mt-3 flex w-full justify-center'>
      <button className='border p-1' onClick={() => handleDownloadImage()}>Download as PNG</button>
      </div>
    </div>
  )
}

export default QRcode
