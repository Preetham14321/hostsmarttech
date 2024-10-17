'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}




export default function Brand() {
    return (
        <>
        <div className="container"  style={{
            marginBottom:"10em",
            marginTop:"10em"
        }} >
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
        {/* Brand One Start */}
        <section className="brand-container">
       
            <div className="container">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper -wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div  style={{
                                display:"flex",
                                width:"100%",
                                flexDirection:"column",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"50px"
                            }} >

                            <img src="assets/images/brand/Partners/chola.png" alt="partner"
                            style={{
                                width:"200px",
                            }}
                            
                            />
                            <img src="assets/images/brand/Partners/rsa.png" alt="partner"
                            style={{
                                width:"200px",
                            }}
                            
                            />
                            <img src="assets/images/brand/Partners/magda.png" alt="partner"
                            style={{
                                width:"200px",
                            }}
                            
                            />
                            <img src="assets/images/brand/Partners/shriram.png" alt="partner"
                            style={{
                                width:"200px",
                            }}
                            
                            />
                            <img src="assets/images/brand/Partners/partner21.png" alt="partner"
                            style={{
                                width:"200px",
                            }}
                            
                            />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div style={{
                                display:"flex",
                                width:"100%",
                                flexDirection:"column",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"50px"
                            }}>

                            <img src="assets/images/brand/Partners/oriental.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/raheja.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/reliance.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/icici.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/nia.png" alt="partner"
                              style={{
                                width:"200px",
                                marginTop:"20px"
                            }}
                            />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        <div style={{
                                display:"flex",
                                width:"100%",
                                flexDirection:"column",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"50px"
                            }}>
                            <img src="assets/images/brand/Partners/digit.png" alt="partner"
                            
                            style={{
                                width:"140px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/sbi.png" alt="partner"
                            
                            style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/hdfc.png" alt="partner"
                            
                            style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/india.png" alt="partner"
                            
                            style={{
                                width:"55px",
                                margin:"auto"
                            }}
                            />
                            <img src="assets/images/brand/Partners/future.png" alt="partner"
                            
                            style={{
                                width:"200px",
                            }}
                            />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        <div style={{
                                display:"flex",
                                width:"100%",
                                flexDirection:"column",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"50px"
                            }}>
                            <img src="assets/images/brand/Partners/Partner22.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            
                            <img src="assets/images/brand/Partners/Partner15.png" alt="partner"
                              style={{
                                width:"200px",
                            }}
                            />
                            <img src="assets/images/brand/Partners/Partner16.svg" alt="partner"
                              style={{
                                width:"120px",
                                height:"50px"

                            }}
                            />
                             <img src="assets/images/brand/Partners/Partner17.png" alt="partner"
                            
                            style={{
                                width:"200px",
                            }}
                            />
                             <img src="assets/images/brand/Partners/niva.png" alt="partner"
                            
                            style={{
                                width:"160px",
                                height:"100px",
                                marginTop:"20px"
                            }}
                            />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        <div style={{
                                display:"flex",
                                width:"100%",
                                flexDirection:"column",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"50px"
                            }}>
                            <img src="assets/images/brand/Partners/Partner18.png" alt="partner"
                            
                            style={{
                                width:"150px",
                                margin:"auto"

                            }}
                            />
                            <img src="assets/images/brand/Partners/Partner19.png" alt="partner"
                            
                            style={{
                                width:"100px",
                                margin:"auto"

                            }}
                            />
                            <img src="assets/images/brand/Partners/Partner20.jpg" alt="partner"
                            
                            style={{
                                width:"150px",
                                margin:"auto"

                            }}
                            />
                            <img src="assets/images/brand/Partners/Partner25.jpeg" alt="partner"
                            
                            style={{
                                width:"200px",
                            }}
                            />
                            {/* <img src="assets/images/brand/Partners/ui.jpg" alt="partner"
                            
                            style={{
                                width:"150px",
                                height:"100px"
                            }}
                            /> */}
                            </div>
                        </SwiperSlide>
                        
                         
                    </div>
                </Swiper>
            </div>
        </section>
                </Swiper>
        </div>
      
        {/* Brand One End */}
        </>
    )
}
