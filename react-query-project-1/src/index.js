import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
/*
            refetchOnWindowFocus:false : 브라우저 화면 포커스 => 데이터 갱신
            refetchOnMount:false, : useQuery연결시 재시도
            refetchOnReconnect:false, 네트워크 재연결시 데이터 갱신
            retry:false, : 재시도 횟수
            staleTime:5*60*1000 :

            stale : 이전 데이터 => cache저장
                                 임시 메모리에 저장 => 같은 key가 들어오는 경우에는 서버와 연결(X)
                                 => 메모리 저장된 데이터를 보내준다
                                 => 유지하는 시간
            new : 새로운 데이터로 갱신
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus:false,
            refetchOnMount:false,
            refetchOnReconnect:false,
            retry:false,
            staleTime:5*60*1000
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();