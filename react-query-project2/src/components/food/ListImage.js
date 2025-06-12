import {Link} from "react-router-dom";

const ListImage=({no,name,poster,index})=>{
    return (
        <div className="col-md-3" key={index}>
            <div className="thumbnail">
                <Link to={"/food/detail/"+no}>
                    <img src={poster} style={{"width":"230px","height":"130px"}} />
                    <div className="caption">
                        <p>{name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ListImage;