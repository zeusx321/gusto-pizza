import React from 'react'

const CTA = () => {
  return (
    <section className="cta">
        <h2 className="cta-bg-text cta-bg-left">G<br />U<br />S<br />T<br />O</h2>
        <h2 className="cta-bg-text cta-bg-right">P<br />I<br />Z<br />Z<br />A</h2>
        <div className="cta-div">
            <h2>Get offers straight to your inbox.</h2>
            <p>Sign up for the Gusto Pizza newsletter.</p>
            <div className='cta-email'>
                <input type="email" placeholder='Enter Your Email Address' />
                <button>Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default CTA