import { Container } from "@mui/material";
import Maincontent from "./assets/components/Maincontent.jsx";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          
        }}
        
      >
        <Container maxWidth="lg">
        <Maincontent />

        </Container>
       
      </div>
    </>
  );
}

export default App;
