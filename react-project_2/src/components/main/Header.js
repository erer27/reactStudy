import {Fragment} from "react";
import {NavLink} from "react-router";

/*
        1. 자바스크립트 기반 => for(), map() , forEach()
        2. 변수
            일반변수 => let , const
            props : 속성으로 값을 전송 => 변경이 불가능
            function Header(props)
            {
                반드시 존재
                return (
                    HTML을 구사 => index.html
                    ==== XML 형식을 가지고 있다
                    =============
                      | index.html에 첨부할 때 렌더링 (파싱) => jsx
                        <div>
                            <span>Hello</span>
                        </div>
                        
                        React.createElement('div',React.createElement('span',null,"Hello"))
                        
                        => jsx는 태그/속성 => 소문자
                        => function / class => 대문자로 시작
                           -------- Header() X
                           <Header name="홍길동"> => props.name
                        => html
                            1. 무조건 계층 구조를 가지고 있다
                                여는 태그와 닫는 태그가 동일
                                <a><b> </b></a>
                            2. 단독태그는 반드시 닫는다
                                <input/> <img/> <br/> <hr/>
                            3. <input type="text" style="width:100px"> => 오류
                                <input type="text" style={{"width:100px"}}>

                                let style={
                                    "width":"100px",
                                    "height":"100px"
                                }
                                <input type="text" style={style}>
                            4. 반드시 한개의 태그안에 모든 HTML을 출력
                                ---------------- 최상위 태그
                            5. 속성값은 반드시 "", '' 이용한다
                            6. 태그,속성에 공백이 없어야 한다 
                            7. 변수값을 추가할 때 {}
                )
            }
            state : 값을 유지하고 있는 상태
                    외부에서 값을 받는 경우에는 state를 사용 => 수정이 가능하다
                    => state변수는 설정 => setXxx를 이용한다
                    setXxx() => 호출이 되면 리렌더링이 가능
                    --------- 함수를 다시 호출 
                    --------- 브라우저의 화면이 갱신
            ** 1. 단점
                    단방향 통신 => Redux (보완)
                    문법이 어렵다 / 전체 구조가 복잡하다 => React-Query
                    Hooks => 지원한 태그가 많다 => 학습이 어렵다
                    => 버전이 변경시마다 라이브러리가 변경이 많다 
                        ----------------------------------- 호환성문제 
            ** 2. 장점
                    컴포넌트 제작이 쉽다 (HTML)
                    속도가 빠르다 (가상 돔을 이용하는 프로그램)
                    프로그램 구현이 된 상태 견고하다
                    ----------- 재사용이  편리하다 / 가독성은 낮다
                    페이스북 / 개인 => AngularJS

            index.js ============> App.js (return => HTML) ====== index.html <div id="rot">생성된 HTML</div>
 */
function Header() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to={"/"}>WebSiteName</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">부삿 맛집
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">맛집 목록</a></li>
                            <li><a href="#">맛집 검색</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">부삿 여행
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><NavLink to={"/info/info_list"}>여행 목록</NavLink></li>
                            <li><NavLink to={"/info/info_find"}>여행 검색</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">여행 동영상
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">동영상 목록</a></li>
                            <li><a href="#">동영상 검색</a></li>
                        </ul>
                    </li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">NodeJS</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;