import {FETCH_YOUTUBE_FIND} from "../actions/types";

const youtubeState={
    movie_data:[]
}
// dispatch(action) => 자동 호출
// dispatch({type:찾기, payload:데이터}
// ... : 복제
export default function(state=youtubeState, action){
    console.log("reducer call"+action.payload);
    switch(action.type){
        case FETCH_YOUTUBE_FIND:
            return {
                ...state,
                movie_data: action.payload
            }
        default:
            return state;
    }
}