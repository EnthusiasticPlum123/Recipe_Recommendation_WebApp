$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getRecipes(searchText);
        e.preventDefault();
    });

});

function getRecipes(searchText) {
    axios.get('https://api.edamam.com/search?app_id=fe3fdc46&app_key=1000e1ecdac75f004873cf6bfacb27e7&q=' + searchText)
        .then((response) => {
            console.log(response);
            let recipes = response.data.hits;
            let output = '';
            $.each(recipes, (index, recipehit) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                    <img src="${recipehit.recipe.image}">
                    <h5>${recipehit.recipe.label}</h5>
                    <a class="btn btn-primary" href="${recipehit.recipe.url}"> Recipe Details</a>
                    </div>
                </div>
                `;
            });
            // <a onclick="recipeSelected('${recipehit.recipe.url}')" class="btn btn-primary" href="#"> Recipe Details</a>
            //
            $('#recipecontainer').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function recipeSelected(foodrecipe) {
    sessionStorage.setItem('foodrecipe', foodrecipe);
    window.location = 'food.html';
    console.log(foodrecipe);
    return false;
}


// function getRecipe() {
//     let foodrecipe = sessionStorage.getItem('foodrecipe');


//     axios.get('https://api.edamam.com/search?app_id=fe3fdc46&app_key=1000e1ecdac75f004873cf6bfacb27e7&r=' + foodrecipe)
//         .then((response) => {
//             console.log(response);
            //         let recipecontainerindividual = response.data.hits;

            //         let output = `
            //         <div class="row">
            //             <div class="col-md-4">
            //             <img src="${recipecontainerindividual.image}" class="thumbnail">
            //             </div>
            //         <div class="col-md-8">

            //         </div>
            //         </div>
            //         `;

            //         $('#recipecontainerindividual').html(output);

//         })

//         .catch((err) => {
//             console.log(err);
//         });
// }