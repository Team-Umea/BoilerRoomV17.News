fetch("https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08")
.then((response) => {
    if (!response.ok) {
        throw new Error("ERROR!!");
    } else {
        return response.json();
    }
})
.then((data) => {
    const results = data.response.results;
    displayNews(results);
})
.catch((error) => {
    console.error("u got ERROR sir", error);
});


function displayNews(arr) {


arr.forEach((newsItem, index) => {
{
    const newsBox = document.createElement('div')
    const newsTitle = document.createElement("li");
    const newsDescription = document.createElement("p");
    const timeForCreation = document.createElement("p");
    const linkToArticle = document.createElement("a");

    newsTitle.innerText = newsItem.sectionId;
    newsDescription.innerText = newsItem.webTitle;
    timeForCreation.innerText = newsItem.webPublicationDate
    linkToArticle.innerText = "Read more";
    linkToArticle.href = newsItem.webUrl;
    linkToArticle.target = "_blank"; 

    document.body.appendChild(newsBox);
    newsBox.appendChild(newsTitle);
    newsBox.appendChild(newsDescription);
    newsBox.appendChild(timeForCreation);
    newsBox.appendChild(linkToArticle);
}
});
}


InitAPI();