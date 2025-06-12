import {combineReducers} from "redux";

// combineReducers : reduce여러개를 모아서 한번에 저장
// action등록 => action함수 => reducer => index에 등록 => store에 전송
/*
      types.js : 구분자
      actions => 타입별로 처리하는 기능
      reducer 생성
      == index에 저장
 */
import mainReducer from "./mainReducer";
import foodReducer from "./foodReducer";
import youtubeReducer from "./youtubeReducer";
import infoReducer from "./infoReducer";
import boardReducer from "./boardReducer";
// mains.main_data mains.main_detail => 변수 선택
// 모아둔 데이터가 => state에 저장 => state관리 (store)
/*
state={
      mains={
         main_data:{}
      }
      foods={
         food_list:{},
         find_list:{},
         food_detail:{}
      }
  }
 */
export default combineReducers({
    mains: mainReducer,
    foods: foodReducer,
    youtubes: youtubeReducer,
    infos: infoReducer,
    boards: boardReducer
})