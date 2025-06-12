import {FETCH_FOOD_LIST,FETCH_FOOD_DETAIL,FETCH_FOOD_FIND} from "../actions/types"
// Map => {} , VO|Entity => {} ,List => []
const foodState={
    food_list:{},
    find_list:[],
    food_detail:{}
}
/*
   1. types.js => 구분 (내부 프로토콜)
      export const FETCH_BOARD_LIST='FETCH_BOARD_LIST'
   2. action함수
      export const fetchBoardList=>()=>dispath=>{
         axios...
         fetch...

         const action={
           type: FETCH_BOARD_LIST,
           data: res.data
         }

         // reducer에 값을 전송
         dispatch(action)
      }

      => 종류별로 처리
         types는 종시 처리
         action 함수는 따로 처리
         reducer 따로 처리 ==> index에서 한번에 모아서 처리

         프로그램
         1. 분리 작업 : 기능 => 객체지향 (재사용)
                              | 기능 : 클래스
                              | 리액트/Vue => Component
         2. 공통 기능
         3. 조립 : => main() , App()

 */
export default function(state = foodState, action){
    switch(action.type){
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_FOOD_FIND:
            return {
                ...state,
                find_list:action.payload
            }

        default:
            return state;
    }
}