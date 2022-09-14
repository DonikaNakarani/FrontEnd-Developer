import React from 'react'

function Contact() {
  return (
    
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form action="#" className="contact-form shadow">
          <h5 className="title">Contact Us</h5>
          <p className="description text-danger">Feel free to contact us if you need any help or another question.
          </p>
          <div>
            <input type="text" className="form-control rounded border-black mb-3 form-input" id="name" placeholder="Name" required />
          </div>
          <div>
            <input type="email" className="form-control rounded border-black mb-3 form-input" placeholder="Email" required />
          </div>
          <div>
            <textarea id="message" className="form-control rounded border-black mb-3 form-text-area" rows={5} cols={30} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="submit-button-wrapper">
            <input type="submit" defaultValue="Send" />
          </div>
        </form>
      </div>

  )
}

export default Contact