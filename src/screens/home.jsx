import React from "react";
import Header from "../components/header";
import Filter from "../components/filters";
import ProductCard from "../components/productCards";
const Home=()=>{
return(
    <>
<Header/>
<Filter/>
<ProductCard/>
    </>
)
}
export default Home;