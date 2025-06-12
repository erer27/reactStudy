import {BrowserRouter as Router,Routes,Route} from "react-router";
import {Fragment} from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeFind from "./components/RecipeFind";
function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/detail/:no" element={<RecipeDetail />} />
                    <Route path="/recipe/find" element={<RecipeFind />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default App;