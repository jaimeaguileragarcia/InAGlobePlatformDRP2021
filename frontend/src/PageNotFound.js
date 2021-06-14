import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2>Something went wrong...</h2>
            <p>That page cannot be found</p>
            <Link to='/home'>Back to the main page</Link>
        </div>
    );
}
 
export default PageNotFound;