'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

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

    
const pospData = [
    {
      id: "1",
    //   emoji: PospEmj1,
      title: "Paperless Policy",
      subTitle: "All our processes are online, with no paperwork involved."
    },
    {
      id: "2",
    //   emoji: PospEmj2,
      title: "24*7 Support",
      subTitle: "We have a 24x7 support team, just for you."
    },
    {
      id: "3",
    //   emoji: PospEmj3,
      title: "Paperless Policy",
      subTitle:
        "No long procedures or tiring paperwork. We issue insurance policies instantly online, without any inconvenience."
    },
    {
      id: "4",
    //   emoji: PospEmj4,
      title: "Training Support",
      subTitle: "Self-Learning Module for Enhanced Product Learning"
    },
    {
      id: "5",
    //   emoji: PospEmj5,
      title: "Timely Commission",
      subTitle:
        "All our commissions are settled quickly. Your account will be credited with your commission every 15 days."
    },
    {
      id: "6",
    //   emoji: PospEmj6,
      title: "Get Certified",
      subTitle: "Get Training and Certification as per IRDAI norms"
    }
  ];

  const steps = [
    {
      id: "1",
      step: "STEP 1",
      content:
        "Sign up by filling our POSP form given above, and our team will get back to you with more details."
    },
    {
      id: "2",
      step: "STEP 2",
      content:
        "Submit your documents (educational certificates, ID proofs, etc.) so that we can verify them."
    },
    {
      id: "3",
      step: "STEP 3",
      content:
        "Take our 15-hour training. You can do this from the comfort of your home!"
    },
    {
      id: "4",
      step: "STEP 4",
      content: "Complete out prescribed POSP examination."
    },
    {
      id: "5",
      step: "STEP 5",
      content:
        "Sign the agreement with us and that’s it! You’ll be a certified POSP."
    }
  ];
  

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Careers">
        {/* Contact Page Start */}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <h3 className="contact-page__title">Become a POSP with
Policy Mart</h3>
                      
                        <div style={{
                            margin:'5px 0 5px 0'
                        }}>
                            
                            <div className="contact-page__contact-info">
                                <h4 className="" style={{
                                    paddingTop:"10px",
                                    lineHeight:"40px"
                                }} >A POSP (Point of Salesperson) is the name
