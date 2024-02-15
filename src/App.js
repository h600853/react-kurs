import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import Description from "./components/Description";
import ImageComponent from "./components/ImageComponent";
import ToDoList from "./components/ToDoList";
import BasicDateCalendar from "./components/BasicDateCalendar";




export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction={{
        xs:"column",
        sm:"row",
      }} spacing={2} mt={2} id="todolist">
        <ToDoList />
        <Description />
      </Stack>
        <ImageComponent />
        <BasicDateCalendar/>
    </Container>
  );
}
