
import React from 'react'


let link ="https://www.youtube.com/watch?v=N-HFQeZvaP0&pp=ygUXYW5pbWF0aW9uIGZvciBiZWdpbm5lcnM%3D"



const Page1 = () => {
 

  return (
    <div className='text-blue-950 bg-blue-200'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-blue-950 m-3 font-semibold'>STAY FOCUSED</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md-py-6'>Grow With Right Guidance</h1>
            <p className="md:text-4xl sm:text-4xl text-xl font-bold m-3 text-blue-900">Fast, Flexible, Featured for <span className='animate-shake animate-infinite'>Free</span></p>
           
            <a href={`${link}`} className='bg-blue-950 text-white rounded-md w-40 font-medium my-6 mx-auto p-5 hover:underline hover:font-bold'>Get Started</a>
         
        </div>

    </div>
  )
}

export default Page1