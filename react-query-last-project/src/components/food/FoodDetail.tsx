import {Fragment,useEffect,useRef,useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useNavigate,useParams} from "react-router-dom";
import apiClient from "../../http-commons";
import FoodMap from "./FoodMap";
import {AxiosError, AxiosResponse} from "axios";
// react / vue => 화면 UI (HTML)
// 서버로부터 데이터를 어떻게 받을까? => 속도
// 같은 값을 가지고 오는 경우 => 어떻게 처리 : cache => 키
// => class형식 : function 형식 => 값을 유지할 수 있는 변수 => useState() => Hooks => 16버전
/*
      하위 태그에 전송 => props (태그의 속성값)
      -------- 많은 경우에 => 전송이 많다 ------- store => redux => 단순한 프로그램

      웹사이트 개발
      ----------- spring / db => 나올 수 있는 모든 내용이
                  ------------
                  | 유지보수 : Front (Jquery => Vue , react)
                  | 각 업체에서 서버 담당 : MSA
                    ------------------ NodeJS


 */
interface FoodDetailData {
    fno:number;
    hit:number;
    jjimcount:number;
    likecount:number;
    replycount:number;
    score:number;
    name:string;
    type:string;
    phone:string;
    address:string;
    theme:string;
    poster:string;
    images:string;
    time:string;
    parking:string;
    content:string;
    price:string;
    rdays:string;
}
interface CommentData{
    no :number;
    fno:number;
    id:string;
    name:string;
    msg:string;
    dbday:string;
}
interface FoodResponse{
    data:{
        foods:FoodDetailData,
        comments:CommentData[]
    }
}
function FoodDetail(){
    // FoodList에서 들어오는 값
    const {fno}=useParams<{fno:string}>()
    const nav = useNavigate();
    const [msg,setMsg]=useState<string>("");
    const [no,setNo]=useState<number>(0);
    const msgRef = useRef<HTMLTextAreaElement>(null);
    const [toggle,setToggle]=useState<boolean>(true);
    /////////// 수정
    const [umsg,setUmsg]=useState<string>("");
    const umsgRef=  useRef<HTMLTextAreaElement>(null);
    // link:PUSH , back:POP
    /*
          let a=10
          a=""

          let a:number=10
     */
    // 서버 연결
    const {isLoading,isError,error,data,refetch:foodDetailData}=useQuery<FoodResponse,Error>({
        queryKey:['food-detail',fno],
        queryFn: async () => await apiClient.get(`/food/detail/${fno}`)

    })

    const {mutate:commentInsert} = useMutation<FoodResponse>({
        mutationFn: async () => {
            const res:AxiosResponse<FoodResponse,Error>=await apiClient.post(`/comment/insert`,{
                fno: fno,
                id: sessionStorage.getItem("id"),
                name: sessionStorage.getItem("name"),
                msg: msg

            })
            return res.data
        },
        onSuccess:(data:FoodResponse) => {
            foodDetailData()
            if (msgRef.current) {
                msgRef.current.value = '';
            }
        },
        onError:(error:Error)=>{
            console.log("comment Error: ",error.message);
        }
    })

    // 삭제
    const {mutate:comnentDelete}=useMutation<FoodResponse>({
        mutationFn:async ()=>{
            const res:AxiosResponse<FoodResponse,Error>=await apiClient.delete(`/comment/delete/${no}/${fno}`)
            return res.data
        },
        onSuccess:(data:FoodResponse) => {
            foodDetailData()
        },
        onError:(error:Error)=>{
            console.log("comment Error: ",error.message);
        }
    })
    // 수정

    const {mutate:comnentUpdate}=useMutation<FoodResponse>({
        mutationFn:async ()=>{
            const res:AxiosResponse<FoodResponse,Error>=await apiClient.put(`/comment/update`,{
                no:no,
                msg:umsg
            })
            return res.data
        },
        onSuccess:(data:FoodResponse) => {
            foodDetailData()
            if (umsgRef.current) {
                umsgRef.current.value = '';
            }
            setToggle(true)

        },
        onError:(error:Error)=>{
            console.log("comment Error: ",error.message);
        }
    })

    if(isLoading){
        return <h3 className={"text-center"}>Loading...</h3>
    }
    if(isError)
        return <h3 className={"text-center"}>{error?.message}</h3>;



    const food:FoodDetailData|undefined=data?.data.foods
    console.log(food)
    const comment:CommentData[]|undefined=data?.data.comments
    console.log(comment)

    const insert=():void =>{
        if(msg==="")
        {
            msgRef.current?.focus()
            return;
        }
        commentInsert()

    }
    const del=(no:number):void =>{
        setNo(no)
        comnentDelete()
    }

    const updateData=(no:number,index:number):void =>{
        if(umsgRef.current && comment){
            umsgRef.current.value=comment[index].msg
        }
        setToggle(false)
        setNo(no)
        console.log(comment && comment[index].msg)


    }
    const update=():void =>{
        if(umsg==="")
        {
            umsgRef.current?.focus()
            return;
        }
        comnentUpdate()
    }
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>맛집 상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">

                        <table className="table">
                            <tbody>
                            <tr>
                                <td width={"30%"} className="text-center" rowSpan={8}>
                                    <img src={`https://www.menupan.com${food?.poster}`} alt={""}
                                         style={{width:"350px",height:"300px"}}
                                    />
                                </td>
                                <td colSpan={2}><h3>{food?.name}&nbsp;<span style={{color:"orange"}}>{food?.score}</span></h3></td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">주소</td>
                                <td width={"55%"}>{food?.address}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">전화</td>
                                <td width={"55%"}>{food?.phone}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">음식종류</td>
                                <td width={"55%"}>{food?.type}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">가격대</td>
                                <td width={"55%"}>{food?.price}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">영업시간</td>
                                <td width={"55%"}>{food?.time}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">주차</td>
                                <td width={"55%"}>{food?.parking}</td>
                            </tr>
                            <tr>
                                <td width={"15%"} className="text-center">테마</td>
                                <td width={"55%"}>{food?.theme}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>{food?.content}</td>
                            </tr>
                            <tr>
                                <td className={"text-right"}>
                                    <button className={"btn-sm btn-primary"}
                                            onClick={()=>{nav(-1)}}
                                    >목록</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td className={"text-center"}>
                                    {
                                        food &&
                                        <FoodMap address={food?.address} name={food?.name}/>
                                    }

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row" style={{"marginTop":"20px"}}>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td><h3>[댓글]</h3></td>
                            </tr>
                            <tr>
                                <td>
                                    {
                                        comment &&
                                        comment.map((com:CommentData,index)=>
                                            <table className={"table"} key={index}>
                                                <tbody>
                                                <tr>
                                                    <td width={"80%"} className={"text-left"}>
                                                        ◑{com.name}({com.dbday})
                                                    </td>
                                                    <td width={"20%"} className={"text-right"}>
                                                        {
                                                            com.id===sessionStorage.getItem("id") &&
                                                            (
                                                                <span>
                                                               <button className={"btn-sm btn-warning"} onClick={()=>updateData(com.no,index)}>수정</button>&nbsp;
                                                                    <button className={"btn-sm btn-info"} onClick={()=>del(com.no)}>삭제</button>
                                                              </span>
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} valign={"top"}>
                                                        <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{com.msg}</pre>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        )
                                    }
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {
                            sessionStorage.getItem("id") && toggle===true?
                                (
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <textarea rows={5} cols={120} style={{"float":"left"}}
                                                          ref={msgRef}
                                                          onChange={(e)=>setMsg(e.target.value)}></textarea>
                                                <button className={"btn-primary"}
                                                        style={{"float":"left","width":"100px",height:"100px"}}
                                                        onClick={insert}
                                                        value={msg}
                                                >댓글쓰기</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                ):(
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <textarea rows={5} cols={120} style={{"float":"left"}}
                                                          ref={umsgRef}
                                                          onChange={(e)=>setUmsg(e.target.value)}></textarea>
                                                <button className={"btn-primary"}
                                                        style={{"float":"left","width":"100px",height:"100px"}}
                                                        value={umsg}
                                                        onClick={()=>update()}
                                                >수정하기</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                )
                        }

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default FoodDetail;