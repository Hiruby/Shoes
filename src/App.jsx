import { useState } from 'react'
import Navigation from "./Navigation/Nav";
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
    </>
  )
}

export default App;
