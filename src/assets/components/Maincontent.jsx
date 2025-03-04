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
import moment from "moment";
import { useEffect, useState } from "react";



export default function Maincontent() { 
  // states
  const [selectedCity, setSelectedCity] = useState("Paris");
  const [availableCities, setAvailableCities] = useState(["Paris", "Marseille", "Lyon"]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timing, setTiming] = useState({
    Fajr: "05:52",
    Dhuhr: "13:00",
    Asr: "16:12",
    Maghrib: "18:42",
    Isha: "20:03",
});
   const [prayerName, setPrayerName] = useState("Fajr", "Dhuhr", "Asr", "Maghrib", "Isha");
   const [remainingTime, setRemainingTime] = useState("");

  

  // Format the date
  const formattedDate = currentTime.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format the time
  const formattedTime = currentTime.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);
  
 
  
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

  

  useEffect (() => {
    const interval = setInterval(() => {
      console.log("1 second passed");
      setupCountdownTimer();
      
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);
  const setupCountdownTimer = () => {
    const momentNow = moment();
    let nextPrayer = null;
    if (momentNow.isBefore(moment(timing["Asr"], "hh:mm")) && momentNow.isAfter(moment(timing["Dhuhr"], "hh:mm"))) {
      console.log("Asr");
      nextPrayer = "Asr";
      setPrayerName(nextPrayer);
    } else if (momentNow.isBefore(moment(timing["Maghrib"], "hh:mm")) && momentNow.isAfter(moment(timing["Asr"], "hh:mm"))) {
      console.log("Maghrib");
      nextPrayer = "Maghrib";
      setPrayerName(nextPrayer);
    } else if (momentNow.isBefore(moment(timing["Isha"], "hh:mm")) && momentNow.isAfter(moment(timing["Maghrib"], "hh:mm"))) {
      console.log("Isha");
      nextPrayer = "Isha";
      setPrayerName(nextPrayer);
    }else if (momentNow.isBefore(moment(timing["Dhuhr"], "hh:mm")) && momentNow.isAfter(moment(timing["Fajr"], "hh:mm"))) {
      console.log("Dhuhr");
      nextPrayer = "Dhuhr";
      setPrayerName(nextPrayer);
    } else {
      console.log("Fajr");
      nextPrayer = "Fajr";
      setPrayerName(nextPrayer);
    };
    // now we know what's the next prayer
    const nextPrayerTime = timing[nextPrayer];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    console.log(nextPrayerTime);
    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);
    
    if (remainingTime < 0) {
			const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
			const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
				moment("00:00:00", "hh:mm:ss")
			);

			const totalDiffernce = midnightDiff + fajrToMidnightDiff;

			remainingTime = totalDiffernce;
		}
    const durationRemainingTime = moment.duration(remainingTime);
    setRemainingTime(
      `${durationRemainingTime._data.hours}:${durationRemainingTime._data.minutes}:${durationRemainingTime._data.seconds}`
    )
  
  }
    
 
  const handleChange = (event) => {
  setSelectedCity(event.target.value);
  };
  
  return (
    <>
      <Grid className=" flex flex-row flex-wrap">
        <Grid className=" w-4/6 flex flex-col gap-5 flex-none">
          <h1 className=" text-lg font-medium opacity-90">
            {formattedDate} | {formattedTime}
          </h1>
          <h1 className=" text-3xl font-bold">{selectedCity} | France</h1>
        </Grid>
        <Grid className=" mb-5 flex-1 flex flex-col gap-5 ">
          <h2 className=" text-lg font-medium opacity-90">
            Le Temps Restant Pour La Prière de {prayerName} 
          </h2>
          <h1 className=" text-3xl font-bold">{remainingTime}</h1>
        </Grid>
      </Grid>
      <Divider className=" bg-white opacity-10"></Divider>
      <Stack
        className=" mt-6 mx-1 "
        spacing={2}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Prayer
          name="Fajr"
          time={timing.Fajr}
          image="https://img.freepik.com/photos-gratuite/priere-spirituelle-mains-soleil-brille-beau-coucher-soleil-floue_1150-7173.jpg?t=st=1741128472~exp=1741132072~hmac=8822807ea4f4400f783ef4c46d52e2f0ede5b63e7be73f8e773875ebbb7486e9&w=1380"
        />
        <Prayer
          name="Dhuhr"
          time={timing.Dhuhr}
          image= "https://img.freepik.com/photos-gratuite/beau-paysage-mere-nature_23-2148992408.jpg?t=st=1741129151~exp=1741132751~hmac=4743234bc509760fb4170a34e08a768e4f959332e57fc018e9ff11b5ffa2b141&w=1380"      />
        <Prayer
          name="Asr"
          time={timing.Asr}
          image="https://img.freepik.com/photos-gratuite/design-lanterne-style-islamique-pour-celebration-du-ramadan-espace-copie_23-2151183967.jpg?t=st=1741128922~exp=1741132522~hmac=6e4b13d832a2a0d2801e48d129ccbef52bcc9e882f3bcecaac26f241bb9a5562&w=1380"
        />
        <Prayer
          name="Maghrib"
          time={timing.Maghrib}
          image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"
        />
        <Prayer
          name="Isha"
          time={timing.Isha}
          image="https://img.freepik.com/photos-gratuite/mosquee-bleue-istanbul_1157-8842.jpg?t=st=1741128677~exp=1741132277~hmac=86a53c5a283d3110b03c0b42637f50b07d5f99e402cbb1913d5859c29513c9db&w=1380"
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
            value={selectedCity}
            label="Age"
            onChange={handleChange}
          >
            
            {availableCities.map((city) => (
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
