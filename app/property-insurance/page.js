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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Insurance">
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
                                <img src="assets/images/services/property.png" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Property Insurance</h3>
                            <p className="insurance-details__text-2">After the project is completed and put to use, the project should generate the expected revenue and profits.
                    <br/>
At this stage there is various risk exposures like Fire, natural perils like Earth quake, Cyclone, flood etc. for the physical assets in the plant.  In addition there can be issues because the machinery and equipment being used breaks down resulting in loss.    <br/>

The above exposures can result in financial loss because of the damage to the physical assets or the business resulting in loss of revenue and in the expect profit.    <br/>

These risks need to be properly assessed and insurance solution to be suggested managing it in a cost effective manner.
<br/>
Our experts in SmartTech are well versed in this and can find unique solutions for Industry specific exposures and work out suitable Insurance solutions.</p>
                          
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What does fire insurance cover? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Fire insurance typically covers: 
                                                    <ul>

<li>
    Damage to buildings and structures caused by fire </li>
    <li>Loss of personal property or business assets due to fire </li>
    <li>Additional expenses incurred during recovery (like temporary relocation)</li>
    <li>Damage from related risks, such as smoke, water used for extinguishing the fire, and explosions  </li>
</ul>
 </p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Is fire insurance mandatory in India?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>While not legally required, fire insurance is highly recommended for homeowners and 
businesses to protect against significant financial losses.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What is the difference between reinstatement value and market value?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p><span style={{
                                                    fontWeight:"600"
                                                }}>Reinstatement Value:</span> The cost to replace or repair the property with similar materials, 
without considering depreciation. <br/>
<span style={{
                                                    fontWeight:"600"
                                                }}>  Market Value:</span> The current price at which the property could be sold, accounting for 
depreciation</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What steps can I take to reduce my fire insurance premium? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Implementing fire safety measures (such as smoke alarms, fire extinguishers, and sprinkler 
systems) and maintaining the property can help lower premiums</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>How often should I review my fire insurance policy?
 </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It’s advisable to review your policy annually or whenever significant changes occur, such as 
renovations or increases in property value</p>
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
                                <li className="active">
                                        <Link href="property-insurance">Property  Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="health-insurance">Health Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li >
                                        <Link href="Project-insurance">Project Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="marine-insurance">Marine  Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="liability-insurance">Liability Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="employee-insurance">Employee Benifit Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="crime-insurance">Crime Insurance<span
                                                className="icon-next"></span></Link>
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