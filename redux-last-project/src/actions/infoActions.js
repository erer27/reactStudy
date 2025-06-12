import {FETCH_INFO_LIST,FETCH_INFO_DETAIL,RESET} from "./types"
// BOARD => Get / Post / Put / Delete => RestFul
import axios from "axios";

export const fetchInfoList = (cno,page) => dispatch => {
    axios.get("http://localhost/info/list_react",{
        params: {
            cno:cno,
            page:page
        }
    }).then(res=>{
        dispatch({
            type:FETCH_INFO_LIST,
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const resetState = () => dispatch => {
    return dispatch({
        type:RESET
    })
}
export const fetchInfoDetail = (no) => dispatch => {
    axios.get("http://localhost/info/detail_react",{
        params:{
            no:no
        }
    }).then(res=>{
        console.log(res.data)
        dispatch({
            type:FETCH_INFO_DETAIL,
            payload:res.data
        })
    })
}