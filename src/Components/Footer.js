import React from 'react'


function Footer() {
  return (
    <footer className="f-container">
    <div className="f-txt-container">
        <p>@2023 Digital Booking</p>
    </div>

    <div className="f-img-container">
        <img className="icon" src='./imgFooter/fb.svg'alt="facebook"/>
        <img className="icon" src='./imgFooter/linkedin.svg'alt="linkedIn"/>
        <img className="icon" src='./imgFooter/tweet.svg' alt="twitter" href="Twitter"/>
        <img className="icon" src='./imgFooter/ig.svg' alt="instgram" href="Instgram"/>        
    </div>
</footer>
  )
}

export default Footer

