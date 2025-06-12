import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState,useEffect,Fragment} from "react";
import {boardDetail} from "../../actions/boardActions";

function BoardDetail() {
    const {no}= useParams(); // request.getParameter("")
    // 무조건 string => 비교 == , ===(데이터형)
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(boardDetail(no));
    },[])
    // store에서 필요데이터 가지고 온다 : useSelector()
    const detail = useSelector(state => state.boards.board_detail);

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>내용보기</h2>
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
                                    <th className="text-center" width={"20%"}>번호</th>
                                    <td className="text-center" width={"30%"}>{detail.no}</td>
                                    <th className="text-center" width={"20%"}>작성일</th>
                                    <td className="text-center" width={"30%"}>{detail.regdate}</td>
                                </tr>
                                <tr>
                                    <th className="text-center" width={"20%"}>이름</th>
                                    <td className="text-center" width={"30%"}>{detail.name}</td>
                                    <th className="text-center" width={"20%"}>조회수</th>
                                    <td className="text-center" width={"30%"}>{detail.hit}</td>
                                </tr>
                                <tr>
                                    <th className="text-center" width={"20%"}>제목</th>
                                    <td colSpan={"3"}>{detail.subject}</td>
                                </tr>
                                <tr>
                                    <td colSpan={"4"} className={"text-left"} valign={"top"}
                                        height={"200"}>
                                        <pre style={{"whiteSpace": "pre-wrap","border":"none","backgroundColor":"#ffffff"}}>{detail.content}</pre>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={"4"} className={"text-right"}>
                                        <Link to={"/board/update/"+no} className={"btn btn-xs btn-danger"}>수정</Link>
                                        <Link to={"/board/delete/"+no} className={"btn btn-xs btn-primary"}>삭제</Link>
                                        <Link to={"/board/list"} className={"btn btn-xs btn-success"}>목록</Link>
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
export default BoardDetail;