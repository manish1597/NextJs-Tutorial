import React from 'react';
import Link from 'next/link';


const HomePage = () => {
  console.log("Need Client Client Componet to show on Browser");
  return (

    <div>
      <h1 className='text-5xl mb-8 font-bold' > Next.js Tutorial</h1>
       
      <Link href='/client' className='btn btn-accent'> Get Started</Link>
    
      {/* <Link href='/about' className='text-2xl'>about page</Link>
      <br></br>
      <Link href='/about/info' className='text-2xl'>Info page</Link> */}
    </div>
  )
}

export default HomePage