import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CountryModal } from "./CountryModal";

export const CountyCard = ({ country }) => {
  const [countryName, setCountryName] = useState("");
  const [open, setOpen] = useState(false);
  const [countryData, setCountryData] = useState();

  const getCountryDetails = () => {
    setCountryName(country.name.common);
    setOpen(true);

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountryData(data[0]))
      .catch((err) => console.log(err.message));
  };

  console.log(countryData);

  return (
    <Card sx={{ minWidth: 250, m: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={country.flags.png}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population : {country.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region : {country.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Capital : {country.capital[0]} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={getCountryDetails}>
          More Details
        </Button>
        {open ? (
          <CountryModal
            open={open}
            setOpen={setOpen}
            countryData={countryData}
          />
        ) : null}
      </CardActions>
    </Card>
  );
};
