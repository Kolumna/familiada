import React, { useState, useRef } from "react";
import Monitor from "./components/monitor/Monitor"

const App = () => {
  const [odpowiedzi, setOdpowiedzi] = useState([]);
  const [wyniki, setWyniki] = useState(['lol']);

  const odpNameRef = useRef();
  const wynNameRef = useRef();

  const addOdp = (e) => {
    const name = odpNameRef.current.value;
    if (name) {
      setOdpowiedzi(i => {
        return name;
      })
    }
    odpNameRef.current.value = null;
  }

  const valOdp = (e) => {
    const name = odpowiedzi;
    const val =  wynNameRef.current.value;

    if (name === val) {
      setWyniki(i => {
        return name;
      })
    } else {
      setWyniki(i => {
        return 'noob';
      })
    }
  }

  return (
    <div className=" container flex flex-col justify-evenly items-center min-h-screen w-full">
      <div className=" flex w-full justify-center items-center">
        <input ref={odpNameRef} className=" w-full bg-gray-200 h-14 rounded-2xl pl-4" placeholder="Ustaw odpowiedź" type='text'/>
        <button onClick={addOdp} className=" bg-green-500 rounded-2xl w-20 h-14 ml-4">Wyślij</button>
      </div>
      <Monitor wyniki={wyniki} />
      <div className=" flex w-full justify-center items-center">
        <input ref={wynNameRef} className=" w-full bg-gray-200 h-14 rounded-2xl pl-4" placeholder="Wpisz odpowiedź" type='text'/>
        <button onClick={valOdp} className=" bg-green-500 rounded-2xl w-20 h-14 ml-4">Wyślij</button>
      </div>
    </div>
  );
}

export default App;
