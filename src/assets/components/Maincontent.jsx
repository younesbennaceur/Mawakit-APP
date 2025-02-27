import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer.jsx";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useEffect, useState } from "react";
import citiesData from "../data/cities.json"; // Import the JSON file

export default function Maincontent() { 
  const [selectedCity, setSelectedCity] = useState("Paris");
  const [cities, setCities] = useState([]);
  const [timing, setTiming] = useState({
            Fajr: "05:52",
            Dhuhr: "13:00",
            Asr: "16:12",
            Maghrib: "18:42",
            Isha: "20:03",
  });
  useEffect(() => {
    axios.get("http://localhost:5000/cities")
      .then((response) => {
        const sortedCities = response.data
          .map((city) => ({
            Nom_commune: city.Nom_commune,
            Code_postal: Number(city.Code_postal),
          }))
          .sort((a, b) => a.Code_postal - b.Code_postal);
  
        setCities(sortedCities);
      })
      .catch((error) => {
        console.error("Error fetching cities data:", error);
      });
  }, []);
  const getTiming = async () => {
    try {
      const response = await axios.get("https://api.aladhan.com/v1/timingsByAddress/01-03-2025?address=paris");
      setTiming(response.data.data.timings);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTiming();
  }, []);
  const keys = Object.keys(timing);
  
  const handleCityChange = (event) => {
  setSelectedCity(event.target.value);
  };
  return (
    <>
      <Grid className=" flex flex-row flex-wrap">
        <Grid className=" w-4/6 flex flex-col gap-5 flex-none">
          <h1 className=" text-lg font-medium opacity-90">
            Jeudi, 20 Février 2025
          </h1>
          <h1 className=" text-3xl font-bold">{selectedCity} | France</h1>
        </Grid>
        <Grid className=" mb-5 flex-1 flex flex-col gap-5 ">
          <h2 className=" text-lg font-medium opacity-90">
            Le Temps Restant Pour La Prochaine Prière
          </h2>
          <h1 className=" text-3xl font-bold">00:02:30</h1>
        </Grid>
      </Grid>
      <Divider className=" bg-white opacity-10"></Divider>
      <Stack
        className=" mt-6 mx-1 "
        spacing={2}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Prayer
          name={keys[0]}
          time={timing.Fajr}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
        <Prayer
          name={keys[1]}
          time={timing.Dhuhr}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
        <Prayer
          name={keys[2]}
          time={timing.Asr}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
        <Prayer
          name={keys[3]}
          time={timing.Maghrib}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
        <Prayer
          name={keys[4]}
          time={timing.Isha}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
      </Stack>
      
      <Stack
      direction="row"
      justifyContent={"center"}
      style={{ marginTop: "40px" }}
    >
      <FormControl style={{ width: "20%" }}>
        <InputLabel id="demo-simple-select-label">
          <span style={{ color: "white" }}>La Region</span>
        </InputLabel>
        <Select
          style={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleCityChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300, // Set max height for dropdown menu
                overflowY: 'auto', // Enable vertical scrolling
              },
            },
          }}
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city.Nom_commune}>
             {city.Code_postal} {city.Nom_commune}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
     
    </>
  );
}
