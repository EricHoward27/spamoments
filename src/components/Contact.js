import React from 'react'

const Contact = () => {
  return (
    <section className="page-section" id="contact">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="mt-0">Let's Get In Touch!</h2>
                    <hr className="divider my-4" />
                    <p className="text-muted mb-5">For more information about Spa Moments By Serena - her program, activities, and more. Give us a call or send us an email and we will get back to you as soon as possible!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                    <div>+1 (708) 653-1206</div>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                    {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                    <a className="d-block" href="mailto:smprentiss@yahoo.com">smprentiss@yahoo.com</a>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact