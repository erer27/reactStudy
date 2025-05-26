import {FETCH_FOOD_DETAIL,FETCH_FOOD_LIST} from './type';
import axios from "axios";
// reduce => store에 저장 ==> 저장된 데이터를 react(component)에 읽어서 출력
// react, vue, redux : 필수
// MSA / DevOps
export const fetchFoodList = (fno) => dispatch => {
    console.log(fno,"asdfasfd")
    axios.get('http://localhost/food/list_react',{
        params:{
            page:fno
        }
    }).then(res =>{
        const action={
            type:FETCH_FOOD_LIST,
            payload:res.data
        }
        // reducer를 통해서 store에 저장
        dispatch(action)
    })
}

export const fetchFoodDetail = (fno) => dispatch => {
    axios.get('http://localhost/food/detail_react',{
        params:{
            page:fno
        }
    }).then(res =>{
        const action={
            type:FETCH_FOOD_DETAIL,
            payload:res.data
        }
        // reducer를 통해서 store에 저장
        dispatch(action)
    })
}