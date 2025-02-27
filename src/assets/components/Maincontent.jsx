import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Maincontent() { 
  const [selectedCity, setSelectedCity] = useState("Paris");
  const [availableCities, setAvailableCities] = useState(["Paris", "Marseille", "Lyon"]);
  
  const [timing, setTiming] = useState({
            Fajr: "05:52",
            Dhuhr: "13:00",
            Asr: "16:12",
            Maghrib: "18:42",
            Isha: "20:03",
  });
  const keys = Object.keys(timing);
  const userDate = new Date(); // Gets the local date and time
  const localString = userDate.toLocaleString(); // Converts the date and time to a string
  const getTiming = async () => {
    const response = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=France&method=8`
    );
    const data = response.data.data.timings;
    setTiming(data);
  }
  useEffect(() => {
    getTiming();
    
  }, [selectedCity]);
  
  const handleChange = (event) => {
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
      <Box className=" flex justify-center  mt-10">
        <FormControl className="  w-1/4">
          <InputLabel id="demo-simple-select-label">
            <span style={{ color: "white" }}>La Region</span>{" "}
          </InputLabel>
          <Select
          style={{ color: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Age"
            onChange={handleChange}
          >
            
            {availableCities.map((city) => (
              <MenuItem value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
