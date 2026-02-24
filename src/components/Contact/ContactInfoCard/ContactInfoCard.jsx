import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({icon , text}) => {
  return (
    <div className='contact-details-card'>
        <div className="icon">
            <img src={icon} alt={text} />
        </div>

        <p className="details">{text}</p>
    </div>
  )
}

export default ContactInfoCard