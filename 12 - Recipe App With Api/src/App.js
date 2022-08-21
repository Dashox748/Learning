import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import DisplayRecipes from "./components/DisplayRecipes/DisplayRecipes";

function App() {

  const APP_ID = "ed7a2fd3";
  const APP_KEY = "71537386cb6ca52ee34dddeae26d2f14";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        setData(response.data.hits);
        console.log(response.data.hits)
      });

  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="recipe__container">
      <form onSubmit={getSearch}>
        <input value={search} onChange={updateSearch} placeholder="Dish Name" />
        <button type="submit">Get Recipes</button>
      </form>

      <div className="recipe__container-display">
        <div className="dish">
          {data.map((recipe) => (
            <DisplayRecipes
              name={recipe.recipe.label}
              image={recipe.recipe.image}
              kcal={recipe.recipe.calories}
              dishType={recipe.recipe.dishType}
              ingredients={recipe.recipe.ingredients}
              link={recipe.recipe.url}
              time={recipe.recipe.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
