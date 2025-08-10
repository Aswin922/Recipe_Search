import React from 'react';

export default function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <h3>{recipe.name}</h3>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cook time:</strong> {recipe.cookTimeMinutes || 'N/A'} min</p>
      <p><strong>Tags:</strong> {(recipe.tags || []).join(', ')}</p>
    </div>
  );
}
