
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Member Details">
        {/* Team Details Start */}
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="team-details__top-bg">
                        <div className="team-details__top-shape-1 float-bob">
                            <img src="assets/images/shapes/team-details-top-shape-1.png" alt="" />
                        </div>
                        <div className="team-details__top-shape-2 float-bob-y">
                            <img src="assets/images/shapes/team-details-top-shape-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__top-img-box">
                                <div className="team-details__top-img">
                                    <img src="assets/images/team/team2.png" alt=""
                                    style={{
                                        width:"354px",
                                        height:"502px",
                                        objectFit:"cover"
                                    }}/>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-right">
                                <h3 className="team-details__top-right-title">Kamod Kumar Dubey</h3>
                                <p className="team-details__top-right-sub-title">Director -Coprorate solutions Group</p>
                                <ul className="team-details__top-points list-unstyled">
                                    {/* <li>
                                        <span>Department:</span>
                                        <p>Web Design</p>
                                    </li> */}
                                    <li>
                                        <span>Experience:</span>
                                        <p>15 Years</p>
                                    </li>
                                     
                                </ul>
                                {/* <div className="team-details__social">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#" className="team-details__social-color-2"><span
                                            className="icon-twitter"></span></Link>
                                    <Link href="#" className="team-details__social-color-3"><span
                                            className="icon-instagram"></span></Link>
                                    <Link href="#" className="team-details__social-color-4"><span
                                            className="icon-linkedin"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-details__bottom">
                    <h3 className="team-details__title-1">Kamod Kumar Dubey’s Biography</h3>
                    <p className="team-details__text-1">Mr. Kamod Kumar Dubey, a Post Graduate, with More than 20 years of Experience as Risk Management and Insurance Marketing Professional in the Commercial Businesses Segment, he pursued certifications from III, having worked with Several Insurers under Corporate Segment at various levels, having served various fortune 500 Corporates and being instrumental in the Implementation of Risk Management Tools at various companies at plant level including MNCs.</p>
                   
                
                
            
                    <div className="team-details__contact-box">
                        <h3 className="team-details__contact-title">Let’s Get in Touch</h3>
                        <p className="team-details__contact-text">Your email address will not be published. Required fields
                            are marked *</p>
                        <form action="assets/inc/sendemail.php" className="team-details__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Your Name*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="email" placeholder="Your Email*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Website*" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="team-details__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                    </div>
                                    <div className="contact-two__btn-box">
                                        <button type="submit" className="thm-btn team-details__btn">SEND YOUR
                                            MEASSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Team Details End */}

            </Layout>
        </>
    )
}