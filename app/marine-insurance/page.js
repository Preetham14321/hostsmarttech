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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Marine Insurance">
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
                                <img src="assets/images/services/marine.jpg" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Marine Insurance</h3>
                            <p className="insurance-details__text-2">Any manufacturing and trading business will have raw materials and products. These items need to be moved from suppliers premises (within India or Outside India) to the manufacturing locations, sub contractor premises and the final products need to move from the manufacturing plant to the consumer directly or thro dealers or to central warehousing locations.
                            <br/>

When such transportation happens by any mode of transportation, there can be exposures which can result in damage to the goods or loss or damage to the people in the surroundings.
<br/>
Such risks are covered by the Marine Transit Insurance policies and marine Liability Insurance polices
<br/>
SmartTech Experts can asses the risk exposure to any business from the Marine transit perspective and device Custom made solutions to handle the same..</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h3 className="insurance-details__points-title">Our Goals</h3>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Aliquam accumsan et ante id</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Lorem ipsum dolor sit dgdr</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Maecenas varius tortor</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h3>The Challenges</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Maecenas varius
                                        tortor
                                        nibh, sit amet tempor<br/> finibus et. Aenean eu enim justo. Vestibulum</p>
                                </div>
                            </div>
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What is marine insurance? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Marine insurance provides coverage for loss or damage to ships, cargo, terminals, and any 
transport or cargo by which property is transferred, acquired, or held. It protects against 
mariƟme perils</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What types of marine insurance are available in India? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p> Hull Insurance: Covers physical damage to ships or vessels. 
 Cargo Insurance: Covers loss or damage to cargo being transported by sea. 
 Liability Insurance: Covers legal liabiliƟes arising from marine operaƟons, such as 
polluƟon or damage to third-party property. 
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What documents are needed for obtaining marine insurance? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Typically, required documents may include: 
 Shipping invoices 
 Bill of lading 
 Survey reports (if applicable) 
 Packing lists 
 Details of the voyage </p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What is the duraƟon of a marine insurance policy?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Marine insurance policies can be for a specific voyage, for a specified period, or on an open 
policy basis covering mulƟple shipments.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Can marine insurance cover inland transit?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, many marine insurance policies can include coverage for inland transit, oŌen referred to as 
"inland marine insurance." .</p>
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
                                        <Link href="Marine-insurance">Marine Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="health-insurance">Health Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="car-insurance">Car Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="home-insurance">Home Insurance<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="family-insurance">Family Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="business-insurance">Buisness Insurance<span
                                                className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="insurance-details__need-help">
                                <div className="insurance-details__need-help-bg"
                                    style={{ backgroundImage: 'url(assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }} >
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