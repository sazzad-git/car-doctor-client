import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("signOut successfully");
      })
      .catch((error) => {
        console.log("error:", error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>log Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="mb-4 h-28 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl btn btn-ghost">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
