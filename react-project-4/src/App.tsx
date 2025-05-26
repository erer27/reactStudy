/*
    1. 외부에서 데이터 읽기
      state : 필요시마다 변경이 가능한 변수
        => useState()
      props : 변경이 불가능한 변수
    2. useXxx : Hooks 16버전부터 변경
                => class형 => function
                      |           |
                    멤버변수      멤버변수의 형식으로 설정 : useState
                    ------       ------------------------------
                    * 데이터가 변경될 경우에 브라우저 화면이 변경

                    data(){
                        return {
                           데이터
                           ...
                        }
                    },
                    methods:{
                        aaa(){
                          let a=100;
                        }
                    }
        Hooks
        1. 간결한 코드
        2. 가독성 향상
        3. 라이브러리를 많이 지원
        ----------------------
        useState : 브라우저에 데이터를 바로 변경할 수 있는 변수
        useEffect : mounted와 동일한 역할
                    => 재호출 : useState=> setXxx를 이용하면 재호출이 가능
        useRef : 태그를 제어할 때 사용
        useContext : 공통으로 사용되는 데이터
                    => 모든 컴포넌트에 props를 이용해서 전송
        useMemo : 최적화된 연산
        useCallback : 자동으로 많이 호출되는 함수 => 속도가 빠르다
        useReduce : Redux 관련
        useParams : router를 이용해서 데이터 전송
        
 */

import React from "react";
import Counter from "./Counter";
import App1 from "./App1";
import App3 from "./App3";
// FC => Function Component => FC => React+TypeScript 조합으로 개발 *
const App:React.FC = () => {
  return (
    <App3></App3>
  );
}
//https://www.kobis.or.kr/kobis/business/main/main.do
export default App;
