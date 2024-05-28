import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import CountrySpace from "./countrySpace";
import { useState,useEffect } from "react";
import axios from "axios";


const Index=()=>{

    const[countryData,setCountryData]=useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
         console.log(res.data)
          setCountryData(res.data)
        })
 },[setCountryData])
     

    return(<>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home countryData={countryData} setCountryData = {setCountryData} />}></Route>
    <Route path= "/CountryDetails/:id" element={<CountrySpace countryData={countryData} setCountryData={setCountryData} />}></Route>
    </Routes>
    </BrowserRouter>


    </>)
}


export default Index;