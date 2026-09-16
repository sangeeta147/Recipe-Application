import { useState, useTransition } from 'react'
import { z } from 'zod'

const recipeSchema = z.object({
  name: z.string().min(1, 'Recipe name is required'),
  ingredients: z.string().min(10, 'Add more ingredients'),
  time: z.number().min(1, 'Cooking time must be more than 0')
})

function RecipeForm({ onAdd }) {

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [time, setTime] = useState("")
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const recipe = {
      name: name,
      ingredients: ingredients,
      time: Number(time)
    }

    const result = recipeSchema.safeParse(recipe)

    if (!result.success) {
      setError(result.error.issues[0].message)
      return
    }

    startTransition(() => {
      onAdd(result.data)

      setName("")
      setIngredients("")
      setTime("")
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add a Recipe</h2>

      <input
        type="text"
        value={name}
        placeholder="Recipe Name"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Add Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cooking Time (mins)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? 'Adding....' : 'Add a Recipe'}
      </button>

    </form>
  )
}

export default RecipeForm

