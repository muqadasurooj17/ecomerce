import React from "react";
import { Input } from "reactstrap";
import { CiSearch } from "react-icons/ci";
import "../index.css"
const Header=()=>{
    
return(
    <>
    <div className=" header">
         <div className="search" >
         <b className="">LOGO</b>
        <Input type="search" id="site-search" name="search"
          placeholder="Search ...."
          className="search-input"
        />
        <CiSearch/>
      </div>
    </div>
    </>
)
}
export default Header