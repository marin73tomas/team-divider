import React from "react";
import Players from "./components/Players";
import Teams from "./components/Teams";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
export default function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1">
          Team Divider
        </Typography>
        <Players />
        <Teams />
      </Container>
    </>
  );
}
