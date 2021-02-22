// All DOM selectors stored as short variables
const recipeList = document.getElementById('recipe-list')


const fetchRecipes = () => {
    fetch ('https://api.edamam.com/search?q=fish&app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10') 
      .then ((response) => {
        return response.json()
      }) 
      .then ((json) => {
        const hits = json.hits;
        hits.forEach((item) => {
            recipeList.innerHTML += `
            <h1>${item.recipe.label}</h1>
            <p>Cooking time: ${item.recipe.totalTime} min.</p>
            <img src=${item.recipe.image}>
            <p>Ingredients: ${item.recipe.ingredientLines}</p>
            <a href="${item.recipe.url}">Check out the link to the recipe!</a>
          `
        })
      })
    }
    fetchRecipes();


