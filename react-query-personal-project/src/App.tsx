import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import CosmeticsList from "./components/cosmetics/CosmeticsList";
import CosmeticsDetail from "./components/cosmetics/CosmeticsDetail";
import BoardList from "./components/board/BoardList";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import BoardDetail from "./components/board/BoardDetail";
import BoardInsert from "./components/board/BoardInsert";


function App() {
  return (
      <Router>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>}/>
            <Route path="/cosmetics/list" element={<CosmeticsList/>}/>
            <Route path={"/cosmetics/detail/:id"} element={<CosmeticsDetail/>} />
            <Route path="/board/list" element={<BoardList/>}/>
            <Route path="/board/update/:no" element={<BoardUpdate/>}/>
            <Route path="/board/delete/:no" element={<BoardDelete/>}/>
            <Route path="/board/detail/:no" element={<BoardDetail/>}/>
            <Route path="/board/insert" element={<BoardInsert/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;