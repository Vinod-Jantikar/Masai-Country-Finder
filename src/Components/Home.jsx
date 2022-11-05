import  { useState,  useEffect } from "react";
import { CountyCard } from "./CountryCard";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';


const Home = () => {
  const [allCountry, setAllCountry] = useState([]);

 

  useEffect(() => {
    getAllCountriesDetails()
  }, []);


  const getAllCountriesDetails = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => setAllCountry(data));
  }


  // console.log(allCountry)

  const sortByPopulation = () => {
    
    let sortedCountries = allCountry.sort((a, b) => Number(a.population) - Number(b.population))

    setAllCountry(sortedCountries)

  }




  return (
<>

 <Stack> 
  <Button onClick={getAllCountriesDetails}>Get All</Button>
  <Button onClick={sortByPopulation}>Sort</Button>
  <Button>Filter</Button>
 </Stack>
  
  
  <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} m="auto">
    {
      allCountry.map((country, index) => 
        <CountyCard key={index} country= {country}/>
      )
    }

  </Grid>;
  </>
)
};

export default Home;
