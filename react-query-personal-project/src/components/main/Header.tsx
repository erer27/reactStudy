import {Fragment} from "react";
import {Link} from "react-router-dom";
// jsx => javascript+xml => createElement
function Header() {
    return (
        <Fragment>
            <div className="top_header_area"
                 style={{
                     position:"absolute"
                 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6" style={{"zIndex": "999"}}>

                            <div className="top_social_bar mt-3">
                                <Link to="/">
                                    <span className={"ol"}
                                          style={{"color":"white",
                                              "fontSize":"30px",
                                                }}>
                                        HOME
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-7 col-sm-6 mt-2">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <Link to="/cosmetics/list" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Cosmetics</Link>
                                    </div>
                                    <div className="login">
                                        <Link to="/board/list" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Community</Link>
                                    </div>
                                    <div className="register">
                                        <Link to="/news/list" className={"ol"} style={{"color":"white","fontSize":"25px"}}>News</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header;