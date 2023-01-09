import  Link  from "next/link";
import React from "react"

const Navbar = () =>{
    return(
        <div>
            <Link href="/">Rishu Raj</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
        </div>
    )
}
export default Navbar;