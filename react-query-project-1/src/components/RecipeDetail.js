import {useParams,useNavigate,redirect} from "react-router-dom";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../http-commons";
import FindComponent from "./FindComponent";

/*
    useQuery => SELECT
    useMutation => INSERT/UPDATE/DELETE
    =>
 */
function RecipeDetail(){
    const {no}= useParams();
    const nav=useNavigate();

    /*
        화면 이동
        nav("/recipe/list")
        nav(-1) => history.back()
     */
    // 데이터 읽기 (서버 연결)
    // 한파트 => nodejs => + 채팅
    const {isLoading,error,isError,data}=useQuery({
        queryKey: ['detail' + no],
        queryFn: async () =>{
            return await apiClient.get(`/recipe/detail/${no}`)
        }
    })
    if(isLoading)
        return <h1 className={"text-center"}>서버에서 데이터 전송 지연중...</h1>
    if(isError)
        return <h1 className={"text-center"}>서버에서 Error 발생:{error}</h1>
    console.log(data)
    return (
        data.data.vo &&
        <div className="container">
            <FindComponent/>
            <div className="row">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="text-center" colSpan={"3"}>
                            <img src={data.data.vo.poster} style={{"width": "800px","height": "300px"}} className={"img-rounded"}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={"3"}>
                            <h3>{data.data.vo.title}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={"3"}>
                            {data.data.vo.content}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <img src={"/icon/a1.png"}/>
                        </td>
                        <td className="text-center">
                            <img src={"/icon/a2.png"}/>
                        </td>
                        <td className="text-center">
                            <img src={"/icon/a3.png"}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">{data.data.vo.info1}</td>
                        <td className="text-center">{data.data.vo.info2}</td>
                        <td className="text-center">{data.data.vo.info3}</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <h3>[재료]</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                {
                                    data.data.dList &&
                                    data.data.dList.map((dd,index) =>
                                        <li key={index}>{dd}</li>
                                    )
                                }
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td colSpan={"2"}>
                            <h3>[조리방법]</h3>
                        </td>
                    </tr>
                    {
                        data.data.mList &&
                        data.data.mList.map((fm,index) =>
                            <tr key={index}>
                                <td className="text-left" width={"80%"}>
                                    {fm}
                                </td>
                                <td className={"text-right"} width={"20%"}>
                                    <img src={data.data.iList[index]} style={{"width": "100px","height": "80px"}}/>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td rowSpan={"2"} width={"15%"}>
                            <img src={data.data.vo.chef_poster}
                                 style={{"width": "150px","height": "100px"}}/>
                        </td>
                        <td width={"85%"}>
                            {data.data.vo.chef}
                        </td>
                    </tr>
                    <tr>
                        <td width={"85%"}>{data.data.vo.chef_profile}</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td className={"text-right"}>
                            <button className={"btn-sm btn-primary"}
                                    onClick={()=>nav(-1)}>
                                목록
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecipeDetail;