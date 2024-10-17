'use client'
import CounterUp from "@/components/elements/CounterUp"
import BrandSlider from "@/components/slider/BrandSlider"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}



export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company">
        {/* Feature One Start  */}
        <section className="feature-one">
            <div className="container">
             
            </div>
        </section>
        {/* Feature One End  */}

        {/* About Three Start  */}
        <section className="about-three about-six">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-three__left">
                            <div className="about-three__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-three__img">
                                <img src="assets/images/about/about1.png" alt="" style={{
                                        width:"270px",
                                        height:"314px"
                                    }} />
                                </div>
                                <div className="about-three__img-2">
                                <img src="assets/images/about/about3.png" alt="" style={{
                                        width:"270px",
                                        height:"279px",
                                        objectFit:"cover"
                                    }} />
                                </div>
                                <div className="about-three__img-3">
                                    <img src="assets/images/about/about2.png" alt="" style={{
                                        width:"270px",
                                        height:"490px",
                                        objectFit:"cover"
                                    }} />
                                </div>
                                <div className="about-three__shape-1">
                                    <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">KNOW ABOUT SMARTTECH</p>
                                </div>
                                <h2 className="section-title__title">ABOUT US</h2>
                            </div>
                            <p className="about-three__text">SmartTech Insurance Brokers LLP is a combination of technology and insurance expertise that is transforming the way Insurance business operates, collaborate and transact with the customers, insurers, regulators and other stakeholders. <br/>

 
At SmartTech Insurance Brokers LLP we personalise and customise insurance products for our customers by understanding their risks and need.</p>
                            <div className="about-three__award-box">
                                <div className="icon">
                                    <span className="icon-trophy"></span>
                                </div>
                                <div className="content">
                                    <h3>
VISION, MISSION & VALUES</h3>
                                    <p><b>Our Vision – </b> Securing Customers Risks requirements by providing International standard insurance solutions and be a trusted partner to all our stakeholders.<br/><br/>

<b>Our Mission – </b>To be India’s trusted insurance risk advisor by delivering innovative, relevant risk and human capital solutions; growing sustainable partnerships and making a meaningful contribution to the communities we serve.<br/><br/>

<b>Our Values –</b> Our values are to HELP our customers to secure their business. These are the principles that guide our engagements and relationships with customers, partners and shareholders
</p>
                                </div>
                            </div>
                            {/* <div className="about-three__progress">
                                <h4 className="about-three__progress-title">Service Expereince</h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="90%" style={{width: '90%'}}>
                                        <div className="count-text">90%</div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="about-three__btn-and-client">
                                <div className="about-three__btn-box">
                                    <Link href="about" className="about-three__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="about-three__client-img">
                                    <img src="assets/images/resources/about-three-client-img.jpg" alt=""/>
                                    <div className="about-three__client-signature">
                                        <img src="assets/images/shapes/about-three-client-signature.png" alt=""/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Three End  */}

         {/* Team Two Start  */}
         <section className="team-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR TEAM MEMBER</p>
                    </div>
                    <h2 className="section-title__title">Our Talented Team
                        <br/> Member Behind SmartTech</h2>
                </div>
                <div className="row">
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team1.png" alt=""
                                    
                                    style={{
                                        width:"370px",
                                        height:"370px"
                                    }}/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Jeganathan Annamalai</Link></h3>
                                <p className="team-two__sub-title">CEO of Company</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team2.png" alt=""
                                     style={{
                                        width:"370px",
                                        height:"370px"
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details2">Kamod Kumar Dubey</Link></h3>
                                <p className="team-two__sub-title">Director -Coprorate solutions Group</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details2"><span className="icon-share"></span></Link>
                                    </div>
                                    {/* <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram-1"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team3.png" alt="" style={{
                                        width:"370px",
                                        height:"370px"
                                    }}/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details3">Dipanjan Dutta</Link></h3>
                                <p className="team-two__sub-title">Advisor</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details3"><span className="icon-share"></span></Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team4.png" alt="" style={{
                                        width:"370px",
                                        height:"370px",
                                        objectFit:"fill"
                                    }}/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details4">Rajan Ramaswamy</Link></h3>
                                <p className="team-two__sub-title">Senior Commercial underwriter</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details4"><span className="icon-share"></span></Link>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                </div>
            </div>
        </section>
        {/* Team Two End  */}

        {/* Why Choose Three Start */}
        <section className="why-choose-three why-choose-five">
            <div className="why-choose-three__shape-1">
                <img src="assets/images/shapes/why-choose-five-shape-1.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-2 img-bounce">
                <img src="assets/images/shapes/why-choose-five-shape-2.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-3 float-bob-x">
                <img src="assets/images/shapes/why-choose-five-shape-3.png" alt=""  style={{
                    filter:"hue-rotate(320deg)"
                }}/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">WHY CHOOSE SMARTTECH</p>
                    </div>
                    <h2 className="section-title__title">What Makes Us
                        <br/> Different From Others</h2>
                </div>
                <div className="row">
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Honesty</Link></h3>
                                <p>We value being honest, transparent and reliable in all our relationships and expect the same of all our stakeholders</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className=" icon-cashback"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Expertise</Link></h3>
                                <p>We leverage global knowledge and local understanding to deliver tailored, innovative, and sustainable solutions.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-bar-chart"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Loyalty</Link></h3>
                                <p>Being loyal to our customers in our biz is our utmst important thing. The art of making sure customers are happy and satisfied.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Client-focused</Link></h3>
                                <p>We fulfil a predictable requirements of our clients. We go extra mile in ensuring our customers satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                </div>
            </div>
        </section>
        {/* Why Choose Three End */}

     
 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

     

       

                
            </Layout>
        </>
    )
}


