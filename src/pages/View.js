import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import "./View.css";

const View = () => {
    const {id}=useParams();
    const {data: blog, isPending,error}=useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div>
            {error && <p style={{textAlign:"center"}}>{error}</p>}
            {isPending && <p className="mt-5" style={{textAlign:"center"}}>Loading data....</p>}
            {blog && 
                <div className="view-outer-container">
                    <h1 className="blog-title ">{blog.blogTitle}</h1>
                    <p className="blog-date">{blog.blogDate}</p>
                    <p className="blog-author">{blog.blogAuthor}</p>
                    <p className="blog-body">
                        {blog.blogBody}
                    </p>

                </div>
            }
        </div>
     );
}
 
export default View;