given to an insurance agent who can sell
specific insurance products</h4>


                                {/* <img src="assets/images/services/pospSvg.svg" alt="posp" style={{
                                    margin:"20px",
                                    width:"15em"
                                }} /> */}
                                
                                
                                
                            </div>
                          
                          
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <div className=" ">
                                 <img src="assets/images/services/pospSvg.svg" alt="posp" style={{
                                    width:"20em",
                                    paddingLeft:"20px"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>


            <div>
                <div className="row">
                    <h2 style={{
                        textAlign:"center",
                        fontWeight:"700",
                        margin:" 20px 0 20px 0"
                    }} >Why become a POSP?</h2>
                    </div>


                    <div className="why_join_posp" style={{
  display: 'grid',
  gap: '20px',
  
  justifyContent: 'center',
}}>
  {pospData.map((item, key) => (

<div className=" " style={{
  display: 'flex',
  flexDirection:"column"
}} >
<div className=" wow fadeInRight" data-wow-delay="300ms">
<div className="why-choose-three__single "  style={{
  display: 'flex',
  flexDirection:"column",
  justifyItems:"center",
  height: '216px',
  justifyContent:"center",
  alignItems:"center",
}}>
    <div className="why-choose-three__icon">
    <img src={`assets/images/PospEmjs/PospEmj${item.id}.svg`} alt="" style={{
      fill:"#fff",
      filter: "hue-rotate(190deg)"
    }}/>
    </div>
    <div className="why-choose- three__content" style={{
      textAlign:"center",
    }}>
        <h3 style={{
      margin:"10px 0 10px 0"

        }}> {item.title }</h3>
        <p>{item.subTitle}</p>
    </div>
</div>
</div>
</div>
    // <div style={{
    //   backgroundColor: 'white',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '216px',
    // boxShadow:"1px 1px 1px 0",
    //   // boxShadow: '4px 4px 20px',
    //   margin: '20px 0',
    //   padding: '20px',
    //   borderRadius: '20px'
    // }}>
    //     <img src={`assets/images/PospEmjs/PospEmj${item.id}.svg`} alt=""/>

    // <h1 style={{
    //     fontSize: '24px',
    //     fontWeight: '600',
    //     textAlign: 'center',
    //     margin: '10px 0 10px 0',


    //   }}>{item.title}</h1>
    //   <h2 style={{
    //     fontSize: '16px',
    //     textAlign: 'center',
    //     width: '69%'
    //   }}>{item.subTitle}</h2>
    // </div>
  ))}
</div>
            </div>

            <div>
            <h2 style={{
                        textAlign:"center",
                        fontWeight:"700",
                        margin:" 40px 0 20px 0"
                    }} >How to become a POSP?</h2>

                    <div>


 
  {steps.map((item, key) => (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {/* 9b909178 */}
          <div style={{
            backgroundColor: "#be1e2d78",
            position: "absolute",
            width: "240px",
            padding: "12px",
            borderRadius: "10px",
            right:`${key%2!==0&&'82px'}`,
            left:`${key%2===0&&'82px'}`,
            // marginRight:"40px",

            // right:`${key===1||key===3&&'24px'}`,
            // margin:`${key===1||key===3&&'40px'}`,
            // left:`${(key!==1||key!==3)&&'24px'}`
            // [key === 1 || key === 3 ? right: "24px" : "left"]: "24px"
          }}>
            <h5 style={{ width: "",fontSize: "13px", textAlign: "start" }}>{item.content}</h5>
          </div>
          <div style={{
            backgroundColor: "#be1e2d", // replace with actual color
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <h5 style={{ color: "white",fontSize: "12px", fontWeight: "bold" }}>{item.step}</h5>
          </div>
        </div>
        <div style={{
          height: "56px",
          width: "24px",
          backgroundColor: "#be1e2d78",
          display: key === 4 ? "none" : "block"
        }}></div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "none"
      }}>
        <div style={{
          backgroundColor: "#be1e2d", // replace with actual color
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // right:`${key===1||key===3&&'24px'}`,
          // left:`${(key!==1||key!==3)&&'24px'}`
          // [key === 1 || key === 3 ? "marginLeft" : "marginRight"]: "auto"
        }}>
          <h5 style={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>{item.step}</h5>
        </div>
        <div style={{
          backgroundColor: "rgba(0, 167, 142, 0.1)",
          position: "absolute",
          width: "240px",
          padding: "12px",
          borderRadius: "10px",
          // [key === 1 || key === 3 ? "right" : "left"]: "24px"
        }}>
          <h5 style={{ width: "200px", fontSize: "12px" }}>{item.content}</h5>
        </div>
      </div>
    </>
  ))}
                    </div>


            </div>

            <div>
            <h2 style={{
                        textAlign:"center",
                        fontWeight:"700",
                        margin:" 70px 0 20px 0"
                    }} >Frequently Asked Questions</h2>

                        {/* Faq Section comes here */}
                        <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What exactly is POSP?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>PoSP stands for Point of Sales Person. A PoSP is essentially an insurance agent, who has the authority to sell insurance policies directly to consumers. This agent can sell a variety of insurance products, right from motor and health to business insurance. insurance.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What are the eligibility requirements to sell insurance on Policymart?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>You need to be at least 18 years old, with a minimum qualification of class 10 to be eligible to sell insurance on Policymart as a PoS agent.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What documents do I need to submit on the app?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>To register with us as a PoSP, you need to upload the below documents: Photo PAN card Address proof (driving license/passport/light bill) 10th/12th class marksheet</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>Do I have to undergo training before I can start selling policies?  

</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, you need to complete a basic 15-hour PoSP training as mandated by IRDAI. Post training, you need take the examination to certify as a PoSP. All the material required for the examination will be provided by us..</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Do I have to undergo training before selling policies?
</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, our team has insurance experts from various lines of business, retail or commercial. We can provide assistance based on your requirement.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
            </div>

                <div className="contact-page__bottom">
                    <div className="comment-form">
                        <h3 className="comment-one__title">JOIN AS POSP</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Your Name*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="email" placeholder="Your Email*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                    <input type="text" placeholder="Your Phone Number*" name="mobile"/>

                                    </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">

                                    <div className="comment-form__input-box">
                                    <input type="text" placeholder="Pincode*" name="pincode"/>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    {/* <div className="comment-form__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                    </div> */}
                                    <div className="comment-form__btn-box">
                                        <button type="submit" className="thm-btn comment-form__btn">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Page End */} 

            </Layout>
        </>
    )
}