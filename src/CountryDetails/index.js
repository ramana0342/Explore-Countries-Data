import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import CountrySpace from "./countrySpace";
import { useState } from "react";


const Index=()=>{

    const[countryData,setCountryData]=useState([]);
     

    return(<>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home countryData={countryData} setCountryData = {setCountryData} />}></Route>
    <Route path= "/CountryDetails/:id" element={<CountrySpace countryData={countryData} />}></Route>
    </Routes>
    </BrowserRouter>


    </>)
}


export default Index;