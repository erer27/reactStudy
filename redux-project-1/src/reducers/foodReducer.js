// Action을 통해서 요청값을 받아서 관리 => store로 전송
/*
                 dispatch            dispatch    공유 데이터
    사용자 요청 ===== Action함수 호출 =========== 실행결과 store
                                               -------------
                                         |
                                       reducer
 */
import {FETCH_FOOD_DETAIL, FETCH_FOOD_LIST} from "../actions/type";

const foodState={
    food_list:{},
    food_detail:{}
}

export default function(state=foodState, action){
    switch(action.type){
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail:action.payload
            }
        default:
            return state;
    }
}