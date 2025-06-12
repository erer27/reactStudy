import {FETCH_YOUTUBE_FIND} from  "./types"
import axios from "axios";

export const fetchYouTubeFind= (fd) =>  async dispatch =>
{
    try {
        const response = await fetch(

        )
        const result = await response.json()
        const action = {
            type: FETCH_YOUTUBE_FIND,
            payload: result.items
        }
        console.log(result.items)
        dispatch(action)
    } catch (error) {
        console.log(error)
    }

}