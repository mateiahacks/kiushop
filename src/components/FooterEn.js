import './Footer.css';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const FooterEn = () => {
    return (
        <div className='footer'>
            <div className="footer__inner">
                <div className="footer__main">
                    <div className="footer__left">
                        <h1>KIUSoft</h1>
                        <h3>FOLLOW US</h3>
                        <div className="socials">
                            <FiFacebook size={25}/>
                            <FiInstagram size={25}/>
                            <FiTwitter size={25}/>
                            <FiYoutube size={25}/>
                        </div>
                    </div>
                    <div className="footer__right">
                        <h1>NEWSLETTER SUBSCRIPTION</h1>
                        <p>Sign up for KIUSoft updates to receive information about new arrivals, future events and specials.</p>
                        <div className="subscribe">
                            <input type="text" placeholder='Enter Your Email'/>
                            <div className="sub__btn">Subscribe</div>
                        </div>
                        <div className="contacts">
                            <h4 style={{marginBottom: '20px'}}>Contact me</h4>
                            <div className="contact">
                                <BsTelephone size={15} />
                                <p>+995 555 555 555</p>
                            </div>
                            <div className='contact'>
                                <GoMail size={15}/>
                                <p>KIUShop@gmail.com</p>
                            </div>
                            <p style={{cursor: 'pointer', marginBottom: '20px', marginLeft: '25px'}}>Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>@Copyright 2022 by KIUSoft All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default FooterEn;