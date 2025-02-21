import Grid from "@mui/material/Grid2";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Prayer from "./Prayer";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Maincontent() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Grid className=" flex flex-row flex-wrap" >
        <Grid className=" w-4/6 flex flex-col gap-5 flex-none" >
         <h1 className=" text-lg font-medium opacity-90">Jeudi, 20 février 2025</h1>
          <h1 className=" text-3xl font-bold">Paris | France</h1>
        </Grid>
        <Grid  className=" mb-5 flex-1 flex flex-col gap-5 " >
         <h2 className=" text-lg font-medium opacity-90">le temps restant pour la prochaine prière</h2>
          <h1 className=" text-3xl font-bold">00:02:30</h1>
        </Grid>
      </Grid>
      <Divider className=" bg-white opacity-10" ></Divider>
      <Stack className=" mt-6 mx-1 " spacing={2}  direction={{ xs: 'column', sm: 'column', md: "row" }}>
        <Prayer name="Fajer" time="06:20" image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"  />
        <Prayer name="Fajer" time="06:20" image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380" />
        <Prayer name="Fajer" time="06:20" image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380" />
        <Prayer name="Fajer" time="06:20" image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380" />
        <Prayer name="Fajer" time="06:20" image="https://img.freepik.com/photos-gratuite/coucher-soleil-desert-mosquee-musulman-au-premier-plan_1385-1.jpg?t=st=1740100436~exp=1740104036~hmac=869610ead14fd03d661cdb456f7a2f8d68db5e13d3b2ed4c6d1b7a789ddc1398&w=1380"/>
      </Stack>
      <Box className=" flex justify-center  mt-10" >
      <FormControl className="  w-1/4" >
        <InputLabel id="demo-simple-select-label"><span style={{color: "white"}} >la region</span> </InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );}