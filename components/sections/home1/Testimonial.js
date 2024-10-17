'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


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


export default function Testimonial() {
    return (
        <>

     {/* Testimonial One Start  */}
        <section className="testimonial-one">
            <div className="testimonial-one__shape-1 img-bounce">
                <img src="assets/images/shapes/testimonial-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR CLIENT AWESOME RIVEWS</p>
                    </div>
                    <h2 className="section-title__title">Why Customers Love to
                        <br/> Buy Policies With Us</h2>
                </div>
                <div className="testimonial-one__bottom">
                
                    <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""
                                     style={{
                                        filter:"hue-rotate(120deg)"
                                    }}
                                    />
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Congratulations for your new venture of opening SmartTech Insurance Brokers LLP. I am sure you will certainly mark a distinction in the market by introducing innovation and bringing in unique solutions *

*I enjoyed working with you at Tata AIG Insurance Co Ltd and I'm sure your drive and dedication will make this insurance Broking business a success</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/test1.png" alt=""  style={{
                    width:"65px",
                    height:"65px"
                }}/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Kaushal Kumar Mishra</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Retd CEO Tata AIG General</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""
                                     style={{
                                        filter:"hue-rotate(120deg)"
                                    }}
                                    />
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text"> I have known A Jeganathan since his time with New India Assurance and have always been impressed by his professionalism and client focus. Now, with the launch of SmartTech Insurance Brokers LLP, I’m confident his sharp business acumen will ensure its success. Wishing him all the best in this new venture! </p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/test2.png" alt=""  style={{
                    width:"65px",
                    height:"65px"
                }}/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Mr A V Muralidharan </Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Retd CEO ECGC</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""
                                     style={{
                                        filter:"hue-rotate(120deg)"
                                    }}
                                    />
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Dear Jegan,

I’m thrilled to hear about your new broking venture and wish you great success. I’m confident that your high standards will elevate the market’s respect for brokers. I fondly remember our time at New India Assurance and the innovative practices you introduced. Your private sector experience will no doubt add value to this new chapter.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/test3.png" alt=""  style={{
                    width:"65px",
                    height:"65px"
                }}/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">P Senthil Kumar</Link></h3>
                                    <p className="testimonial-one__client-sub-title">RETD GM New India</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                 
                    
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Testimonial One End  */}

            
        </>
    )
}
