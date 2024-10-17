

export default function WhyChooseUs() {
    return (
        <>

     {/* Why Choose One Start  */}
        <section className="why-choose-one" style={{
                                        marginTop:"80px"

        }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img">
                                    <img src="assets/images/about/honest.png" alt="" style={{
                                        width: "440px",
                                        height: "500px",

                                    }}/>
                                </div>
                                <div className="why-choose-one__img-2">
                                    <img src="assets/images/about/expertise.png" alt=""  
                                    style={{
                                        width: "274px",
                                        height: "352px",
                                        marginTop:"20px"
                                        
                                    }}/>
                                    <div className="why-choose-one__experience-box">
                                        <div className="why-choose-one__count count-box">
                                            <h3 className="count-text">25</h3>
                                            
                                        </div>
                                        <p>YEARS
                                            <br/> WORKING
                                            <br/> EXPERIENCE</p>
                                    </div>
                                </div>
                                <div className="why-choose-one__img-3">
                                    <img src="assets/images/about/secure.png" alt=""
                                     style={{
                                        width: "272px",
                                        marginTop:"-70px"
                                        
                                        
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">WHY CHOOSE SMARTTECH</p>
                                </div>
                                <h2 className="section-title__title">What Makes Us
                                    <br/> Different From Others</h2>
                            </div>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-cashback"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Honesty</h3>
                                        <p>We value being honest, transparent and reliable in all our relationships and expect the same of all our stakeholders</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-save-money-1 "></span>
                                    </div>
                                    <div className="content">
                                        <h3>Expertise</h3>
                                        <p>We use global knowledge and local understanding to provide superior and locally relevant solutions.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-bar-chart"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Loyalty</h3>
                                        <p>Being loyal to our customers in our biz is our utmst important thing. The art of making sure customers are happy and satisfied.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End  */}
           
        </>
    )
}
