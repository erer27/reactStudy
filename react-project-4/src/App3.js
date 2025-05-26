/*
       useEffect
            => 데이터를 읽어 오는 경우
            => mounted() : 시작과 동시에 한번 읽기
            => 재호출이 가능
                useEffect(()=>{
                    axios....
                },[])
                [page] => deps => state변수가 변경되는 재호출 명령이 가능
                page=1, page=1 => 재호출을 한다
                ---------------------------- react-query(0)
                                             --------------
                                             | react + vue

 */
import {useState,useEffect} from "react";
import axios from "axios";
/*
function App3(){
}*/
// 변수 설정 => useState useEffect => 데이터형 지정 (타입 변경이 없게)
// 익명의 함수
const App3 = () => {
    const [movie,setMovie] = useState([]);
    const [no,setNo]=useState(1);

    useEffect(()=>{
        axios.get('http://localhost:3355/movie/home',{
            params:{
                no:no
            }
        }).then((res)=>{
            setMovie(res.data)
        })
    },[no])
    
    return (
        <div className="container">
            <div className="row">
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <button className="btn btn-primary" onClick={()=>setNo(1)}>일일 박스오피스</button>
                            <button className="btn btn-primary" onClick={()=>setNo(2)}>실시간 예매율</button>
                            <button className="btn btn-primary" onClick={()=>setNo(3)}>좌석점유율순위</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th className={"text-center"}></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>장르</th>
                    </tr>
                    {
                        movie.map((m)=>
                            <tr>
                                <th className={"text-center"}>{m.rank}</th>
                                <th className={"text-center"}>
                                    <img src={"https://www.kobis.or.kr"+m.thumbUrl} style={{width:'30px',height:'30px'}} alt=""/>
                                </th>
                                <th >{m.movieNm}</th>
                                <th className={"text-center"}>{m.director}</th>
                                <th className={"text-center"}>{m.genre}</th>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default App3;
