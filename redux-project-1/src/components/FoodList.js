import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodList} from "../actions/foodActions";
import {Link} from "react-router-dom";

function FoodList(){
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch();// Action호출하는 함수
    // dispatch(fetchFoodList(curpage))
    useEffect(()=>{
        dispatch(fetchFoodList(curpage)); // reducer를 거쳐서 store에 저장
    },[curpage]);

    const food_list=useSelector(state => state.foods.food_list.list);
    const totalpage=useSelector(state => state.foods.food_list.totalpage);
    const startPage=useSelector(state => state.foods.food_list.startPage);
    const endPage=useSelector(state => state.foods.food_list.endPage);
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prev=()=>{
        setCurpage(startPage-1)
    }
    const next=()=>{
        setCurpage(endPage+1)
    }
    let row=[]
    if(startPage>1)
    {
        row.push(<li><a href={"#"} onClick={prev}>&lt;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++){
        if(i===curpage){
            row.push(<li className={"active"}><a href={"#"}>{i}</a></li>)
        }
        else
        {
            row.push(<li ><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"}onClick={next}>&gt;</a></li>)
    }
    return  (
        <div>
        <div className="container">
            <div className="row">
                {
                    food_list && food_list.map((food) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <Link to={"/detail/"+food.fno}>
                                    <img src={"https://www.menupan.com"+food.poster} alt="Lights" style={{"width":"230px","height":"120px"}}/>
                                    <div className="caption">
                                        <p>{food.name}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        <div className="row text-center" style={{"marginTop":"10px"}}>
            <ul className={"pagination"}>
                {row}
            </ul>
        </div>
        </div>
    )
}

export default FoodList;