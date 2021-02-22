// All DOM selectors stored as short variables
const recipeList = document.getElementById('recipe-list')

// Sofia: ('https://api.edamam.com/search?q=fish&app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10')
// Felicia: ('https://api.edamam.com/search?q=fish&app_id=024ea492&app_key=142143fddda1a7a392b5adaad116e123&from=0&to=10')
// Anna: ('https://api.edamam.com/search?q=fish&app_id=0d384271&app_key=07b683b7ada30b1385132db562595c8b&from=0&to=10')

const fetchRecipes = () => {
    fetch ('https://api.edamam.com/search?q=fish&app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10') 
      .then ((response) => {
        return response.json()
      }) 
      .then ((json) => {
        const hits = json.hits;
        hits.forEach((item) => {
            recipeList.innerHTML += `
            <div class="recipe-card">
                <a href="${item.recipe.url}">
                    <img class="card-img" src=${item.recipe.image}>
                    <div class="card-text">
                        <p class="card-label">${item.recipe.label}</p>
                        <p class="card-cooking-time">Cooking time: ${item.recipe.totalTime} min.</p>
                        <p class="card-ingredients">Ingredients: ${item.recipe.ingredientLines}</p>
                    </div>
                </a>
            </div>
          `
        })
      })
    }
    fetchRecipes();


