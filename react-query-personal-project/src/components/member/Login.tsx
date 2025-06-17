import {Link} from "react-router-dom";
import {Fragment, useEffect, useRef, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import {Product} from "../../types";
import apiClient from "../../http-commons";
import PagePrint from "../commons/PagePrint";
import { useNavigate } from 'react-router-dom';
interface ProductListProps {
    list: Product[];
    totalpage:number;
    curpage:number;
    startPage:number;
    endPage:number;
}
const linkStyle = {
    color:"black",
    textDecoration: "none",
    fontSize: "15px",
    display: "block",
};

function Login(){
    const [login, setLogin] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const idRef=useRef<HTMLInputElement>(null)
    const pwdRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
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
                window.location.href = "/";
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
            console.log("trueeeeee")
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
            <div className={"container"}>
                <div style={styles.container}>
                    <h2 className={""} style={styles.title}>Login</h2>
                    <div  style={styles.form}>
                        <input
                            type="text"
                            placeholder="아이디"
                            value={id}
                            ref={idRef}
                            onChange={(e:any)=>setId(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={pwd}
                            ref={pwdRef}
                            onChange={(e:any)=>setPwd(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <button onClick={memberLogin} style={styles.button}>로그인</button>
                    </div>
                </div>
            </div>
            );
        </Fragment>
    )
}

export default Login;

// 간단한 인라인 스타일
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: '400px',
        margin: '100px auto',
        padding: '30px',
        border: '1px solid #d8bfae',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#f9f5f1',
    },
    title: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};