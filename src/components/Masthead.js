import React from 'react'

const Masthead = () => {
  return (
    <header className="masthead">
    <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Spa Moments By Serena</h1>
                <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Body treatment care for the skin of your body! Spa Moments By Serena offers a wide variety of care for the skin!</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Learn more</a>
            </div>
        </div>
    </div>
    </header>
  )
}
export default Masthead