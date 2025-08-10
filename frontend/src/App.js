import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';

function App() {
  const [recipes, setRecipes] = useState([]);

  // to load database
  fetch("http://localhost:8080/api/recipes/load", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => console.log(response.text()))
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error("Error:", error));
  
  return (
    <div className="app">
      <h1>Recipes Search</h1>
      <SearchBar onResults={setRecipes} />
      <RecipeGrid recipes={recipes} />
    </div>
  );
}

export default App;
