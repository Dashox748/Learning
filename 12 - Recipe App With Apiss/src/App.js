import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./components/DisplayRecipe/Recipe";

function App() {
  const APP_ID = "ed7a2fd3";
  const APP_KEY = "71537386cb6ca52ee34dddeae26d2f14";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getRecipies();

  }, [update]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <>
      <input placeholder="Dish Recipe" value={search} onKeyDown={button=>{
        if(button.key==="Enter"){
          setUpdate(prevState => setUpdate(!prevState));

        }
      }} onChange={event => {
        setSearch(event.target.value);
      }}></input>

      <div className="App">
        {recipes.map((recipe,index) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
