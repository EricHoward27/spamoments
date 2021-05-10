import React from 'react'

const CallAction = ({ callLinks }) => {
  return (
    <section className="page-section bg-dark" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Spa Moments</h2>
                <h3 className="section-subheading text-muted">Meet Your Spa Therapist</h3>
            </div>
            <div className="row">
              { callLinks && callLinks.map(({ name, role, image}, index) =>
                <div className="col-lg-4" key={name}>
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={ image } alt="..." />
                        <h4>{ name }</h4>
                        <p className="text-muted">{ role }</p>
                        <a className="btn btn-light btn-social mx-2" href="https://www.twitter.com/smprentiss" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-light btn-social mx-2" href="https://www.facebook.com/serena.prentiss" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-light btn-social mx-2" href="https://www.linkedin.com/in/serena-prentiss-85101a36" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
              )}
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Say hello to  our Spa Moments By Serena team!</p></div>
            </div>
        </div>
    </section>
  )
}
export default CallAction