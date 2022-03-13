import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Add.css";

const Add = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const date = new Date();
  const createdDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const blogDate = useState(`created date: ${createdDate}`);

  const history = useHistory();

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { blogTitle, blogAuthor, blogBody, blogDate };
    setIsAdding(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsAdding(false);

      history.push("/");
    });
  };

  return (
    <div className="add-outer-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={blogTitle}
          className="form-control form-field"
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Blog title"
        />

        <input
          type="text"
          required
          value={blogAuthor}
          className="form-control form-field"
          onChange={(e) => setBlogAuthor(e.target.value)}
          placeholder="Blog Author"
        />

        <textarea
          required
          value={blogBody}
          className="form-control form-field"
          rows="4"
          cols="50"
          onChange={(e) => setBlogBody(e.target.value)}
          placeholder="Type something..."
        ></textarea>

        {!isAdding && <button className="btn add-btn ">Add Blog</button>}
        {isAdding && <button className="btn add-btn ">Adding...</button>}
      </form>
    </div>
  );
};

export default Add;
