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
SmartTech Employee benefit experts will support the business on this.</p>
                           
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>Are employee benefits insurance premiums paid by the employer, employee, or both? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Typically, employers cover a significant portion of the premiums for health insurance, while 
employees may contribute through payroll deductions. The specific arrangement can vary by 
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
and may have different coverage options and costs.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What are wellness programs? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Wellness programs are initiatives offered by employers to promote health and well-being 
among employees, oŌen including health screenings, fitness programs, and incentives for 
healthy behaviors. 
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What are the tax implications of employee benefits insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Many employee benefits, such as health insurance premiums paid by employers, are tax deductible for the employer. For employees, premiums are oŌen deducted from pre-tax 
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
                                                <p>Typically, employees of an organization are covered. Some policies may also include family 
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
                                <li>
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
                                    <li className="active">
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