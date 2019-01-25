import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    const footer_content = (

                <div className="container">
                    <div className="row" id="footer-row">
                        <div className="col">
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <form>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email Address" required />
                                    <button type="button" className="btn btn-default input-group-btn subscribe" >Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <ul>
                                <li>AH Inc. &copy; 2018</li>
                                <li>+254-711-111-111</li>
                                <li>
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter-square"></i>
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
  return (
    <footer className="footer">
        {footer_content}
    </footer>
  )
}
export default Footer

