import {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import apiClient from "../../http-commons";
// jsx => javascript+xml => createElement
function Header() {
    const [login, setLogin] = useState<boolean>(false);

    useEffect(() => {
        const id = window.sessionStorage.getItem('id');
        if (id) {
            setLogin(true);
        }
    }, []);

    const memberLogout=():void =>{
        window.sessionStorage.clear(); // session.invalidate() => removeItem("id")
        setLogin(false)
        window.location.reload();
    }
    return (
        <Fragment>
            <div className="top_header_area"
                 style={{
                     position:"absolute"
                 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-4" style={{"zIndex": "999"}}>

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
                        {/*<div className="col-7 col-sm-6">*/}
                        {/*    <div className="signup-search-area d-flex align-items-center justify-content-end">*/}

                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="col-8 mt-2">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <Link to="/cosmetics/list" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Cosmetics</Link>
                                    </div>
                                    <div className="login">
                                        <Link to="/board/list" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Community</Link>
                                    </div>



                                        {
                                            !login?(
                                                <div className="register">
                                                    <Link to="/login/login" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Login</Link>
                                                </div>
                                            ):(
                                                <div className="register">
                                                    <Link to="#"  className={"login ol"} style={{"color":"white","fontSize":"25px"}} onClick={memberLogout}>Logout</Link>
                                                </div>
                                            )
                                        }
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