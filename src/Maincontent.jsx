import Grid from "@mui/material/Grid2";
export default function Maincontent() {
  return (
    <>
      <Grid container style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
    
      }}>
        <Grid className=" w-3/6 flex flex-col gap-5 flex-none bg-green-800" item xs={6}>
         <h1 className=" text-lg font-normal">Jeudi, 20 février 2025</h1>
          <h1 className=" text-3xl font-medium">Paris | France</h1>
        </Grid>
        <Grid className=" flex-1 flex flex-col gap-5 bg-orange-800 "  item xs={6}>
         <h2 className=" text-lg font-normal">le temps restant pour la prochaine prière</h2>
          <h1 className=" text-3xl font-medium">00:02:30</h1>
        </Grid>
      </Grid>
    </>
  );
}
