import React, { useState } from "react";
import Form from "./components/form/Form";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Monitor from "./components/monitor/Monitor";

const App = () => {
  const [odpowiedzi, setOdpowiedzi] = useState([['Szymczak is the best', 69], ['bajo jajo', 0]])
  return (
    <div className=" container flex flex-col justify-between items-center min-h-screen w-full">
      <Header />
      <Form />
      <Monitor odpowiedzi={odpowiedzi} />
      <Button />
    </div>
  );
}

export default App;
