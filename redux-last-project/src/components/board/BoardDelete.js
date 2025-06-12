import {useState, useEffect, Fragment, useRef} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {boardDelete,boardReset} from "../../actions/boardActions";

function BoardDelete(){
    // BoardDetail => no값을 받는다
    const {no}=useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [pwd, setPwd] = useState("");
    const pwdRef = useRef(null);
    const cancel=()=>{
        nav(-1)
        // history.back() => history.go(-1) => useNavigate : history , 화면이동
        // -1 이전화면
    }
    const del2=()=>{
        if(pwd.trim()==="")
        {
            pwdRef.current.focus();
            return;
        }
        // action으로 전송
        dispatch(boardDelete(no,pwd))
    }
    // 결과값 받기
    const delData=useSelector(state => state.boards.result)
    useEffect(()=>{
        if(delData.msg==='yes')
        {
            nav('/board/list')
            dispatch(boardReset())
        }
        if(delData.msg==='no')
        {
            alert("비밀번호가 틀립니다")
            setPwd("");
            pwdRef.current.focus();
        }
    },[delData])

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>삭제하기</h2>
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
                                    <td className="text-center">
                                        비밀번호:<input type={"password"} size={"20"}
                                                    className={"input-group-sm"}
                                                    ref={pwdRef}
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}
                                    />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <button className={"btn btn-outline-danger btn-sm"} onClick={del2}>삭제</button>
                                        <button className={"btn btn-outline-primary btn-sm"} onClick={cancel}>취소</button>
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
export default BoardDelete;