
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
                                    <img src="assets/images/team/team4.png" alt=""
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
                                <h3 className="team-details__top-right-title">Rajan Ramaswamy</h3>
                                <p className="team-details__top-right-sub-title">Senior Commercial underwriter</p>
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
                    <h3 className="team-details__title-1">Rajan Ramaswamy’s Biography</h3>
                    <p className="team-details__text-1">Rajan Ramaswamy  is a performance driven underwriter with 39+ years’ experience out of which 18 years in Dubai Heading the General Insurance Department with  a leading Insurance Broker.  Specialist in the all types of Insurances like Property, Engineering, Consequential Loss, Group Life, Causality & Liability specifically in Professional Indemnity Insurance<br/><br/>

In India he started his career in a Public Sectior Insurance and held various positions including in Marketing.  Handled Underwriting and Claims for major clients in Textile Industry, Fertilizer & Chemical Industries, National Highway Contractors, Granite Factories, College Institutions, and Transport Operators. <br/><br/>

Some of the major clients handled by him are Premier Mills, Precot Spinning Mills, Super Spinning Mills, Pioneer Mills, Dharanidhara Spinning Mills, Ranganathar & Co  NH Road Contractor, Shiva Granites.</p>
                   
                
                
            
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