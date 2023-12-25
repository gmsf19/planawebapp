import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  const [optionsSelectDestiny, setOptionsSelectDestiny] = useState([]);

  console.log(optionsSelectDestiny);
  console.log(data);
  const getViagens = async () => {
    try {
      fetch('http://localhost:1337/api/trips').then((response) =>
        response.json().then((res) => setData(res.data))
      );
    } catch (error) {}
  };

  useEffect(() => {
    setOptionsSelectDestiny(
      data?.map((element) => {
        console.log(element.attributes.destino);
        return element.attributes.destino;
      })
    );
  }, [data]);

  useEffect(() => {
    getViagens();
  }, []);
  return (
    <div className="App">
      <h1>A</h1>
    </div>
  );
}

export default App;
