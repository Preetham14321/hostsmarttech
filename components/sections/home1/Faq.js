'use client'
import { useState } from 'react'
 
export default function Faq() {
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

            {/* FAQ One Start  */}
            <section className="faq-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="faq-one__left">
                                    <div className="faq-one__shape-1 float-bob-x">
                                        <img src="assets/images/shapes/faq-one-shape-1.png" alt="" 
                                        style={{
                                            filter:"hue-rotate(100deg)"
                                        }}
                                        />
                                    </div>
                                    <div className="faq-one__img-box">
                                        <div className="faq-one__img">
                                        <img src="assets/images/gallery/faq.png" alt="" style={{
                                            width:"560px",
                                            borderRadius:"100px"
                                        }} />

                                        </div>
                                       
                                        <div className="faq-one__policy">
                                            <div className="faq-one__policy-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__policy-text">Save up to 50% in
                                                <br/> Our all Policy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="faq-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">PEOPLE ASK QUESTION</p>
                                        </div>
                                        <h2 className="section-title__title">Offering Great
                                            <br/> Insurance Solutions</h2>
                                    </div>
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>How can I purchase an Insurance Policy?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>You can use our online platform to compare and purchase car and bike insurance plans. It is a 3-step process. Provide vehicle information. Compare quotes and purchase policy by providing the required information and making payment. While we are working on issuing the term and health insurance policies online, you can contact us for any health or term insurance requirements for you and your family members.If you have any questions about the process, you can call or chat with us on WhatsApp</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>Do you provide any claims assistance?</h4>
                                            </div>
                                            <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                                <div className="inner">
                                                    <p>We will help you in filing a claim with the insurance company, guide you on the documents required, and work with you till the claim is settled by the insurance company.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Will you be able to help in renewing an expired policy?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Yes, you can contact our insurance consultants to get your policy renewed. We will require the previous year's policy and more details to contact insurance companies.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>What happens if there are any issues while purchasing a policy online?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Click on the contact us where you can contact us through WhatsApp or give us a call and we can check the status and issue the policy immediately.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* FAQ One End  */}
            
        </>
    )
}
