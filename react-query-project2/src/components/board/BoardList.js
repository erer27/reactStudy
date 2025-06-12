/*
      TanStack - Query
      -----------------
      1. useQuery : SELECT
      2. useMutation : INSERT / UPDATE / DELETE

 */
import {useState, useEffect} from "react";
import apiClient from "../../http-commons";
import {useQuery} from "@tanstack/react-query"
import {Link} from "react-router-dom";

function BoardList(){
    // 변수 설정 => 변경시마다 => 재호출
    const [curpage, setCurpage] = useState(1);
    const {isLoading,isError,error,data,refetch:hitIncrement}=useQuery({
        queryKey:["board-list",curpage],
        queryFn: async () => {
            return await apiClient.get(`/board/list/${curpage}`)
        }
    })

    if(isLoading)
        return <h3 className={"text-center"}>서버 데이터 전송 지연...</h3>
    if(isError)
        return <h3 className={"text-center"}>서버 에러 발생:{error} </h3>

    console.log(data)
    const prev=()=>{
        setCurpage(curpage>1?curpage-1:curpage);
    }
    const next=()=>{
        setCurpage(curpage<data.data.totalpage?curpage+1:curpage);
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>TanStack-Query(React-Query)를 이용한 게시판</h3>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td>
                            <Link to={"/board/insert"} className={"btn btn-sm btn-danger"}>새글</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th width={"10%"} className={"text-center"}>번호</th>
                        <th width={"45%"} className={"text-center"}>제목</th>
                        <th width={"15%"} className={"text-center"}>이름</th>
                        <th width={"10%"} className={"text-center"}>작성일</th>
                        <th width={"20%"} className={"text-center"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.data.list && data.data.list.map((board,index)=>
                            <tr key={index}>
                                <td width={"10%"} className={"text-center"}>{board.no}</td>
                                <td width={"45%"}>{board.subject}&nbsp;
                                    {
                                        board.dbday===data.data.today &&
                                        <sup style={{"color":"red"}}>new</sup>
                                    }

                                </td>
                                <td width={"15%"} className={"text-center"}>{board.name}</td>
                                <td width={"10%"} className={"text-center"}>{board.dbday}</td>
                                <td width={"20%"} className={"text-center"}>{board.hit}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td colSpan={"5"} className={"text-center"}>
                            <button className={"btn btn-sm btn-danger"} onClick={prev}>이전</button>
                            {data.data.curpage} page / {data.data.totalpage} pages
                            <button className={"btn btn-sm btn-danger"} onClick={next}>다음</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default BoardList;