import { Container } from "@mui/material";
import Maincontent from "./assets/components/Maincontent";
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
        <Container maxWidth="xl">
        <Maincontent />

        </Container>
       
      </div>
    </>
  );
}

export default App;
