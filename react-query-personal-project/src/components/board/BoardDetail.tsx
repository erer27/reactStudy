import {useParams, useNavigate, Link, useNavigationType} from "react-router";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../../http-commons";
import {useEffect,useRef,Fragment} from "react";
interface BoardDetailResponse {
    no:number;
    name:string;
    subject:string;
    content:string;
    dbday:string;
    hit:number;
}
// => function / return을 제거할 수 있다
function BoardDetail() {
    const {no}= useParams<{no:string}>();
    const nav=useNavigate();
    const type=useNavigationType() // /path : PUSH , -1 : POP
    console.log(type)
    const {isLoading,isError,error,data,refetch:boardDetail}=useQuery<{data:BoardDetailResponse}>({
        queryKey:["board-detail",no],
        queryFn:async()=>{
            return apiClient.get(`/board/detail/${no}`)
        }
    })

    useEffect(() => {

        if(type!=='POP')
        {
            boardDetail();
        }

    }, []);

    if(isLoading)
        return <h3>서버에서 데이터 전송 지연</h3>
    if(isError)
        return <h3>서버 에러 발생 : {`${error}`}</h3>

    const board=data?.data
    if(!board) return null;
    console.log(board)
    return (
        <Fragment>
            <div className="breadcumb-area br" style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/img/banner.jpg)`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>TanStackQuery+TypeScript</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <h3>내용보기</h3>
                        <table className="table" style={{"fontSize":"20px"}}>
                            <tbody>
                            <tr>
                                <th style={{"width":"20%"}} className={"text-center"}>번호</th>
                                <td style={{"width":"30%"}} className={"text-center"}>{board.no}</td>
                                <th style={{"width":"20%"}} className={"text-center"}>작성일</th>
                                <td style={{"width":"30%"}} className={"text-center"}>{board.dbday}</td>
                            </tr>
                            <tr>
                                <th style={{"width":"20%"}} className={"text-center"}>이름</th>
                                <td style={{"width":"30%"}} className={"text-center"}>{board.name}</td>
                                <th style={{"width":"20%"}} className={"text-center"}>조회수</th>
                                <td style={{"width":"30%"}} className={"text-center"}>{board.hit}</td>
                            </tr>
                            <tr>
                                <th style={{"width":"20%"}} className={"text-center"}>제목</th>
                                <td colSpan={3} className={"text-center"}>{board.subject}</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className={"text-left"} valign={"top"}
                                    height={200}
                                ><pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{board.content}</pre></td>
                            </tr>
                            <tr>
                                <td colSpan={4} className={"text-right"}>
                                    <Link className="cosmetic-button pink mr-3" to={"/board/update/"+board.no}>수정</Link>
                                    <Link className="cosmetic-button pink mr-3" to={"/board/delete/"+board.no}>삭제</Link>
                                    <Link className="cosmetic-button pink" to={"/board/list"}>목록</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default BoardDetail;