import {Fragment,useState,useEffect} from "react";
import axios from "axios";
/*
    Vue
    created() = mounted() = update() = destroyed()
    ComponentDidCreate()
    ComponentDidMount*()****
        =>useEffect()
    ComponentDidupdate**** windon.onload
        => state가 변경될 때 화면이 변경
            ------ data(){}
    react
    ------
    1. View에 관련된 개발 라이브러리
    2. 컴포넌트 단위로 화면이 구성
    3. 클라이언트 사이드 렌더링 (React)
        => 브라우저에서 HTML을 그리는 역할만 수행
        서버 사이드 렌더링
        => 전체를 HTML을 수행하게 만든 과정
    4. 재렌더링 (데이터값이 변경)

       HTML 전체 변경 / 데이터만 변경 => 속도가 빠르다
    5. 가상돔 : 변경된 내용만 HTML에서 처리하기 위해 만든다
    6. 단방향 통신 => Redux

    JSX => JavaScript+XML
    XML문법
    1. 최상위 태그가 필요하다
        ---------- 한개만 존재
    2. 여는 태그와 닫는 태그 일치
        <a><b><c></b></c></a> (X)
        <a><b><c></c></b></a>
        단독 태그 : <br/>,<img/> <input/>
    3. 속성값은 반드시 ""
        만약에 변수값 => {} 
    4. 속성 , 태그 => 대소문자 구분
       = 함수 , 클래스는 대문자로 시작
       = HTML => 소문자로만 사용한다 
    5. 변수를 출력 : {}
    6. 변수의 종류
        지역변수 : let, const
        state : 변수값을 그대로 유지 (변경시에는 변경 => 값 유지)
           | 브라우저에 적용
        props : 속성값을 받은 경우 처리 => 불변
 */
function App3(){
    const [a,setA]=useState(100);
    /*
            HTML에 적용 => 변경된 값을 적용
            1)
                정수형
                const [변수명,set변수명]=useState(0) => 초기값
                논리형
                const [변수명, set변수명]=usetState(false)
                배열                     usetState([])
                객체                     useState({})
                state = 변경시마다 HTML을 변경
                useXxx => Hooks

                useState => 변경되는 함수
                useEffect => mounted() => axios
                useMemo
                useContext
                useCallback
                useDispatch
                ...
     */
    // 이벤트 => 버튼 클릭시 처리
    const btnPrevClick=()=>{
        alert("prev 버튼 클릭")
        setA(a-1);
    }
    const btnNextClick=()=>{
        alert("next 버튼 클릭")
        setA(a+1);
    }
    // 일반 변수는 return을 호출이 불가능
    // return을 호출해서 값을 변경 => useState
    // [변수명,set변수명]
    return (
        <Fragment>
            <h1>{a}</h1>
            <button onClick={btnPrevClick}>-</button>
            <button onClick={btnNextClick}>+</button>
        </Fragment>

    )
}
export default App3;