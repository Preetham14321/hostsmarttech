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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Car Insurance">
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
                                <img src="assets/images/services/insurance-details-img-2.png" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Motor Insurance</h3>
                            <p className="insurance-details__text-2"> As per the Indian motor vehicles act any vehicle plying on the road should have a valid third party Liability insurance. In addition it is suggested to have own damage cover to protect loss to the vehicle by any accident
                            <br/>

In India after privatization of Insurance Industry, many private companies have ventured into Insurance business. With the competition grow, companies have become innovative and developed Vehicle insurance with lot of variants with many add on covers. <br/>

SmartTech Insurance brokers can help the client in identifying and selecting of a suitable Insurance cover for the motor vehicles. <br/>

SmartTech is developing an online portal to help the individuals in getting the policy immediately and processing claims on line with ease.</p>
                           


                            {/* Faq Section comes here */}
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What is a No Claim Bonus (NCB)?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>NCB is a discount on your premium for not making any claims during the policy term. It can lead to significant savings on your renewal premium.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What types of car insurance are available?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Third-Party Liability Insurance: Mandatory by law, it covers damages to a third party in an accident. <br/>
Comprehensive Insurance: Covers damages to your own vehicle and third-party liabilities, including theft and natural disasters.
Own Damage (OD) Insurance: Covers damages to your vehicle due to accidents, theft, or vandalism.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Can I transfer my no-claim bonus to another insurer?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, you can transfer your NCB to a new insurer when you switch policies, as long as you don’t make a claim in the previous policy term.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>What is cashless car insurance?

</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Cashless car insurance allows you to get your vehicle repaired at a network garage without paying upfront. The insurer directly settles the bill with the garage..</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Does car insurance cover natural disasters?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Comprehensive car insurance typically covers damages from natural disasters like floods, earthquakes, and storms.</p>
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
                                    <li>
                                        <Link href="travel-insurance">Travel Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li className="active">
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