import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState, useRef, Fragment, use} from "react";
import {boardUpdate,boardUpdateOk,boardReset} from "../../actions/boardActions";
import {useNavigate,useParams} from "react-router-dom";
// <unput type="" id , class > <unput type="" ref >
function BoardUpdate() {
    const {no}=useParams();
    const dispatch = useDispatch(); // action함수 호출
    const nav = useNavigate(); // 화면 이동 , redirect
    const nameRef = useRef(null); // 태그를 제어할때 사용
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const pwdRef = useRef(null);

    const [name, setName] = useState(""); // 데이터를 저장하는 능력이 있는 변수
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [pwd, setPwd] = useState("");
    ////////////////////
    useEffect(() => {
        dispatch(boardUpdate(no));//store에 저장
    },[no])

    const ud=useSelector(state => state.boards.board_update)
    // <input>에 값을 설정
    useEffect(()=>{
        setName(ud.name)
        setSubject(ud.subject)
        setContent(ud.content)
    },[ud])
    ////////////////////////// 값을 채운다

    const update=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus();
            return;
        }
        else if(subject.trim()==="")
        {
            subjectRef.current.focus();
            return;
        }
        else if(content.trim()==="")
        {
            contentRef.current.focus();
            return;
        }
        else if(pwd.trim()==="")
        {
            pwdRef.current.focus();
            return;
        }

        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }
        dispatch(boardUpdateOk(params));

    }
    const result=useSelector(state => state.boards.result)
    useEffect(()=>{
        if(result.msg==='yes'){
            nav('/board/detail/'+no)
            dispatch(boardReset());
        }
        else if(result.msg==='no'){
            alert("비밀번호가 틀립니다")
            setPwd("")
            pwdRef.current.focus();
        }
    },[result])
    // 조건(X) 항상 밖에 존재

    // 이벤트 처리 => 익명의 함수
    // function Aaa(){}
    const cancel=()=>{
        nav('/board/detail/'+no)
    }






    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>수정하기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className={"col-10"}>
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <th className="text-center" width={"15%"}>이름</th>
                                    <td width={"85%"}>
                                        <input type={"text"} size={"15"} className={"input-group-sm"}
                                               ref={nameRef}
                                               onChange={(e) => setName(e.target.value)}
                                               value={name}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-center" width={"15%"}>제목</th>
                                    <td width={"85%"}>
                                        <input type={"text"} size={"50"} className={"input-group-sm"}
                                               ref={subjectRef}
                                               onChange={(e) => setSubject(e.target.value)}
                                               value={subject}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-center" width={"15%"}>내용</th>
                                    <td width={"85%"}>
                                         <textarea rows={"10"} cols={"50"} ref={contentRef}
                                                   onChange={(e) => setContent(e.target.value)}
                                                   value={content}
                                         ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-center" width={"15%"}>비밀번호</th>
                                    <td width={"85%"}>
                                        <input type={"password"} size={"15"} className={"input-group-sm"}
                                               ref={pwdRef}
                                               onChange={(e) => setPwd(e.target.value)}
                                               value={pwd}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={"2"} className={"text-center"}>
                                        <button className={"btn btn-primary btn-sm"} onClick={update}>수정</button>
                                        <button className={"btn btn-primary btn-sm"} onClick={cancel}>취소</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default BoardUpdate;