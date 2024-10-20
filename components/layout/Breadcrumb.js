import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.png)' ,
                // width:"20e",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                // width:"80%",
                // objectFit:"fill",
                opacity:"0.7",
                margin:"20px"
            
            
            }} sty >
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{breadcrumbTitle}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span> - </span></li>
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
