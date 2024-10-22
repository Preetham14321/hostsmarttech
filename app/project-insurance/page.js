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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Insurance">
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
                                <img src="assets/images/services/project.png" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Project Insurance</h3>
                            <p className="insurance-details__text-2">Any major project activity like construction of Civil Engineering projects, Erection of machinery involves risks in transpiration of machinery from the machinery manufacturer to the project site, risks in storage of material at the project site, risks during civil construction activity and machinery installation work, testing of the machinery, and during the visit to the project site by the contractors as part of maintenance contract, will have the risks at each stage.
                            <br/>
Also there is risk to contractors, employees working in the project site, to the surrounding property in the project site, the third part property near the project site and liability exposure to the third parties visiting site or living nearby because of the activities in the project site is there.
<br/>
In addition if there is delay in the project completion from schedule timelines, because of the delay in the equipment arrival at the project sit or because of any unforeseen event at the project site during the erection and test activities the project implementation may be delayed. This will result in financial loss to the promoters. Such risk can be covered by the DSU and the Advance Loss of profit policies. <br/>

The risks in different projects like power plant, metro project, pipe line lying, are different.
<br/>
Experts in SmartTech are familiar with such exposures and will be able provide unique insurance solution for each of the project.</p>
                         
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>Who needs EAR insurance? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>EAR insurance is essential for businesses that own or operate construction, industrial, or heavy 
machinery, including contractors, builders, and equipment rental companies. </p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Who is required to have Workers' CompensaƟon insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Most employers are required to carry WC insurance, especially those with a certain number of 
employees, as mandated by state or national laws.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Who needs CAR insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>CAR insurance is essential for contractors, project owners, and any stakeholders involved in 
large construction projects, including builders, subcontractors, and suppliers.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What does project insurance typically cover? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Project insurance usually covers:
                                                    <ul>
 <li>Physical damage to the construction site and materials</li>
 <li> Third-party property damage </li>
 <li> Bodily injury to workers or third parties</li>
 <li> Delay-related costs due to project disruptions</li>
</ul> 

</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>Who needs project insurance in India? </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Project insurance is essential for contractors, project owners, subcontractors, and any 
stakeholders involved in large construction or infrastructure projects.</p>
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
                                    <li className="active">
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