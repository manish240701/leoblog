import { Link } from "react-router-dom";
import "./BlogItemContainer.css";
const BlogItemContainer = ({ blog }) => {
  const blogid = blog.id;
  
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blogid, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    }).then(() => {
      console.log("deleted");
      window.location.reload(false);
    });
  };
  return (
    <div className="blog-item-outer-container">
      <Link to={`/view/${blog.id}`}>
        <h3 className="blog-title">{blog.blogTitle}</h3>
      </Link>
      <p className="blog-date">{blog.blogDate}</p>
      <h5 className="blog-author">{blog.blogAuthor}</h5>
      <Link to={`/edit/${blog.id}`}>
        <button className="btn mt-3 btn-danger">Edit</button>
      </Link>
      <button
        className="ml-2  mt-3 btn btn-outline-danger"
        onClick={() => {
          handleDelete(blogid);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogItemContainer;
