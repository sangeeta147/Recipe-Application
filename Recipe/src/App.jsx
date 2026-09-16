import { useState } from 'react'
import './App.css'
import RecipeForm from './Component/RecipeForm'

function App() {

  const [recipes, setRecipes] = useState([])
  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe])
  }

  return (
    <>
      <h1>Recipe App 😋</h1>

      <RecipeForm onAdd={addRecipe} />

      <div className="recipe-list">

        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>

            <h2>{recipe.name}</h2>

            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>

            <p>
              <strong>Cooking Time:</strong> {recipe.time} minutes
            </p>

          </div>
        ))}

      </div>
    </>
  )
}

export default App

