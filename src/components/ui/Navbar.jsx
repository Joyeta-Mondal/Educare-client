import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaMoon } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import logo from "../../assets/logo/logo.png";
import { IoNotificationsCircle } from "react-icons/io5";
import { useFetchAllUser } from "../../utils/fetchUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function Navbar({ toggleTheme, currentTheme }) {
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext);
  const [Role, setRole] = useState("");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/user/check-admin/${user?.email}`).then((res) => {
      setRole(res?.data?.isAdmin?.role);
    });
  }, [axiosSecure, user?.email]);

  const [showUserName, setShowUserName] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (user) {
      try {
        await logoutUser();
        navigate("/");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserName(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="navbar bg-secondary pr-6 fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <button
                onClick={() => {
                  user ? handleLogout() : null;
                  user ? navigate("/") : navigate("/login");
                }}
                className="text-neutral"
              >
                {user ? "Logout" : "Login"}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  user ? null : navigate("/signup");
                }}
                className="text-neutral"
              >
                {user ? user?.displayName || user.email : "Signup"}
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/")} className="text-neutral">
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/all-scholarship")}
                className="text-neutral"
              >
                All Scholarship
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/dashboard/profile")}
                className="text-neutral"
              >
                User Dashboard
              </button>
            </li>
            {Role === "admin" && (
              <li>
                <button
                  onClick={() => navigate("/dashboard/profile")}
                  className="text-neutral"
                >
                  Admin Dashboard
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link
          to={"/"}
          className="flex items-center gap-x-2 text-sm sm:text-4xl font-semibold text-neutral"
        >
          <img className="w-20 h-20" src={logo} alt="logo" />
          <p className="hidden md:block lg:hidden dark:text-gray-100 xl:block">
            EduCare
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button
              onClick={() => navigate("/")}
              className={`dark:text-gray-100 text-neutral ${
                location.pathname === "/" && "active"
              }`}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/all-scholarship")}
              className={`dark:text-gray-100 text-neutral ${
                location.pathname === "/all-scholarship" && "active"
              }`}
            >
              All Scholarship
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/profile")}
              className={`dark:text-gray-100 text-neutral ${
                location.pathname === "/dashboard/profile" && "active"
              }`}
            >
              User Dashboard
            </button>
          </li>
          {Role === "admin" && (
            <li>
              <button
                onClick={() => navigate("/dashboard/profile")}
                className={`dark:text-gray-100 text-neutral ${
                  location.pathname === "/dashboard/profile" && "active"
                }`}
              >
                Admin Dashboard
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end relative">
        <button className=" hidden md:block mr-4">
          <IoNotificationsCircle className="text-accent dark:text-white hover:text-accentHover h-14 w-14" />
        </button>

        {!user && (
          <button
            onClick={() => {
              user ? handleLogout() : null;
              user ? navigate("/") : navigate("/login");
            }}
            className="text-gray-600 dark:text-white hover:text-gray-800 btn bg-accent border-transparent hover:bg-accentHover hidden md:block"
          >
            Join Now
          </button>
        )}

        {user && (
          <div
            onClick={() => setShowUserName(!showUserName)}
            className="  cursor-pointer"
          >
            <img
              src={user.photoURL}
              alt="Avatar"
              className="w-12 h-12 rounded-full border-2 border-accent object-cover"
            />
          </div>
        )}
        {showUserName && (
          <div
            ref={menuRef}
            className="text-gray-700 dark:text-white font-medium text-xl bg-blue-800 border-transparent absolute top-16 right-8 px-2 py-1 rounded-md z-50"
          >
            <ul className="menu menu-box gap-y-2">
              <li>
                <button className="btn bg-accent hover:accentHover w-[100%]">
                  {user?.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/profile")}
                  className="btn bg-accent hover:bg-accentHover w-[100%]"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLogout()}
                  className="btn bg-accent hover:bg-accentHover w-[100%]"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center ml-4"
        >
          <div
            className={`h-12 w-12 rounded-[50%] flex items-center justify-center  dark:bg-gray-800 ${
              currentTheme === "light" ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {currentTheme === "light" ? (
              <FaMoon className="text-3xl text-gray-200" />
            ) : (
              <MdWbSunny className="text-3xl text-gray-200" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
