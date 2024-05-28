
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./App.css"


const Home=({countryData})=>{

    const navigate=useNavigate()
       
    
    const[searchText,setSearchText] = useState("");
    const[filterCountryData,setfilterCountryData] = useState([])
    
    

    const handleChange=()=>{
    let SearchData=countryData.filter((item,index)=>{
                  if(`${item.name.common}${item.capital}${item.region}`.toUpperCase().includes(searchText.toUpperCase())==true){
                             return true;
                  }else{
                    return false
                  }
    })
    {searchText==" " ? setfilterCountryData([]) : setfilterCountryData(SearchData)}
    console.log(filterCountryData)
}

    return(
        <>

        <div className="container">
            <div className="row d-flex justify-content-center">
            
            <div class="input-group flex-nowrap SearchBar">
  <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
  <input onChange={(e)=>{handleChange()
             setSearchText(e.target.value)
  }} type="text" class="form-control" placeholder="Search Country" aria-label="Username" aria-describedby="addon-wrapping"/>
     </div> 
     </div>
   


     <div className="row justify-content-center mt-3">
        <div className="col-md-6 ListGroup">
          <ul className="list-group">
            { filterCountryData.length>0 ? filterCountryData.map((item, index) => (
              <li  style={{color:"blue" , cursor:"pointer"}}  key={index} className="list-group-item" onClick={()=>{navigate(`/CountryDetails/${item.name.common}`)}} >
                <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
</svg> {item.name.official}
              </li>
            )) : " "}
          </ul>
        </div>
      </div>
     
          
        <div className="row">

            <div className="container Country-Cards">

            <div class="row row-cols-1 row-cols-md-4 g-4">
      

       {countryData.map((item,index)=>{
           return(<>

                <div className="col CountryHomeCard">
                <div className="card h-100" onClick={()=>{navigate(`/CountryDetails/${item.name.common}`)}}>
                    <img src={item.flags.svg} class="card-img-top country-flag" alt="..."/>  
                <div class="card-body">
                    <h5 class="card-title">Country :{item.name.common}</h5>
                    <p class="card-title">Official Name: <b> {item.name.official}</b></p>
                    <p class="card-text">Capital: <b>{item.capital}</b></p>
                    {item.languages && (<p className="card-text">Languages: <b>{Object.values(item.languages).join(', ')}</b></p>)}
                    <p class="card-text">Region:<b>{item.region}</b></p>
                  </div>
                </div>
              </div>

                     </>)

    }) }
  

            </div>

        </div>
    </div>
    </div>
        </>
    )

}


export default Home