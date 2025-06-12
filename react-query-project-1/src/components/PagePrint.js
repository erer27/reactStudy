import {Link} from "react-router-dom";


function ListImage ({recipe,index}){
    return (
        <div className="col-md-3" key={index}>
            <div className="thumbnail">
                <Link to={"/recipe/detail/"+recipe.no}>
                    <img src={recipe.poster}  style={{"width":"230px","height":"130px"}} />
                    <div className="caption">
                        <p>{recipe.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ListImage;