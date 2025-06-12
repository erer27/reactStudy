import {useEffect, useState,Fragment} from "react";
import InfoMap from "./InfoMap";
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfoDetail} from "../../actions/infoActions";
// /info/detail/1
function InfoDetail(){
    const {no}=useParams(); // List에서 받는 변수
    console.log(no)
    const dispatch = useDispatch(); // 액션 연결
    const nav = useNavigate(); // 화면 이동 (-1) 사이트 주소
    useEffect(()=>{
        dispatch(fetchInfoDetail(no));
    },[])
    const id=useSelector(state => state.infos.info_detail);
    const listClick=()=>{
        nav(-1) // history.back()
        /*window.history.back();
        window.location.href="/food/detail";
        nav("/food/detail")*/
    }
    /*
       id={
          "vo": {
            "no": 3,
            "cno": 1,
            "title": "삶의 흔적이 예술로 변하는 공간, 영주맨션",
            "address": "부산광역시 중구 영초길 51 9-다, 지하5호",
            "phone": "0507-1490-6705",
            "info": "도시철도 부산 1호선 부산역 1번출구 → 부산역 정류장 버스환승 43 → 동아아파트 정류장 하차 도보 1분",
            "poster": "https://visitbusan.net/uploadImgs/files/cntnts/20250214183306081_thumbL"
          },
          "addr": "영초길"
        }
     */
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>부산지역 상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <table className="table">
                            <tr>
                                <td>
                                    <img src={id.vo && id.vo.poster} style={{"width":"100%"}} />
                                </td>
                            </tr>
                            <tr>
                                <td><h3>{id.vo && id.vo.title}</h3></td>
                            </tr>
                            <tr>
                                <td>{id.vo && id.vo.address}</td>
                            </tr>
                            <tr>
                                <td>{id.vo && id.vo.phone}</td>
                            </tr>
                            <tr>
                                <td>{id.vo && id.vo.info}</td>
                            </tr>
                            <tr>
                                <td>
                                    <InfoMap address={id.addr && id.addr}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={"text-right"}>
                                    <button className={"btn-sm btn-danger"} onClick={ listClick}>목록</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default InfoDetail;