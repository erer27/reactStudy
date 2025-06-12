// 재호출
import {useState,Fragment,useRef} from "react";
import {useQuery,useMutation} from "@tanstack/react-query";
import apiClient from "../http-commons";
import {Link} from "react-router-dom";
import ListImage from "./ListImage";
import PagePrint from "./PagePrint";


/*
    restful
      = apiClient.get('/list/${page}')
      = apiClient.post('/find',{
          page:1,
          title:'마포'
        })
      = apiClient.put('',{}) = @PutMapping()
      = apiClient.delete('/delete/${no}') = @DeleteMapping()
      = CRUD / RestFul

      async => 비동기족 전송 => 서버 연결
      useQuery => 지연상태 , 에러발생 , 실제 데이터를 한번에 모아서 전송을 받을 수 있다
      useQuery({
         queryKey:[],
                  --- 키가 같은 경우에는 미리 저장된 데이터를 출력 : 서버연결을 하지 않는다
                      | 속도가 빠르다 , 간단한 코딩으로 처리
         queryFn: 처리 함수
         refetch : 함수명 => 버튼 클릭시 재호출
      })

      useQuery    : SELECT => 데이터 읽기
      useMutation : INSERT / UPDATE / DELETE => 데이터 수정 => 게시판
      -------------------------------------------------------------
      => TypeScript
 */
function RecipeFind(){
    const [title,setTitle]=useState('감자');
    const [curpage,setCurpage]=useState(1);
    const {isLoading,error,isError,data,refetch:recipeFindData}=useQuery({
        queryKey:["recipe_find"+curpage],
        queryFn: async () =>{
            return await apiClient.get(`/recipe/find/${curpage}/${title}`);
        }
    })
    if(isLoading)
        return <h1 className={"text-center"}>서버 데이터 전송 지연중...</h1>
    if(isError)
        return <h1 className={"text-center"}>Error 발생:{error}</h1>
    const find=(e)=>{
        setTitle(e.target.value);
        // e.target.value => 입력값 읽기 => 반드시 onChange사용
    }
    const findBtn=()=>{
        recipeFindData() // useQuery를 다시 수행 => 속성 : refetch
    }
    return (
        <div className="container">
            <div className="row">
                <input type={"text"} size={"20"} className={"input-sm"}
                       onChange={find}
                       value={title}
                />
                <button className={"btn-sm btn-primary"} onClick={findBtn}>검색</button>
            </div>
            <div className="row" style={{"marginTop":"10px"}}>
                {
                    data.data.rList &&
                    data.data.rList.map((recipe,index)=>
                        <ListImage recipe={recipe} key={index}/>
                    )
                }
            </div>
            <div className="row text-center" style={{"marginTop":"10px"}}>
                <PagePrint data={data.data} setCurpage={setCurpage}/>
            </div>
        </div>
    )
}

export default RecipeFind