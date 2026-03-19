// import React from 'react'

// const Read = ({form, DeleteFunction}) => {
//   return (
//     <div className='bg-amber-400 border border-red-500 flex gap-10'>
//         {form.map((elem, index)=>{
//             return <div key={index}>
//                 <h1 className='text-4xl text-red-600'>{elem.name}</h1>
//                 <img  className=' h-[200px]' src={elem.img} alt="" />
//                 <div className=' flex gap-4'> 


//                     <button
                   

//                     onClick={() => DeleteFunction(elem.id)}
//                     className='bg-emerald-700 py-2 px-6 rounded text-2xl capitalize text-white cursor-pointer'>delete</button>


//                     <button className='bg-red-700 py-2 px-6 rounded text-2xl capitalize text-white cursor-pointer'>edit</button>
//                 </div>
//             </div>
//         })}
//     </div>
//   )
// }

// export default Read

import React from 'react'

const Read = ({form, DeleteFunction}) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-700 flex flex-wrap gap-6 justify-center p-6">
      
      {form.map((elem) => {
        return (
          <div
            key={elem.id}
            className="w-[260px] backdrop-blur-lg bg-white/10 border h-fit  border-white/20 rounded-xl p-4 shadow-lg flex flex-col gap-3 hover:scale-105 transition"
          >
            <h1 className="text-lg font-semibold text-white">
              {elem.name}
            </h1>

            <img
              className="h-[200px] w-full object-cover object-top rounded-lg"
              src={elem.img}
              alt="post"
            />

            <div className="flex gap-3 mt-2">
              
              <button
                onClick={() => DeleteFunction(elem.id)}
                className="flex-1 bg-red-500/80 hover:bg-red-600 text-white py-2 rounded-lg transition active:scale-95"
              >
                Delete
              </button>

              {/* <button
                className="flex-1 bg-blue-500/80 hover:bg-blue-600 text-white py-2 rounded-lg transition active:scale-95"
              >
                Edit
              </button> */}

            </div>
          </div>
        );
      })}

    </div>
  )
}

export default Read