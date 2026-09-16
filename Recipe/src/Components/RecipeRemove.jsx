function RecipeRemove({ recipes, onRemove }) {

  return (
    <div className="recipe-list">

      {recipes.map((recipe) => (

        <div className="recipe-card" key={recipe.id}>

          <h2>{recipe.name}</h2>

          <p>
            <strong>Ingredients:</strong>
          </p>

          <p>
            {recipe.ingredients}
          </p>

          <p>
            <strong>Cooking Time:</strong> {recipe.time} minutes
          </p>

          <button
            className="remove-btn"
            onClick={() => onRemove(recipe.id)}
          >
            Remove Recipe
          </button>

        </div>

      ))}

    </div>
  )
}

export default RecipeRemove