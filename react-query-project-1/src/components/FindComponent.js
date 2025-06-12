import {Link} from "react-router-dom";


function FindComponent() {
    return (
        <div className="row text-right">
            <Link to={'/recipe/find'} className={"btn btn-sm btn-danger"}>검색</Link>
        </div>
    )
}

export default FindComponent;