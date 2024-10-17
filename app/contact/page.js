
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/* Contact Page Start */}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <h3 className="contact-page__title">Get in Touch</h3>
                      
                        <div style={{
                            margin:'5px 0 5px 0'
                        }}>
                            
                            <div className="contact-page__contact-info">
                                <h4 className="contact-page__contact-info-title">Registered office Contact Info</h4>
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <h5>Address</h5>
                                        <p>U91, Krishna apartments, 3rd main road, Annanagar Chennai 600040, TamilNadu</p>
                                    </li>
                                    <li>
                                        <h5>Phone</h5>
                                        <p><Link href="tel:09354587874">860864179</Link></p>
                                    </li>
                                     
                                </ul>
                                
                            </div>
                            <div className="contact-page__contact-info">
                                <h4 className="contact-page__contact-info-title">Branch Contact Info</h4>
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <h5>Address</h5>
                                        <p>W65/4 TLV manor, 2nd floor 3rd street, Annanagar Chennai 600040, TamilNadu</p>
                                    </li>
                                    <li>
                                        <h5>Phone</h5>
                                        <p><Link href="tel:09354587874">7014987001</Link> </p>
                                    </li>
                                   
                                </ul>
                                   </div>
                            <div className="contact-page__contact-info">
                                <h4 className="contact-page__contact-info-title">Branch Contact Info</h4>
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <h5>Address</h5>
                                        <p>A101 Dheeraj uphar chs ltd Malad East, Mumbai 400097, Maharastra</p>
                                    </li>
                                    <li>
                                        <h5>Phone</h5>
                                        <p><Link href="tel:09354587874">8879612041</Link> </p>
                                    </li>
                                  
                                </ul>
                             </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <div className="contact-page__img">
                                <img src="assets/images/resources/contact-page-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-page__bottom">
                    <div className="comment-form">
                        <h3 className="comment-one__title">Let’s Get in Touch</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Your Name*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="email" placeholder="Your Email*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Website*" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="comment-form__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                    </div>
                                    <div className="comment-form__btn-box">
                                        <button type="submit" className="thm-btn comment-form__btn">Send
                                            Meassage</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Page End */} 

            </Layout>
        </>
    )
}