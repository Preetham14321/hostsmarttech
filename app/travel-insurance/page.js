'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Travel Insurance">
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h3 className="insurance-details__title-1">We Werve a Wide
                                <br/> Variety of Industries Insurance</h3>
                            <p className="insurance-details__text-1">We embrace holistic development and support for
                                employees with the aim of being a first-choice employer within our sectors. Through a
                                unique combination of engineering, construction and design disciplines and expertise.
                            </p>
                            <div className="insurance-details__img-1">
                                <img src="assets/images/services/travel.jpg" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Travel Insurance</h3>
                            <p className="insurance-details__text-2">People travelling across world for different purposes like business, leisure, education, employment etc. are going up. <br/>

The cost of treatment in the developed countries are very high and also some of the Hospitals and the Doctors will start the treatment only after ensuring that the patient is having proper Insurance protection. Here we would like clarify that the Health Insurance policies of the individuals availed in India will not come to the rescue.  <br/>

 To protect against the risk while traveling overseas can be protected Travel insurance. In Travel Insurance there are different products available with varying coverage terms. <br/>

We work with insurance companies across the country to provide suitable policies according to the specific needs of the Traveler. <br/>

The digital platform to be launched by SamrtTech will be of great support to the clients in this area.
</p>
                           
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What does a typical travel insurance policy cover? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                            <p>Coverage usually includes: 
   
 <ul>
    <li>

Medical expenses for emergencies 
    </li>
    <li>

Trip cancellation or interruption
    </li>
    <li>

 Loss or delay of baggage 
    </li>
    <li>


 Emergency evacuation
    </li>
    <li>

 Personal liability 
    </li>
    <li>

Accidental death or dismemberment 
    </li>
    </ul>                                              
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Is travel insurance mandatory for international travel</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>While not legally mandatory, many countries require proof of travel insurance for visa 
applications or entry. It's strongly recommended to ensure coverage for unexpected events.
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Can I buy travel insurance after starting my trip?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Generally, travel insurance should be purchased before your trip starts. Some insurers may offer 
limited coverage for emergencies occurring during the trip. </p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What should I do if I need medical assistance abroad?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Contact your insurance provider immediately. They can help you find medical facilities and may 
arrange direct billing with hospitals</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What is trip cancellation insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Trip cancellaƟon insurance reimburses you for non-refundable expenses if you need to cancel 
your trip for covered reasons, like illness or emergencies. </p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="insurance-details__right">
                            <div className="insurance-details__catagories">
                                <h3 className="insurance-details__catagories-title">Catagories</h3>
                                <ul className="insurance-details__catagories-list list-unstyled">
                                <li>
                                        <Link href="health-insurance">
Health Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li  className="active">
                                        <Link href="travel-insurance">Travel Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li  >
                                        <Link href="car-insurance">Car Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="home-insurance">Home Insurance<span className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="insurance-details__need-help">
                                <div className="insurance-details__need-help-bg"
                                     >
                                </div>
                                <h3 className="insurance-details__need-help-title">Need Any Types
                                    <br/> of Service
                                    <br/> from us</h3>
                                <div className="insurance-details__need-help-btn-box">
                                    <Link href="contact" className="insurance-details__need-help-btn thm-btn">FIND
                                        SOLUTION</Link>
                                </div>
                            </div>
                            <div className="insurance-details__contact">
                                <div className="insurance-details__contact-icon">
                                    <span className="icon-telephone-1"></span>
                                </div>
                                <div className="insurance-details__contact-content">
                                    <span>You can call anytime</span>
                                    <p>Free<Link href="tel:+917014987001">+91 7014987001</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Insurance Details End */}

            </Layout>
        </>
    )
}