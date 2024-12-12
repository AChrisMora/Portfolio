import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="flex row">
      <h1 className="d-flex justify-content-start col">
        <Link to="/">Alexander</Link>
      </h1>
      <ul className="nav justify-content-end col">
        <li className="nav-item">
          <h2 className="nav-link">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </h2>
        </li>
        <li className="nav-item">
          <h2 className="nav-link">
            <Link
              to="/Portfolio"
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </h2>
        </li>
        <li className="nav-item">
          <h2 className="nav-link">
            <Link
              to="/ContactMe"
              className={
                currentPage === "/ContactMe" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </h2>
        </li>
        <li className="nav-item">
          <h2 className="nav-link">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
