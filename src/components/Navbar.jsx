import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <div className="flex place-content-between font-semibold bg-slate-800 py-6 px-8 border-b-2 border-b-green-400">
            <Link to="/">
                <p className="text-white hover:text-green-400">Home</p>
            </Link>
            <div className="flex gap-6 ">
                <Link to="/customerSign">
                    <p className="text-white hover:text-green-400">Customer</p>
                </Link>
                <Link to="/adminSign">
                    <p className="text-white hover:text-green-400">Admin</p>
                </Link>
                <Link to="/cooSign">
                    <p className="text-white hover:text-green-400">Coordinator</p>
                </Link>
            </div>
            </div>
            {/* <div className="bg-slate-500 h-screen flex justify-center"> */}
                 <Outlet className="bg-slate-800 h-screen flex justify-center"/>
            {/* </div> */}
        </div>
        
        
    )
}