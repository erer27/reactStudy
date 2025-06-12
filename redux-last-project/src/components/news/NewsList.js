import {useState, useEffect, Fragment, useRef, use} from 'react'
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchNewsData} from "../../actions/mainActions";

function NewsList(){
    const dispatch = useDispatch();
    const fdRef = useRef(null);
    const [fd,setFd] = useState("맛집");
    useEffect(()=>{
        dispatch(fetchNewsData(fd))
    },[fd])
    const newsClick=()=>{
        if(fd==="")
        {
            fdRef.current.focus();
            return
        }
        setFd(fdRef.current.value);
    }
    const newsList=useSelector(state => state.mains.news_data)
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>
                                    네이버 뉴스 검색
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type={"text"} size={"25"} className={"input-sm"}
                                   ref={fdRef}
                            />
                            <button className={"btn-sm btn-primary"} onClick={newsClick}>검색</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>
                                        {
                                            newsList.items && newsList.items.map(news=>
                                                <table className={"table"}>
                                                    <tbody>
                                                    <tr>
                                                        <td className={"text-left"}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html: news.title}}></h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"text-left"} dangerouslySetInnerHTML={{__html: news.description}}></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        }
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

export default NewsList;