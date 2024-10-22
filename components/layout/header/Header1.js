import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            
        <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
            {/* <div className="main-header__top">
                <div className="main-header__top-inner">
                    <ul className="list-unstyled main-header__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-maps-and-flags"></i>
                            </div>
                            <div className="text">
                                <p>  3rd main road, Annanagar Chennai 600040, TamilNadu</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><Link href="mailto:info@smarttechinsurance.co.in">info@smarttechinsurance.co.in</Link></p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-header__top-social-box">
                        <p className="main-header__top-social-title">Follow us:</p>
                        <div className="main-header__top-social">
                            <Link href="https://twitter.com/SmartTechinsure"><i className="fab fa-twitter"></i></Link>
                            <Link href="https://www.facebook.com/SmartTechInsurance"><i className="fab fa-facebook"></i></Link>
                            <Link href="https://www.youtube.com/channel/UCRcol2Zbf3uMmk5SG3azAGQ"><i className="fab fa-youtube"></i></Link>
                            <Link href="https://www.linkedin.com/company/smarttech-insurance/"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                            
                                <Link href="/"><img src="assets/images/resources/herologo.png" alt="brand logo"  style={{
                                        width:"180px",
                                    }} /></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu__right">
                            
                            {/* <div className="main-menu__cart">
                                <Link href="products"><span className="icon-cart"></span></Link>
                            </div> */}
                            <div className="main-menu__btn-box">
                           
                                <a  href="https://www.policymart.co.in/"  target="_blank"   className="main-menu__btn thm-btn">GET A QUOTE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/herologo.png" alt=""  style={{
                                        width:"180px"
                                    }} /></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                               
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="main-menu__btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
