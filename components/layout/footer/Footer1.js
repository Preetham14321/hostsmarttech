import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="index"><img src="assets/images/resources/herologo.png"
                                                alt="" style={{
                                                    width:"180px"
                                                }} /></Link>
                                    </div>
                                    <p className="footer-widget__about-text">3rd main road, Annanagar Chennai 600040, TamilNadu</p>
                                    <div className="footer-widget__emergency-call">
                                        <Link href="tel:+134353353545">+91 7014987001</Link>
                                    </div>
                                    <div className="footer-widget__social">
                                    <Link href="https://twitter.com/SmartTechinsure"><i className="fab fa-twitter"></i></Link>
                            <Link href="https://www.facebook.com/SmartTechInsurance"><i className="fab fa-facebook"></i></Link>
                            <Link href="https://www.youtube.com/channel/UCRcol2Zbf3uMmk5SG3azAGQ"><i className="fab fa-youtube"></i></Link>
                            <Link href="https://www.linkedin.com/company/smarttech-insurance/"><i className="fab fa-linkedin"></i></Link>
                       </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Individual Insurance</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="motor-ins">Car Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="insurance">Bike Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="health-ins">Health Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="travel-ins">Travel Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="home-ins">Home Insurance</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__quick-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Corporate  Insurance</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="project-ins">Project Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="marine-ins">Marine Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="liability-ins">Liability Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="employeeBenifit-ins">Employee Benefit Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="crime-ins">crime Insurance</Link>
                                        </li>
                                        <li>
                                            <Link href="property-ins">Property Insurance</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Newsletter</h3>
                                    </div>
                                    <p className="footer-widget__newsletter-text">Subscribe our newsletter to get the
                                        <br/> latest news & updates</p>
                                    <form className="footer-widget__newsletter-form">
                                        <div className="footer-widget__newsletter-input-box">
                                            <input type="email" placeholder="support@smarttechinsurance.co.in" name="email"/>
                                            <button type="submit" className="footer-widget__newsletter-btn"><i
                                                    className="icon-send"></i></button>
                                        </div>
                                        <img src="assets/images/resources/irdai.png" style={{
                                            marginTop:"30px"
                                        }} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                       <p>IRDAI INSURANCE BROKER LIFE & GENERAL LICENSE – 731 | VALID TILL – 23/11/2026 | CODE -IRDA/DB821/20</p>
                       <p>  VALID TILL – 23/11/2026 | CODE -IRDA/DB821/20 |</p>
                       <p>LLP – AAR6557 | GSTIN – 33AECFS492C1ZF | IBAI MEMBERSHIP – 43731</p>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">ALL RIGHTS RESERVED © SMARTTECH INSURANCE BROKERS LLP 2024</p>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
