import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from "react-router-dom";
import {useState, useEffect, Fragment, use} from "react";
import {fetchInfoList,resetState} from "../../actions/infoActions";

/*
     let a=1
     let b="1"

     a==b  a===b
           ------ 데이터형 구분
     ---- 데이터형을 구분하지 않는다


 */
function InfoList(){
    const {no}=useParams()
    const dispatch=useDispatch();
    const [curpage, setCurpage]=useState(1);
    const [cno,setCno]=useState(no);
    /*
        useEffect(()=>{
             // store에 저장
          setCurpage(1)

        },[cno]);
        useEffect(()=>{
             // store에 저장
         dispatch(fetchInfoList(cno,curpage));

        },[curpage]);
     */
    useEffect(()=>{
        // store에 저장
        setCurpage(1) // 화면 변경시마다 한번만 수행 => mounted()
        setCno(no);

    },[no]);
    useEffect(()=>{
        // store에 저장
        dispatch(fetchInfoList(cno,curpage));

    },[cno,curpage]);

    // store로부터 데이터 읽기
    const infoList=useSelector(state => state.infos.info_data)
    const change=(no)=>{
        setCno(no)
        setCurpage(1)
    }
    const prev=()=>{
        setCurpage(infoList.curpage>1?infoList.curpage-1:infoList.curpage)
    }
    const next=()=>{
        setCurpage(infoList.curpage<infoList.totalpage?infoList.curpage+1:infoList.curpage)
    }
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>
                                    {
                                        cno==1 && "명소"
                                    }
                                    {
                                        cno==3 && "쇼핑"
                                    }
                                    {
                                        cno==2 && "음식"
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <button className={"btn-info btn-sm"} onClick={()=>change(1)}>명소</button>
                        <button className={"btn-warning btn-sm"} onClick={()=>change(3)}>쇼핑</button>
                        <button className={"btn-success btn-sm"} onClick={()=>change(2)}>음식</button>
                    </div>
                </div>
            </section>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        {
                            infoList.list && infoList.list.map((info) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">

                                        <div className="post-thumb">
                                            <Link to={"/info/detail/"+info.no}>
                                                <img src={info.poster}/>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">

                                            </div>
                                            <Link to={"/food/detail/"+info.no}>
                                                <h4 className="post-headline">{info.title}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* 페이지 나누기 */}
                        <div className="col-12">
                            <div className="pagination-area d-sm-flex mt-15">
                                <nav aria-label="#">
                                    <button className={"btn-sm btn-info"} onClick={prev}>이전</button>
                                    <button className={"btn-sm btn-info"} onClick={next}>다음</button>
                                </nav>
                                <div className="page-status">
                                    <p>Page {infoList.curpage} of {infoList.totalpage} results</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default InfoList;