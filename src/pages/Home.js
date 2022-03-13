import BlogItemContainer from "../components/BlogItemContainer";
import useFetch from "../components/useFetch";
import "./Home.css";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="blogs-container">
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      {isPending && (
        <p className="mt-5" style={{ textAlign: "center" }}>
          Loading data....
        </p>
      )}
      {blogs &&
        blogs.map((blog) => {
          return <BlogItemContainer blog={blog} key={blog.id} />;
        })}
    </div>
  );
};

export default Home;
