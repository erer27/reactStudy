import {Fragment,useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import apiClient from "../http-commons";
import FindComponent from "./FindComponent";
import ListImage from "./ListImage";
import PagePrint from "./PagePrint";
/*
    React / Vue => 데이터 관리
    TanStack-Query(5) =>
      서버로부터 데이터 읽기 , 데이터 캐싱 , 캐시 제어 => 데이터를 쉽고 효율적 관리 => 라이브러리
      기능

    React-Query (3) => 4버전부터 => 확장된 라이브러리 => 이름이 변경 TanStack-Query

    기능
     1. 데이터 읽기 및 캐싱
     2. 동일 요청시에 중복 제거
     3. 새로운 데이터 유지
     4. 네트워크 재연결 , 요청 실페시에 자동 갱신

     useEffect(()=>{
     },[]);
     => queryKey: [curpage]
        queryFn:
     => 중복 제거
        -------- 재사용 : 컴포넌트
                 컴포넌트 기반의 Front
 */
function RecipeList(){
    const [curpage,setCurpage] = useState(1);
    // setCurpage => refetching
    const {isLoading , data}=useQuery({
        queryKey:["recipe-list"+curpage],
        queryFn: async ()=>{
            return await apiClient.get(`/recipe/list/${curpage}`)
        }
    })
    if(isLoading)
        return <h1 className={"text-center"}>Loading...</h1>
    // 확인
    /*console.log(data && data)
    let totalpage=data.data.totalpage;
    let startPage=data.data.startPage;
    let endPage=data.data.endPage;
    const prev=()=>{
        setCurpage(startPage-1);
    }
    const next=()=>{
        setCurpage(endPage+1);
    }
    const pageChange=(page)=>{
        setCurpage(page);
    }
    let pageArr=[]
    if(startPage>1)
    {
        pageArr.push(<li><a className={"nav-link"} onClick={prev}>&lt;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i==curpage)
        {
            pageArr.push(<li className={"active"} key={i}><a className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            pageArr.push(<li><a href={"#"} key={i} className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        pageArr.push(<li><a href={"#"} className={"nav-link"} onClick={next}>&gt;</a></li>)
    }
   */
    // refetch

    return (

        <Fragment>
            <div className={"container"}>
                <FindComponent/>
                <div className={"row"} style={{"marginTop":"20px"}}>
                    {
                        data.data.fList && data.data.fList.map((recipe, index) =>
                            <ListImage recipe={recipe} index={index}/>
                        )
                    }
                </div>
                <div className={"row text-center"} style={{"marginTop":"10px"}}>
                    <PagePrint data={data.data} setCurpage={setCurpage}/>
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList;