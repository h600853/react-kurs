import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import Description from "./components/Description";
import ImageComponent from "./components/ImageComponent";
import ToDoList from "./components/ToDoList";
import BasicDateCalendar from "./components/BasicDateCalendar";
import DailyQuote from "./components/DailyQuote";
import WeatherWidget from "./components/WeatherWidget";




export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack spacing={2} mt={2} id="todolist">
        <ToDoList />
        <Description />
        <DailyQuote></DailyQuote>
        <WeatherWidget />
        <ImageComponent />
        <BasicDateCalendar/>
      </Stack>
    </Container>
  );
}
