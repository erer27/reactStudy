import {useState,useEffect} from "react";
import {useNavigate,useParams} from "react-router";

function FoodDetail() {
    const {fno}= useParams();
    // URL을 통해서 데이터가 전송된 경우 => 보낸데이터를 다 받을 수 있다
    // path="/detail/:page/:fno/:id"
    // const {page,fno,id} = useParams()
    return(
        <div className={"container"}>
            <div className="row">
                <h1>{fno}</h1>
            </div>
        </div>
    )
}

export default FoodDetail;