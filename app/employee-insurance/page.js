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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Employee benefit policies ">
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
                                <img src="assets/images/services/employee.png" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Employee benefit policies </h3>
                            <p className="insurance-details__text-2">Any manufacturing or commercial activity need to the support from their employees. When people are involved they exposed to various risks.   <br/> 

In addition to have good employee relationship within the organization, business needs to provide employees various welfare schemes. Some are mandatory as per the Government acts and some voluntary by considering the employees as partner in their business. Some of the policies for employee welfare are personal accident Insurance, Group Term Life Insurance, Health Insurance, super Annuation Insurance etc.
<br/> 
SmartTech Employee benefit experts will support the business on this..</p>
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
                                            <h4>Are employee benefits insurance premiums paid by the employer, employee, or both? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Typically, employers cover a significant porƟon of the premiums for health insurance, while 
employees may contribute through payroll deducƟons. The specific arrangement can vary by 
employer</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What is the difference between group insurance and individual insurance? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Group insurance is a policy provided by an employer to cover a group of employees, usually at 
lower premiums than individual insurance. Individual insurance is purchased by an individual 
and may have different coverage opƟons and costs.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What are wellness programs? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Wellness programs are iniƟaƟves offered by employers to promote health and well-being 
among employees, oŌen including health screenings, fitness programs, and incenƟves for 
healthy behaviors. 
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What are the tax implicaƟons of employee benefits insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Many employee benefits, such as health insurance premiums paid by employers, are taxdeducƟble for the employer. For employees, premiums are oŌen deducted from pre-tax 
income, reducing their taxable income. 
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Who can be covered under a Group Medical and Group Personal Accident Policy?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Typically, employees of an organizaƟon are covered. Some policies may also include family 
members. 
</p>
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
                                        <Link href="Employee benefit policies-insurance">Employee benefit policies <span className="icon-next"></span></Link>
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