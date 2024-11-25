let divContainer = document.getElementById("divContainer");
const searchInput = document.getElementById("searchInput");
let allResults = [];


fetch("https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08")
    .then((response) => {
        if (!response.ok) {
        throw new Error("ERROR!!");
        } else {
        return response.json();
        }
    })
.then((data) => {
    allResults = data.response.results;
    displayNews(allResults);
    console.log(allResults);
})
    .catch((error) => {
    console.error("u got ERROR sir", error);
});


function displayNews(arr) {
divContainer.innerHTML = "";

arr.forEach((newsItem) => {
    const newsBox = document.createElement("div");
    newsBox.setAttribute("class", "divBox");

    const newsTitle = document.createElement("h3");
    newsTitle.setAttribute("class", "newsTitle");
    const newsDescription = document.createElement("p");
    const timeForCreation = document.createElement("p");
    const liBox = document.createElement("li");
    const linkToArticle = document.createElement("a");
    const favoriteButton = document.createElement("button");

    newsTitle.innerText = newsItem.sectionId.toUpperCase();
    newsDescription.innerText = `Breaking News : ${newsItem.webTitle}`;
    timeForCreation.innerText = `Published Date : ${newsItem.webPublicationDate}`;
    linkToArticle.innerText = "Read more";
    linkToArticle.href = newsItem.webUrl;
    linkToArticle.target = "_blank";
    favoriteButton.innerText = "Add To Favorites";


    favoriteButton.addEventListener("click", () => addToFavorites(newsItem));

    divContainer.appendChild(newsBox);
    newsBox.appendChild(newsTitle);
    newsBox.appendChild(newsDescription);
    newsBox.appendChild(timeForCreation);
    newsBox.appendChild(liBox);
    liBox.appendChild(linkToArticle);
    newsBox.appendChild(favoriteButton);
});
}


function addToFavorites(newsItem) {

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


if (!favorites.some((fav) => fav.id === newsItem.id)) {
    favorites.push(newsItem); 
    localStorage.setItem("favorites", JSON.stringify(favorites)); 
    alert("Added to favorites!");
} else {
    alert("This article is already in your favorites.");
}
}


function searchfunction() {
    const searchNews = searchInput.value.toLowerCase();
    const filterSearch = allResults.filter(newsItem =>
        newsItem.sectionId.toLowerCase().includes(searchNews)
    );
    displayNews(filterSearch);
}

searchInput.addEventListener("input", searchfunction);


