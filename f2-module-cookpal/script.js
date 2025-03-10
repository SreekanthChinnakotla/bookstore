const recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

// Initial display of all recipes

function displayRecipes(recipesData) {
  //to make card container
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  //to add cards index wise
  recipesData.forEach((recipe, index) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    //to add img to card
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.imageSrc;
    recipeCard.appendChild(recipeImage);

    //to add recipe info
    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("recipe-info");

    //to append recipe type to recipe info
    const recipeType = document.createElement("div");
    recipeType.classList.add("recipe-type");
    recipeType.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
    recipeInfo.appendChild(recipeType);

    //to create name and rating container
    const namebox = document.createElement("div");
    namebox.classList.add("namecontainer");

    //to add name to the name container
    const recipeName = document.createElement("h2");
    recipeName.classList.add("recipe-Name");
    recipeName.textContent = recipe.name;
    namebox.appendChild(recipeName);

    //to create rating container
    const ratingcontainer = document.createElement("div");
    ratingcontainer.classList.add("ratingcontainer");

    //to create rating star
    const star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("fas");
    star.innerHTML = "&#xf005;";
    ratingcontainer.appendChild(star);

    //to create rating and append it to rating container
    const recipeRating = document.createElement("div");
    recipeRating.classList.add("recipe-rating");
    recipeRating.textContent = `${recipe.rating}`;
    ratingcontainer.appendChild(recipeRating);

    namebox.appendChild(ratingcontainer);

    //to append entair name and rating to namebox
    recipeInfo.appendChild(namebox);

    const timebox = document.createElement("div");
    timebox.classList.add("timebox");

    const recipeTime = document.createElement("div");
    recipeTime.classList.add("recipe-time");
    recipeTime.textContent = recipe.time;
    timebox.appendChild(recipeTime);

    const likebox = document.createElement("div");
    likebox.classList.add("likebox");

    // const likeButton = document.createElement("span");
    // likeButton.classList.add("like-button");
    // likeButton.innerHTML = recipe.isLiked ? '❤️' : '🤍';
    // likeButton.addEventListener("click", () => toggleLike(index));
    // likebox.appendChild(likeButton);

    const likeButton = document.createElement('span');
    likeButton.classList.add('like-button');
    likeButton.innerHTML = recipe.isLiked ? '❤️' : '🤍';
    likeButton.addEventListener('click', () => toggleLike(index));
    likebox.appendChild(likeButton);

    const chatsymbol = document.createElement("span");
    chatsymbol.classList.add("like-button");
    chatsymbol.classList.add("far");
    chatsymbol.innerHTML = "&#xf075;";
    likebox.appendChild(chatsymbol);

    timebox.appendChild(likebox);
    recipeInfo.appendChild(timebox);

    recipeCard.appendChild(recipeInfo);
    recipeContainer.appendChild(recipeCard);
  });
}

displayRecipes(recipes);

// to display all recipes

document.getElementById("showAll").addEventListener("click", () => {
  document.querySelector(".filter-button.active").classList.remove("active");
  document.getElementById("showAll").classList.add("active");
  displayRecipes(recipes);
});

// to search recipes

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchQuery = e.target.value.trim();
  filterRecipes(searchQuery);
});

function filterRecipes(searchQuery) {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  displayRecipes(filteredRecipes);
}

// to filter by type of recipe

document.getElementById("showVeg").addEventListener("click", () => {
  document.querySelector(".filter-button.active").classList.remove("active");
  document.getElementById("showVeg").classList.add("active");
  filterByType("veg");
});

document.getElementById("showNonVeg").addEventListener("click", () => {
  document.querySelector(".filter-button.active").classList.remove("active");
  document.getElementById("showNonVeg").classList.add("active");
  filterByType("non-veg");
});

function filterByType(type) {
  const filteredRecipes =
    type === "all" ? recipes : recipes.filter((recipe) => recipe.type === type);
  displayRecipes(filteredRecipes);
}

// filter by rating

document.getElementById("ratingAbove").addEventListener("change", () => {
  if (document.getElementById("ratingAbove").checked) {
    filterByRating("above");
  }
});

document.getElementById("ratingBelow").addEventListener("change", () => {
  if (document.getElementById("ratingBelow").checked) {
    filterByRating("below");
  }
});

function filterByRating(ratingType) {
  let filteredRecipes;
  if (ratingType === "above") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
  } else if (ratingType === "below") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  }
  displayRecipes(filteredRecipes);
}

//to toggle like

function toggleLike(recipeIndex) {
  recipes[recipeIndex].isLiked = !recipes[recipeIndex].isLiked;
  displayRecipes(getFilteredRecipes());
}

function getFilteredRecipes() {
  const activeFilter = document.querySelector('.filter-button.active').id;
  switch (activeFilter) {
      case 'showVeg':
          return recipes.filter((recipe) => recipe.type === 'veg');
      case 'showNonVeg':
          return recipes.filter((recipe) => recipe.type === 'non-veg');
      default:
          return recipes;
  }
}
function toggleDrawer() {
  // let switching = document.getElementById("navtoggle");
  let togglingNav = document.getElementById("togglenav");

  if (togglingNav.style.width === "80%") {
    togglingNav.style.display="none";
    togglingNav.style.width="0%";
  } else {
    togglingNav.style.width = "80%";
    togglingNav.style.display="block"
  }
}
