import axios from 'axios'
import React, { useContext, useState } from 'react'
import { QrContext, QrFileNameContext } from './ContextApi'


function Content() {
    const [content,setContent] = useState()
    const {fileName, setfileName} = useContext(QrFileNameContext)
    const {QrCode, setQrcode} = useContext(QrContext)

    const handleClick = () =>{
        if (content && fileName){
            const data = {
                'content' : content,
                'fileName' : fileName
            }
            axios.post('http://127.0.0.1:8000/generator/',data)
            .then(response=>{
                setQrcode('http://127.0.0.1:8000/' + response.data.key)
            })
            .catch(error=>{
                alert('Something error occured')
            })
        }
        else{
            alert('Please type the content and file_name to generate')
        }
    }

  // check if the content state is not empty and then generate the fileName from the url 
  
  if (content != null and fileName == null){
      let domain = (new URL(url)).hostname.replace('www.',''); // getting the domain from the url
      setFileName(domain);
  }
    
  return (
    <>
    <div className='ml-14 mt-8 flex justify-center gap-5'>
        <div className="mb-6 ">
           <label  className="block text-gray-700 text-sm font-bold mb-2">Enter the URL or any content</label>
           <input  type="text" value={content} onChange={(e)=>setContent(e.target.value)} className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="mb-6">
           <label  className="block text-gray-700 text-sm font-bold mb-2">Enter the file name</label>
           <input  type="text" value={fileName} onChange={(e)=>setfileName(e.target.value)} className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
   </div>
    <div className='w-full flex justify-center'>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">Generate</button>
    </div>
    </>
  )
}

export default Content
