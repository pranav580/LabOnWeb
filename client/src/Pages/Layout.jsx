import { Outlet, Link } from "react-router-dom";
import Login from "../Login";
import "./styles.css";

const Layout = () => {
  return (
    <>
      <div className="head"><h1>Lab On Web</h1>
      <nav className="nav">
        <Link to="/" className="pad">Home</Link>
        <Link to="/Experiments" className="pad">Experiments</Link>
        <Link to="/About" className="pad">About</Link>
        <div className="glogin"><Login/></div>
      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;