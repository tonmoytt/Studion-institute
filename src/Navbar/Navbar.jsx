import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authmainprovider } from "../Authentiction/Login/provider/Provider";


const Navbar = () => {
    const { user } = useContext(Authmainprovider)
    const navlink = <>
        <li className="mr-4 font-semibold text-xl hover:underline hover:font-bold "><NavLink to="/">Home</NavLink></li>
        <li className="mr-4 font-semibold text-xl hover:underline hover:font-bold"><NavLink to="/store">Store</NavLink></li>
        <li className="mr-4 font-semibold text-xl hover:underline hover:font-bold"><NavLink to="/about">About</NavLink></li>
        <li className="mr-4 font-semibold text-xl hover:underline hover:font-bold"><NavLink to="/login">Login</NavLink></li>


    </>
    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navlink
                            }
                        </ul>
                    </div>
                    <h2 className="btn btn-ghost font-serif font-semibold normal-case text-lg md:text-2xl lg:text-2xl text-cyan-400">Studeon-institute</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button className=" btn md:text-lg lg:text-lg lg:mr-4 hover:font-bold hover:underline hover:bg-blue-300">Signout</button>
                            :
                            <Link to="/register">
                                <button className=" btn md:text-lg lg:text-lg lg:mr-4 hover:font-bold hover:underline hover:bg-blue-300">Register</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;