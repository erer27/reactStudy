import {FETCH_INFO_LIST,FETCH_INFO_DETAIL} from "../actions/types";
// Map => {} , List => [] , VO => {}
const infoState={
    info_data:{},
    info_detail:{}
}
// infos.info_detail
// dispatch(action) => 자동 호출
// dispatch({type:찾기, payload:데이터}
// ... : 복제
/*
    데이터 변경 , 추가에 관리 => state
                               |
                             React화면을 갱신
 */
export default function(state=infoState, action){
    console.log("reducer call"+action.payload);
    switch(action.type){
        case FETCH_INFO_LIST:
            return {
                ...state,
                info_data: action.payload
            }
        case FETCH_INFO_DETAIL:
            return {
                ...state,
                info_detail:action.payload
            }
        default:
            return state;
    }
}