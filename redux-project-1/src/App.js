import logo from './logo.svg';
import './App.css';
/*
    store : 실제 React화면 출력할 데이터를 저장하는 곳
    reducer : React화면에서 전송된 데이터를 store에 보내주는 역할
    action : 사용자 보내는 이벤트
    dispatcher : store에서 데이터를 읽어와서 => 화면에 출력

    store --------- Component(HTML)
                        |
                       Action
                        |
                       Dispatch
                        |
                       Reduce
                        |
                       store
   Redux => (MVC) => 단순하게 변경 (react0query) => vue , angular , jquery
                                                  -----------------------
                                                    연결해서 사용이 가능
                                                    -----------------
                                                    | tanStack-query : 권장 (typescript)
                                                                  | 모델
              dispatch                  dispatch
   사용자(UI)  ------------- action호출 ----------- reducer ------ store
   component                    |                    |
   return (HTML)              서버 연결             자동으로 store에 저장
      |                        요청 값 읽기
     화면 출력
   ------------               ----------------------
    View(JSP)                   Controller
   ------------               ----------------------
    Front                           Back
    => 여러명이 동시에 개발이 가능 => Mobx / Saga => nodejs (동영상 검색)
                                  ------------
    1. 액션
      => 구분자 (함수) : 기능
          export const FETCH_FOOD_LIST = ''
          export const FETCH_FOOD_DETAIL = ''
    2. 액션 처리 함수 ===> reducer전송 ===> 변경된 값을 store에 저장
                                                      |
                                                     사용자가 읽어서 출력
          export const fetchFoodList=()=> dispatch=>{
                axios.get().then(res=>{
                    const action={
                        type:FETCH_FOOD_LIST,
                        payload:res.data
                    }
                    reduce로 전송
                    dispatch(action)
                  })
          }
    3. reduce를 만드는 방법
        const foodState={
            food_list:[],
            food_detail:{},
            startPage:0
            ...
            ...
            ...
        }

        export default function(state=foodState)
        {
            switch(action.type)
            {
              case FETCH_FOOD_LIST:
                  food_list=payload
            }
        }

 */
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import store from "./store/store";
import FoodList from './components/FoodList';
import FoodDetail from "./components/FoodDetail";
function App() {
    {/* 모든 컴포넌트에서 store에 있는 모든 데이터 사용이 가능*/}
  return (

    <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/detail/:fno" element={<FoodDetail />} />
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
