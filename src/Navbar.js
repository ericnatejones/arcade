import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/snake">snake</Link>
            <Link to="/frogger">frogger</Link>
            <Link to="/mine-sweeper">mine sweeper</Link>
        </div>
    )
}