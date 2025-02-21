import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export default function Prayer({ name, time, image }) {
  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea className="">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent className=" flex flex-col gap-6 mt-3 mb-3"> 
          <h5 className="text-2xl font-bold opacity-100">{name}</h5>
          <h3 className="text-7xl font-thin">{time}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
