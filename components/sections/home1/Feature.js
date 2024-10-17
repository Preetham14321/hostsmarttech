
import Link from "next/link"
export default function Feature() {
    return (
        <>


            <section className="feature-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)',
                                filter:"hue-rotate(100deg)"
                                
                                
                                }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">We Provide</p>
                                <h3 className="feature-one__title"><Link href="about">Competitive prices</Link></h3>
                                <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInUp">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                          <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)',
                                filter:"hue-rotate(100deg)"
                                
                                
                                }} >   </div>
                            <div className="feature-one__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">We Provide</p>
                                <h3 className="feature-one__title"><Link href="about">Claims support</Link></h3>
                                <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                           <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)',
                                filter:"hue-rotate(100deg)"
                                
                                
                                }} >  </div>
                            <div className="feature-one__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">We Provide</p>
                                <h3 className="feature-one__title"><Link href="about">Best coverage</Link></h3>
                                <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
