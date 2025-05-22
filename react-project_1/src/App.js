import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import axios from "axios";

/*
    class형
    class App extends Component
    {
        멤버변수 저장
    }

    function형 => 지역변수
               => 멤버변수 형식을 추가 => Hooks (17버전)

    => props : 속성값을 받는 경우
        <App name="">
        function App(props) => props.name => 고정
        state : 변경이 가능한 값
        useState 변경
    => useEffect => mounted()
 */
// class를 적용할 때 => class(X), className
// style={{"속성명":값}}
// jsx => javascript+xml
/*
  <태그>
    최상위 태그
    <img src=""> => 오류 발생 <img src=""/> <br/>
  </태그>
  모든 태그는 닫기를 한다
  props / state
    |       | 변경이 가능한 값 => state프로그램 (상태 프로그램)
    속성으로 값 읽기 <App a=""> => a => 불변
    let =>  변수가 저장이 안된다 : 외부데이터는 state (변수값 유지)
    
    실행 과정
    index.js ===> App.js
    <App/> : return 값을 받는다 ===> index.html
             --------- HTML         <div id="root">|</div>
                                                  HTML을 첨부해서 실행한다
    ------
    함수나 클래스를 부르는 경우에 사용
    
    React.createElement('div' React.createElement('div',
    FaceBook에서 사용할 목적 => 공개

    함수명은 반드시 대문자로 시작한다
    함수 호출 => <함수명>
    function Bbb
    
    => <Bbb> => return 값을 가지고 온다
 */
function App(props) {
    // 모든 코딩은 함수안에 존재
  // map => for문
    let html=props.movie_data.map((m)=>
      <div className="col-md-3" > {/*주석*/}
        <div className="thumbnail">
          <a href="#">
            <img src={'https://www.kobis.or.kr/'+m.thumbUrl} style={{"width":"230px","height": "120px"}}/>
              <div className="caption">
                <p>{m.movieNm}</p>
              </div>
          </a>
        </div>
      </div>
  )

  return (
    <div className={"row"}>
        <h3 className={"text-center"}>{props.title}</h3>
        {html}
    </div>
  );
}

export default App;
