// import { useParams,useHistory } from "react-router-dom";
// import { useState } from "react";
// import useFetch from "../components/useFetch.js";

// const Edit = () => {
//     const {id}=useParams();
//     const {data:blog,isPending, error}=useFetch('http://localhost:8000/blogs/'+id)
//     const history=useHistory();

//     // const [blogTitle,setBlogTitle]=useState(blog.blogTitle);
//     // const [blogAuthor,setBlogAuthor]=useState(blog.blogAuthor);
//     // const [blogBody,setBlogBody]=useState(blog.blogBody);
//     // const date=new Date();
//     // const createdDate=`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
//     // const [blogDate,setBlogDate]=useState(`Edited date: ${createdDate}`);

//     const {setBlogTitle,setBlogAuthor,setBlogDate,setBlogBody}=('http://localhost:8000/blogs'+id);

//     const handleEdit= (e)=>{
//         e.preventDefault();
//         history.push("/");
//     }
//     return (
//         blog && <div className="add-outer-container">
//             <form onSubmit={handleEdit} >
//                 <input type="text" required value={blog.blogTitle} className="form-control form-field"
//                     // onChange={(e)=>setBlogTitle(e.target.value)}
//                     placeholder="Blog title"/>

//                 <input type="text" required value={blog.blogAuthor} className="form-control form-field"
//                     // onChange={(e)=>setBlogAuthor(e.target.value)}
//                     placeholder="Blog Author"/>

//                 <textarea required value={blog.blogBody} className="form-control form-field" rows="4" cols="50"
//                     // onChange={(e)=>setBlogBody(e.target.value)}
//                     placeholder="Type something..."></textarea>

//                 <button className="btn add-btn ">Confirm edit</button>
//             </form>
//         </div>
//      );
// }

// export default Edit;
