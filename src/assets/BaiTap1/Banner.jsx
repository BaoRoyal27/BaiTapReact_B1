import React from 'react'

const Banner = () => {
  return (
        <div className="container bg-body-secondary my-4 py-5 rounded rounded-2 ">
        <div className="p-5">
            <h1 className='fw-normal fs-1'>A warm welcome!</h1>
            <p className='fs-5'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className="btn btn-primary px-4 py-2 fs-5">Call to action</button>
        </div>
        </div>
  )
}

export default Banner