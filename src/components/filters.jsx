import React from "react";
import "../index.css"
const Filter=()=>{
return(
    <>
	<button class="active btn" id="all">SHOW ALL</button>
	<button class="btn" id="a">MEN</button>
	<button class="btn" id="b">WOMEN</button>
	<button class="btn" id="c">BABY</button>
	<button class="btn" id="d">ACCESORIES</button>
    </>
)
}
export default Filter