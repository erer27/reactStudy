import {BOARD_LIST,BOARD_INSERT,BOARD_UPDATE,BOARD_DELETE,
    BOARD_UPDATE_OK,BOARD_DETAIL,RESET} from './types'

/*
        React : 화면 구현 => View기능만 수행
               |
           dispatch(boardList(1)) => 사용자 요청

           => action함수에서 처리
                  |
               reducer
                  | state에 저장
                    -----------
                       | store에 저장 => 공통 데이터를 모아서 관리
                             |
                           모든 react에서 사용이 가능
                                 | 필요한 데이터만 사용
                                   useSelector()
                       | store를 사용하는 목적
                         => 단방향 통신
         Redux : 사용이 복잡 => 분석이 어렵다
                 분업화 => 데이터 관리 / 화면 출력
                 재사용이 좋다
                 ----------------------------- + 사용 편리
                 | react - query
                   -------------  사용이 많다 => facebook에 open source그룹으로 변경
                   => tanStack-query : typescript
                 | Front의 단점 : 버전이 변경이 되는 호환성이 없다
                 | Back-End
                 | vo => recoil
                 | jobkorea , 사람인 => 80% react,aws
                 면접
                  => 10%   20%    70%
                                  직무능력 (포트폴리어) : 면접 압축
                           기술면접
                     인성 (자기소개서)

                     ?page=1 => params
                     /1 =>
 */
import axios from "axios";
export const boardList = (page) => dispatch => {
    axios.get(`http://localhost/board/list_react/${page}`)
        .then(res => {
            const action={
                type:BOARD_LIST,  // board_list:[]
                payload:res.data
            }
            dispatch(action)
            // reducer => 자동으로 모든 데이터를 store에 저장
        })
}
export const boardInsert = (insertData) => dispatch => {
    axios({
        method:'post',
        baseURL:'http://localhost',
        url:'/board/insert_react',
        data:insertData,
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => {
        const action={
            type:BOARD_INSERT,
            payload:res.data
        }
        dispatch(action)
    })
}
// detail
export const boardDetail = (no) => dispatch => {
    axios.get(`http://localhost/board/detail_react/${no}`)
        .then(res => {
            const action={
                type:BOARD_DETAIL,
                payload:res.data
            }
            dispatch(action) // reducer
        })
}
// update-data
export const boardUpdate = (no) => dispatch => {
    axios.get(`http://localhost/board/update_react/${no}`)
        .then(res => {
            const action={
                type:BOARD_UPDATE,
                payload:res.data
            }
            dispatch(action)
        })
}
// update
export const boardUpdateOk = (upDateData) => dispatch => {
    axios({
        method:'put',
        baseURL:'http://localhost',
        url:`/board/update_react_ok`,
        data:upDateData,
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => {
        const action={
            type:BOARD_UPDATE_OK,
            payload:res.data
        }
        dispatch(action) // reducer
    })
}
// delete
export const boardDelete = (no,pwd) => dispatch => {
    axios.delete(`http://localhost/board/delete_react/${no}/${pwd}`)
        .then(res => {
            const action={
                type:BOARD_DELETE,
                payload:res.data
            }
            dispatch(action)
        })
}
export const boardReset = () => dispatch => {
    const action = {
        type: RESET,
        payload: {}
    }
    dispatch(action)
}