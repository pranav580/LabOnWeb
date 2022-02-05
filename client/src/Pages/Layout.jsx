import { Outlet, Link } from "react-router-dom";
import Login from "../Login";
import "./styles.css";

const Layout = () => {
  return (
    <>
        <div className="head">Lab On Web</div>
      <nav className="nav">
        <div className="home">
            <Link to="/">Home</Link>
        </div>
        <div className="exp">
            <Link to="/Experiments">Experiments</Link>
        </div>
        <div className="about">
            <Link to="/About">About</Link>
        </div>
        
        <div className="glogin"><Login/></div>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout