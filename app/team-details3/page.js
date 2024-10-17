
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
                                    <img src="assets/images/team/team3.png" alt=""
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
                                <h3 className="team-details__top-right-title">Dipanjan Dutta</h3>
                                <p className="team-details__top-right-sub-title">Advisor</p>
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
                    <h3 className="team-details__title-1">Dipanjan Dutta’s Biography</h3>
                    <p className="team-details__text-1">Dipanjan Dutta, Advisor, is a Commerce Graduate from St. Xavier’s College, Kolkata and an Associate of the Insurance Institute of India. He has been a part of the Global Leadership Program of Royal & Sun Alliance with programs across Singapore, the Middle East and London. He has also participated in Strategic Leadership program of the Indian Institute of Management, Kolkata.<br/>
He started his career with the Oriental Insurance Co Ltd and was heading division of Oriental Insurance Company and associated with the company till the year 2000. In his various stints in the Oriental Insurance, he has been responsible for claims and underwriting.<br/>
He joined Royal Sundaram General Insurance Co. Ltd in the year 2000 as Head of Commercial claims responsible for building up the process, implementation and adoption of the team to handle corporate claims pan India. In his stint with RSG, he played different roles as Business and Geo Head responsible for the P&L A/c. accordingly he worked closely with the Underwriting, Claims, Finance and HR functions. He has also been part of Product Development. While leaving the company in the year 2022, as Country Head – OEM & BB in the Sr. Vice President Grade and continues to be associated with the Industry in his zeal for innovation in the sphere of Insurance.</p>
                   
                
                
            
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