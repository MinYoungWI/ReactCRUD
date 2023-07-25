
import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

//ts@ignore
function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setCount((oldCount: number) => { return oldCount + 1 });
    }, 1000)
  }, []);
  return <div style={{
    border: "10px solid black",
    forntSize: "20px",
    padding: 10
  }}>
    <h1>{title}</h1>
    <Button className="btn" onClick={() => {
      setCount(count + step);
    }}>+</Button>
    <input type="number" value={step} onChange={(evt) => {
      //@ts-ignore
      setStep(Number(evt.target.value));
    }}></input>
    {count}
  </div>
}

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Counter title="카운터" initValue={10}></Counter>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter title="카운터 2" initValue={20}></Counter>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter title="카운터 3" initValue={30}></Counter>
        </Grid>
      </Grid>
    </Container>
  )
};

export default App;
