
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-1">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                            </div>
                            <div className="main-slider__img">
                                <img src="assets/images/backgrounds/herobg.png" alt="" style={{

                                }} />
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">RELIABLE. pERSONABLE. fAST</p>
                                            </div>
                                            <h2 className="section-title__title" style={{
                                                color:'#fff'
                                            }}>Protect your Family <br/> First with SmartTech</h2>
                                        </div>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <a href="https://www.policymart.co.in/"  target="_blank" className="main-slider__btn thm-btn">get started</a>
                                        </div>
                                        <div className="main-slider__ratting" style={{
                                            paddingTop:"-100px"
                                        }}>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span style={{
                                                color:"#fff"
                                            }}>Rated 4.8/5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                  
                    
                </Swiper>

            </section>
        </>
    )
}
