import { useState } from 'react'
import './App.css'

import RecipeAdd from './Components/RecipeAdd'
import RecipeRemove from './Components/RecipeRemove'

function App() {

  const [recipes, setRecipes] = useState([])

  // Add Recipe
  const addRecipe = (recipe) => {

    const newRecipe = {
      ...recipe,
      id: Date.now()
    }

    setRecipes((prev) => [
      ...prev,
      newRecipe
    ])
  }

  // Remove Recipe
  const removeRecipe = (id) => {

    setRecipes((prev) =>
      prev.filter((recipe) => recipe.id !== id)
    )
  }

  return (
    <div className="app">

      <h1>Recipe App 😋</h1>

      <RecipeAdd
        onAdd={addRecipe}
      />

      <RecipeRemove
        recipes={recipes}
        onRemove={removeRecipe}
      />

    </div>
  )
}

export default App