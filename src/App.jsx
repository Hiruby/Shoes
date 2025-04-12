import { useState } from 'react'
import Navigation from "./Navigation/Nav";
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
import '/index.css'

//Database
import products from './db/data'

function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //------------Input Filter------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter( products => products.title.
    toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //------------Radio Filter------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //------------Buttons Filter------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selector filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) =>
          category === selected || 
          color === selected || 
          company === selected || 
          newPrice == selected || 
          title === selected
      )
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img = {img} 
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice} />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App;
