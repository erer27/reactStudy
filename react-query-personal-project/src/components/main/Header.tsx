import {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import apiClient from "../../http-commons";
// jsx => javascript+xml => createElement
function Header() {
    const [login, setLogin] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const idRef=useRef<HTMLInputElement>(null)
    const pwdRef = useRef<HTMLInputElement>(null)
    // sessionStorage
    /*
         서버에서 session저장 안된다
         -------------------------  DB
         세션 저장 : sessionStorage.=setItem("키","값") > 서버로 id,pwd 전송 => 결과값
         세션 해제 : sessionStorage.clear()

         // 댓글

     */
    interface LoginData {
        msg: string;
        id: string;
        name: string;
    }
    // useQuery => 함수명 지정 : refetch:함수명
    // useMutation => mutate:loginOk (로그인 버튼 클릭)
    const {mutate:loginOk} = useMutation({
        mutationFn:async (data)=>{
            const res:AxiosResponse<LoginData>=await apiClient.get(`/member/login/${id}/${pwd}`);
            return res.data
        },
        onSuccess:(data:LoginData)=>{
            if(data.msg==='NOID')
            {
                alert("아이디가 존재하지 않습니다")
                setId('');
                setPwd('');
                idRef.current?.focus();
            }
            else if(data.msg==="NOPWD")
            {
                alert("비밀번호가 틀립니다")
                setPwd('')
                pwdRef.current?.focus();
            }
            else if(data.msg==="OK")
            {
                // 세션 저장 => 자바스크립트
                window.sessionStorage.setItem("id",data.id);
                // session.setAttribute()
                window.sessionStorage.setItem("name",data.name);
                setLogin(true)
                window.location.reload();
            }
        },
        onError:(error:AxiosError)=>{
            console.log("Login Error: ",error.message);
        }
    });
    ////////////////// 서버 연결
    // 로그인 여부에 따라 새로고침  ==> id!=null => 한번만 수행
    useEffect(() => {
        // getAttribute("id")
        if(sessionStorage.getItem("id"))
        {
            setLogin(true)
        }
    }, []);

    const memberLogin=():void =>{
        if(id.trim()==="")
        {
            idRef.current?.focus();
            return;
        }
        if(pwd.trim()==="")
        {
            pwdRef.current?.focus();
            return;
        }
        loginOk()
    }
    const memberLogout=():void =>{
        window.sessionStorage.clear(); // session.invalidate() => removeItem("id")
        setId('')
        setPwd('')
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
                                    <div className="login">
                                        <Link to="/chat/chat" className={"ol"} style={{"color":"white","fontSize":"25px"}}>Chat</Link>
                                    </div>


                                        {
                                            !login?(
                                                <div className="login ol" style={{"color":"white","fontSize":"25px"}}>
                                                    ID:<input type={"text"} size={10} className={"input-sm text-dark" }
                                                              onChange={(e:any)=>setId(e.target.value)}
                                                              ref={idRef}
                                                              value={id}
                                                />&nbsp;
                                                    PW:<input type={"password"} size={10} className={"input-sm text-dark"}
                                                              onChange={(e:any)=>setPwd(e.target.value)}
                                                              ref={pwdRef}
                                                              value={pwd}
                                                />&nbsp;
                                                    <button className={"btn-sm btn-primary"} onClick={memberLogin}>로그인</button>
                                                </div>
                                            ):(
                                                <div className="login">
                                                    {window.sessionStorage.getItem("name")}님 로그인중입니다&nbsp;
                                                    <button className={"btn-sm btn-primary"} onClick={memberLogout}>로그아웃</button>
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