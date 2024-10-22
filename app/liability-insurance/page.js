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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Liability Insurance">
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
                                <img src="assets/images/services/liability.png" alt=""/>
                            </div>
                            <h3 className="insurance-details__title-2">Liability Insurance</h3>
                            <p className="insurance-details__text-2">Any Commercial or business activity will be having its own risks, which can result in a liability exposure. Any business will supply their manufactured products to the client or provide services to their client from their expertise. In case deficiency in the product or the service rendered to the client and that results in a quantifiable loss to the client, it can claimed as liability against the provider of the product or service.  <br/>

If there is deficiency the product supplied it can result in product liability exposure and if there is deficiency the services provided to the client it can result in professional Liability claims.  <br/>

If the commercial activity is resulting pollution or chemical spillage or gas leakage can result in problem to the people living in the surrounding area. This is called Public liability
<br/>
Like this any business activity will have liability exposures. The same can be suitably managed by the smartTech experts through insurance solutions.</p>
                          
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What does liability insurance cover?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Liability insurance typically covers: 
                                                    <ul>

                                                    <li>Legal defense costs </li>
                                                    <li>SeƩlements or judgments against the insured</li>
                                                    <li>Medical expenses for injured parties</li>
                                                    <li>Damage to third-party property </li>
</ul>

</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What is the difference between liability insurance and property insurance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p><span style={{
                                                    fontWeight:"600"
                                                }}>Liability Insurance:</span> Covers claims related to harm or damage caused to others. 
<span style={{
                                                    fontWeight:"600"
                                                }}> Property Insurance: </span> Covers damage to your own property. 
</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Can liability insurance cover legal fees? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, liability insurance generally covers legal fees associated with defending against claims, up to 
the policy limits.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Are there common exclusions in liability insurance? 
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, common exclusions may include:
                                                    <ul>
                                                    <li>Intentional acts or criminal activities</li>
                                                    <li>Employee injuries (typically covered by workers' compensation)</li>
                                                    <li>Damage to the insured's own property </li>
                                                    <li> Claims arising from specific professional services (which may require additional 
coverage)</li>
</ul> 

</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>Are there limits to liability insurance? 

</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, most liability policies have coverage limits, which is the maximum amount the insurer will 
pay for a claim.</p>
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
                                    <li className="active">
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