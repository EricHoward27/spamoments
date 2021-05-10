import React from 'react'

const Services = () => {
  return (
    <section className="page-section" id="services">
        <div className="container">
            <h2 className="text-center mt-0">My Services</h2>
            <hr className="divider my-4" />
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-spa text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Make-Up Services</h3>
                        <p className="text-muted mb-0">Serena offers make-up services, and her expertise as a make up artist brings out your best feature for any occasion!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-mask text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Facial Care</h3>
                        <p className="text-muted mb-0">Spa Moments will ensure that you get top notch facial treatments, Serena have many remedies that will treat your skin with care!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Skin Care</h3>
                        <p className="text-muted mb-0">Spa Moments By Serena offer a wide variety of healthy face and body skin treatments!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-car-side text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Mobile</h3>
                        <p className="text-muted mb-0">Spa Moments provides on the spot services, just schedule, and a therapist will come to you!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Services