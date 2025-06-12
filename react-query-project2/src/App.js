import {BrowserRouter as Router,Routes,Route} from "react-router";
import {Fragment} from "react";
import FoodList from "./components/food/FoodList";
import InfoList from "./components/info/InfoList";
import FoodDetail from "./components/food/FoodDetail";
// <FoodList/> => return에 설정한 HTML을 받는다 => 메소드 호출
function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<FoodList/>} />
                    <Route path="/info/list" element={<InfoList/>} />
                    <Route path="/food/detail/:fno" element={<FoodDetail/>} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default App;