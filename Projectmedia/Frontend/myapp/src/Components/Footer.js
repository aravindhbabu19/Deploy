import React from 'react'
import { FaFacebook, FaGoogle, FaInstagramSquare, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div class='tok text-dark container'>
      <div class='row pt-3'>
        <div class='col-12 col-sm-12 col-md-12 col-lg-4 my-2'>
            <h4 class='pages-h'>Address</h4>
            <p class='pages-p'>Huskur Gate,Bengaluru</p>
            <p class='pages-p'>Karnataka 000000</p>
            <h4 class='pages-h'>Email</h4>
            <p class='pages-p'>mastermind@learn.com</p>
        </div>
        <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-2'>
            <h4 class='d-flex justify-content-center'>Rate Us</h4>
            <div class='d-flex justify-content-center'>
                <FaStar class='star' type='button' title="Don't Love It"/>
                <FaStar class='star1' type='button' title="Not Great"/>
                <FaStar class='star2' type='button' title="Good" />
                <FaStar class='star3' type='button' title="Great"/>
                <FaStar class='star4' type='button' title="Love It"/>
            </div>
            <div class='col d-flex justify-content-center mt-5'>
              <p>+91 123 456 7890</p>
            </div>
          </div>
          <div class='col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center'>
            <Link to='https://www.facebook.com/'><FaFacebook class='icon-1 mx-3' type='button'/></Link>
            <Link to='https://www.google.com/'><FaGoogle class='icon-2 mx-3' type='button'/></Link>
            <Link to='https://www.instagram.com/'><FaInstagramSquare class='icon-3 mx-3' type='button'/></Link>
          </div>
      </div>
    </div>
  )
}

export default Footer