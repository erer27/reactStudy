import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/main/Home"
import Header from "./components/main/Header"
import Footer from "./components/main/Footer"
import store from "./store/store"
import {Provider} from "react-redux";
import FoodList from "./components/food/FoodList";
import FoodFind from "./components/food/FoodFind";
import FoodDetail from "./components/food/FoodDetail";
import YoutubeFind from "./components/youtube/YoutubeFind";
import InfoList from "./components/info/InfoList";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardDelete from "./components/board/BoardDelete";
import BoardUpdate from "./components/board/BoardUpdate";
import InfoDetail from "./components/info/InfoDetail";
import NewsList from "./components/news/NewsList";
// <함수명> => return에 있는 HTML을 출력
// 모든 component => 반드시 return을 포함하고 있어야 된다 (return안에는 HTML포함)
/*
     리덕스 규칙
     1) ACTION 생성 : 실제 서버와 연결 => 데이터 읽기 , 수정
        = 구분자 FETCH_MAIN_DATA
        = axios / fetch => 서버 연결하는 함수 제작
                 | dispatch()
     2) Reduce : action에서 읽은 데이터를 해당 변수에 저장
                 | dispatch() => useDispatch
     3) store에 저장 : 한개만 사용 => Reduce를 통해서 저장
         | 상태 관리(state) oldState , newState
     4) component: store에 있는 데이터 읽어 오는 방식 => useSelector

     React VS Vue   장단점 / 사용처
     -------------
     React => Redux , React-Query


 */
function App() {
  // store => 등록된 모든 컴포넌트가 사용이 가능
  return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path={"/food/list"} element={<FoodList/>} />
            <Route path={"/food/find"} element={<FoodFind/>} />
            <Route path={"/food/detail/:fno"} element={<FoodDetail/>} />
            <Route path={"/youtube/find"} element={<YoutubeFind/>} />
            <Route path={"/info/list/:no"} element={<InfoList/>} />
            <Route path={"/board/list"} element={<BoardList/>} />
            <Route path={"/board/insert"} element={<BoardInsert/>} />
            <Route path={"/board/detail/:no"} element={<BoardDetail/>} />
            <Route path={"/board/delete/:no"} element={<BoardDelete/>} />
            <Route path={"/board/update/:no"} element={<BoardUpdate/>} />
            <Route path={"/info/detail/:no"} element={<InfoDetail/>} />
            <Route path={"/news/list"} element={<NewsList/>} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
  );
}

export default App;