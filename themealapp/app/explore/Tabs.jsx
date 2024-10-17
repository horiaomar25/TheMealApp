import React from 'react'
import Link from 'next/link'

const Tabs = () => {
  return (
    <div className=' border  rounded-lg h-10 bg-slate-500 hover:shadow-nav-shadow m-3'>
  <Link href="/Categories" className="text-center ">Categories</Link>
        </div>
  )
}

export default Tabs