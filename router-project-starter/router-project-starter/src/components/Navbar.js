import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';
export const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className="flex justify-evenly">
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        <nav>
            <ul className="flex appearance-none gap-3">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/content">Contact</Link>
                </li>

            </ul>
        </nav>

        {/* login and signup button */}
        <div className="flex ml-5 mr-3 gap-3">
            { !isLoggedIn &&
                <Link to="/login">
                    <button 
                    onClick={()=>{toast.success("Login Successfull");
                    setIsLoggedIn(true);}}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Signup
                </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.error("Logout Successfull");}} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Dashboard
                </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar