import React, { useState } from "react"
import "../styles/contact.css"
import emailjs from "emailjs-com"

const Contact = ({ data }) => {
  const contactData = data.graphCmsData.contacts[0]

  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [messageInput, setMessageInput] = useState("")

  const [status, setStatus] = useState(0)

  const statusMessage = num => {
    if (num === 1) {
      setStatus(1)
      setTimeout(() => {
        setStatus(0)
      }, 3000)
    } else if (num === 2) {
      setStatus(2)
      setTimeout(() => {
        setStatus(0)
      }, 6000)
    } else {
      setStatus(0)
    }
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_2h3x2xt",
        "template_0459zvq",
        e.target,
        "pBo01AODO1wwfr_jv"
      )
      .then(
        result => {
          // console.log(result.text)
          statusMessage(1)
        },
        error => {
          // console.log(error.text)
          statusMessage(2)
          // alert(
          //   "An error occurred. \nPlease try reaching out to me at cpn8ftn@virginia.edu"
          // );
        }
      )
    e.target.reset()
    setNameInput("")
    setEmailInput("")
    setMessageInput("")
  }

  return (
    <div id="contact" className="contact_container global_padding middle">
      <div className="contact_content">
      {/* <div className="global_variable-width"> */}
        <p className="global_section-title">{contactData.sectionHeader}</p>
        <div className="contact_content-sides">
          <div className="contact_left-info">
            <p className="global_subtitle" /*style={{ paddingTop: "1rem" }}*/>
              {contactData.title}
            </p>
            <p
              className="global_paragraph-text"
              style={{ paddingTop: "0.5rem" }}
            >
              {contactData.subtitle}
            </p>
          </div>
          {/* <div className="contact_right-input"> */}
          <form className="contact_right-input" onSubmit={sendEmail}>
            <div className="form-section">
              <label for="name">Name</label>
              <input
                required
                className="global_paragraph-text"
                type="text"
                id="fname"
                name="from_name"
                placeholder={contactData.namePlaceholder}
                onChange={e => setNameInput(e.target.value)}
              />
            </div>
            <div className="form-section">
              <label for="email">Email</label>
              <input
                required
                className="global_paragraph-text"
                type="text"
                id="email"
                name="reply_to"
                placeholder={contactData.emailPlaceholder}
                onChange={e => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-section">
              <label for="message">Message</label>
              <textarea
                required
                rows={5}
                className="global_small-paragraph-text"
                type="message"
                id="message"
                name="message"
                placeholder={contactData.messagePlaceholder}
                style={{ resize: "none" }}
                onChange={e => setMessageInput(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="global_paragraph-text"
            />
          </form>
        </div>
        <div>
          {status === 1 && (
            <p className="global_paragraph-text" style={{ color: "green" }}>
              Email sent successfully!
            </p>
          )}
          {status === 2 && (
            <p className="global_paragraph-text" style={{ color: "red" }}>
              Error! Email me at noblecp1@gmail.com
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
