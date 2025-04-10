import { useState } from 'react'
import Navigation from "./Navigation/Nav";
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  )
}

export default App;
