import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./App.css"

const CountrySpace=({countryData})=>{

    const {id}=useParams()
    const [data,setData]=useState([])
   
    useEffect(()=>{
        let countryDetails=countryData.filter((item,index)=>{
            if(id==item.name.common){
                return true
            }
        })
        setData(countryDetails)
    },[id])
        
    
    
    

   return(<>
{data.map((item,index)=>{
           return(<>

<div class="card mb-3">
  <div className="d-flex flex-column align-items-center">
  <img src={item.flags.svg} class="card-img-top" alt="..." style={{height:"50vh",width:"50vw" ,margin:"0px"}}/>
  <p className="mt-2"><b>{item.name.common} Country flag</b></p>
   </div>
   <div class="card-body">
  <h5 class="card-title">Country :{item.name.common}</h5>
                    <p class="card-title">Official Name: <b> {item.name.official}</b></p>
                    <p class="card-text">Capital: <b>{item.capital}</b></p>
                    {item.languages && (<p className="card-text">Languages: <b>{Object.values(item.languages).join(', ')}</b></p>)}
                    <p class="card-text"><a href={item.maps.googleMaps}>Google Maps Location</a></p>
  </div>
</div>




                     </>)

    }) }
    </>)
      
  

 
}

export default CountrySpace