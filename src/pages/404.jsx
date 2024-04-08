import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-full">
            <h1 className="text-4xl text-dark-grey font-bold m-10">404 Page</h1>
            <p className="text-2xl text-dark-grey font-bold">This page is not yet released</p>
            <p className="text-2xl text-dark-grey font-bold">Sorry for the inconvenience</p>
            <p className="text-xl text-dark-grey font-bold m-32">Please go <Link to='/' className='bg-dark-green hover:bg-light-green px-8 py-3 rounded-full text-white'>Home</Link></p>
            

        </div>
    )
}

export default PageNotFound