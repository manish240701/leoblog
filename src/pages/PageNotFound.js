import {Link } from "react-router-dom";
const PageNotFound = () => {


  return (
    <div style={{textAlign:"center", marginTop:"10%"}}>
      <Link  to="/" style={{textDecoration:"underline"}}>
        <h1>Go Back</h1>
      </Link>
      <p>Page Not Found</p>

    </div>
  )
};

export default PageNotFound;
