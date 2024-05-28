import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./App.css"

const CountrySpace=({countryData , setCountryData})=>{

    const {id}=useParams()
    const [data,setData]=useState([])
   
    useEffect(()=>{
         
       

        if(countryData.length>0){
        let countryDetails=countryData.filter((item,index)=>{
            if(id.toLowerCase()===item.name.common.toLowerCase()){
                return true
            }
        })
        setData(countryDetails)
    }
    },[id,countryData])
    console.log(data)


    

   return(<>
{data.map((item,index)=>{
           return(<>

<div class="card mb-3">
  <div className="d-flex flex-column align-items-center">
  <img src={item.flags.svg} class="card-img-top" alt="..." style={{height:"50vh",width:"50vw" ,marginTop:"0px"}}/>
  <p className="mt-2"><b>{item.name.common} Country flag</b></p>
   </div>
   <div class="card-body">
  <h5 class="card-title">Country :{item.name.common}</h5>
                    <p class="card-title">Official Name: <b> {item.name.official}</b></p>
                    <p class="card-text">Capital: <b>{item.capital}</b></p>
                    <p class="card-text">Region: <b>{item.region}</b></p>
                    <p class="card-text">Sub Region: <b>{item.subregion}</b></p>
                    {item.languages && (<p className="card-text">Languages: <b>{Object.values(item.languages).join(', ')}</b></p>)}
                    <p className="card-text">Population: <b>{item.population.toLocaleString()}</b></p>
                    <p className="card-text">Area: <b>{item.area.toLocaleString()} km²</b></p>
                    <p className="card-text">Borders: <b>{item.borders.join(",")}</b></p>
                    <p className="card-text">Latitude: <b>{item.latlng[0]}</b> , Longitude: <b>{item.latlng[1]}</b></p>
                    <p className="card-text">Start Of Week: <b>{item.startOfWeek}</b></p>
                    <p class="card-text"><a href={item.maps.googleMaps}>Google Maps Location</a></p>
  </div>
</div>




                     </>)

    }) }
    </>)
      
  

 
}

export default CountrySpace