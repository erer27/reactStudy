import {Fragment,useState,useEffect} from "react";
import axios from "axios";
/*
        useState : 변수 => 데이터가 변경되면 return을 다시 호출이 가능하게 만드는 변수
            데이터가 변경되면 return을 다시 호출이 가능하게 만드는 변수
            setXxx() => return을 재호출 (리렌더링)
        useEffect(()=>{
        },[]) => mounted() => 시작과 동시에 한번 호출
         
        useEffect(()=>{
        },[curpage]) => 한번 호출 => curpage가 변경시마다 재수행

        useEffect(()=>{
        },[fd])
 */
function InfoList(){
    useEffect(() => {
        axios.get("http://localhost/info/list_react",{
            params:{
                page:1
            }
        }).then(res=>{
            console.log(res.data
            )
        })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <h3 className={"text-center"}>여행 목록</h3>
            </div>
        </div>
    )
}

export default InfoList;