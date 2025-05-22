import {Fragment} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import InfoFind from "./components/busan/InfoFind";
import InfoList from "./components/busan/InfoList";
function App() {
  return (
      <Fragment>
        <Router>
          <Header />
          <Routes >
            <Route path="/" element={<Home/>} />
              {/* 실행 화면을 지정 */}
              <Route path="/info/info_list" element={<InfoList/>} />
              <Route path="/info/info_find" element={<InfoFind/>} />
          </Routes>
        </Router>
      </Fragment>
  );
}

export default App;
