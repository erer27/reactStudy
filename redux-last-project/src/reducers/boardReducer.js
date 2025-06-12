import {BOARD_LIST,BOARD_INSERT,BOARD_UPDATE,BOARD_DELETE,
    BOARD_UPDATE_OK,BOARD_DETAIL,RESET} from '../actions/types'
/*
      Map => 여러개 묶어서 전송
             list , curpage , totalpage  =>
             {
                curpage:1,
                totalpage:10,
                list:[]
             }
      List => [{},{},{},{}...]
      VO  => {}
      String => ''
 */
const boardState ={
    board_list:{},
    board_detail:{},
    board_update:{},
    result:{}
}
export default function (state = boardState, action){
    switch(action.type){
        case BOARD_LIST:
            return {
                ...state,
                board_list:action.payload
            }
        case BOARD_INSERT:
            return {
                ...state,
                result:action.payload
            }
        case BOARD_DETAIL:
            return {
                ...state,
                board_detail:action.payload
            }
        case BOARD_DELETE:
            return {
                ...state,
                result:action.payload
            }
        case BOARD_UPDATE:
            return {
                ...state,
                board_update:action.payload
            }
        case BOARD_UPDATE_OK:
            return {
                ...state,
                result:action.payload
            }
        case RESET:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state;
    }
}