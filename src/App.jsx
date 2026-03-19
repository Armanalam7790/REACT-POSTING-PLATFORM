import React, { useState } from 'react'
import Form from './components/Form'
import Read from './components/Read';
import { toast } from 'react-toastify';

const App = () => {
  const [form, setform] = useState([])
  console.log(form);

   function DeleteFunction(id) {
    // console.log(id);
    
  let dlt =   form.filter((ele)=>{
      return ele.id !== id
      
    })
setform(dlt)
toast.error('Post Delete')

  }
  
  return (
    <div className='h-screen w-screen  bg-gray-500 overflow-hidden '>
      <div className='flex gap-2 justify-center   items-start'>
        <Form setform={setform} />
      </div>
      <Read form={form} DeleteFunction={DeleteFunction}  />
      
      
    </div>
  )
}

export default App