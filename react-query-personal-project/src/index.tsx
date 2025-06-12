import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
// => 실무 (v18 => v19은 베타버전)
//         --- 안정적인 버전
// 이력서 => 단락 / 말투 / 가독성 => 간결하게 => 문장의 흐름 / 연결성
// 압축된 표현
// react - query에 option 설정
/*
     TanStack - Query  => redux가 어렵다
       react-query : 개발자의 요구사항이 많다 => facebook => open source그룹

     1. 서버에서 데이터 읽기 => 케싱(메모리에 저장)
     2. 동일 요청일 경우 => 중복 제거 (서버를 연결하지 않는다)
        = queryKey:["aaa",page]
                          ----- 변경
     3. 항상 새로운 데이터를 유지
     4. 네트워크 재연결 , 요청 실패시 자동 갱신
     5. 데이터 캐싱 : 새로운 데이터 / 기존 데이터 => 키
     6. 단점 : 버전이 변경이 되면 => 호환성 낮다
        장점 : 속도 향상 , 다른 Front-end 기술을 호환한다 @tanstack/vue-js
        => Front : Front를 통합
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus:false, // 속도문제 => 서버와 연결하지 않는다
            refetchOnMount:false, // 키를 사용 => 키가 동일한 경우에는 기존의 cache에 저장된 데이터 읽기
            refetchOnReconnect:false,
            retry:false, // 버튼 클릭 ... 이벤트
            staleTime:5*60*1000 //5분
        }
    }
});
const rootElement = document.getElementById('root');
// index.html => <div id="root">사이에 HTML을 첨부</div>
if(rootElement){
    const root=ReactDOM.createRoot(rootElement);
    root.render(
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();