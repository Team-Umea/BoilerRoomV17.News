const guardianApi = "https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08";
const newsApi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=40cf19549c954aabbf7a9e4c3dd08677";
const newYorkApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=a9gTn2C71NQBedCyFhFG41nLOr1CbkJt";


const newsContainer = document.getElementById('divContainer');

async function fetchFromGuardianAPI() {
    try {
        const response = await fetch(guardianApi);
        if (!response.ok) {
            errorHandle(response);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching Guardian API data:", error.message);
    }

    
    }



async function fetchFromNewsAPI() {
    try {
        const response = await fetch(newsApi)
        if (!response.ok) {
            errorHandle(response);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching News API data:", error.message);
    }
}



async function fetchFromNewYorkTimes() {
    try {
        const response = await fetch(newYorkApi);
        if (!response.ok) {
            errorHandle(response);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching News API data:", error.message);
    }
}



async function displayNews() {
    try {
        const [guardianData, newsData, newYorkData] = await Promise.all([
            fetchFromGuardianAPI(),
            fetchFromNewsAPI(),
            fetchFromNewYorkTimes(),
        ]);

        if (guardianData || newsData || newYorkData) {
            createNews(guardianData, newsData, newYorkData); 
        }

    } catch (error) {
        console.error("Error in displayNews:", error.message);
    }
}


function createNews(guardianData, newsData, newYorkData) {

    let dataSecond = newsData.articles;
    let guardianFirst = guardianData.response.results;
    let newYorkThird = newYorkData.response.docs;

    let articlesWithImages = dataSecond.filter(dataSecond => dataSecond.urlToImage);

    let maxValueImg = 10;


    articlesWithImages.slice(0, maxValueImg).forEach(valueArticles => {
        const boxNews = document.createElement('div');
        const newsTitle = document.createElement('h2');
        const newsContent = document.createElement('p');
        const publishedAt = document.createElement('p');
        const author = document.createElement('p');
        const newsImg = document.createElement('img');
        const linkUrl = document.createElement('a')

        boxNews.setAttribute('id', 'boxNews');
        newsTitle.innerText = valueArticles.title;
        newsContent.innerText = valueArticles.description;
        publishedAt.innerText = `Published: ${new Date(valueArticles.publishedAt).toLocaleString()}`;
        author.innerText = valueArticles.author;
        newsImg.src = valueArticles.urlToImage;
        linkUrl.href = valueArticles.url;
        linkUrl.target = "_blank";
        linkUrl.innerText = "Read more";


        
        newsContainer.appendChild(boxNews);
        boxNews.appendChild(newsTitle);
        boxNews.appendChild(newsContent);
        boxNews.appendChild(publishedAt);
        boxNews.appendChild(author);
        boxNews.appendChild(newsImg);
        boxNews.appendChild(linkUrl);
        
        
    });

// SEARCH
async function searchNews(query) {
    const searchApiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=40cf19549c954aabbf7a9e4c3dd08677`;

    try {
        const response = await fetch(searchApiUrl);
        if (!response.ok) {
            errorHandle(response);
        }
        const data = await response.json();
        displaySearchResults(data.articles);
    } catch (error) {
        console.error("Error fetching search results:", error.message);
    }
}


function displaySearchResults(articles) {
    newsContainer.innerHTML = "";

    if (!articles || articles.length === 0) {
        newsContainer.innerHTML = "<p>No articles found for the search term.</p>";
        return;
    }

    let articlesWithImages = articles.filter(article => article.urlToImage && article.title && article.description);

    if (articlesWithImages.length === 0) {
        NewsContainer.innerHTML = "<p>No articles with images available for the search term.</p>";
        return;
    }

    const maxResults = 10;
    articlesWithImages.slice(0, maxResults).forEach((article) => {
        const boxNews = document.createElement('div');
        const newsTitle = document.createElement('h2');
        const newsContent = document.createElement('p');
        const publishedAt = document.createElement('p');
        const author = document.createElement('p');
        const newsImg = document.createElement('img');
        const linkUrl = document.createElement('a');

        boxNews.setAttribute('id', 'boxNews');
        newsTitle.innerText = article.title;
        newsContent.innerText = article.description || "No description available.";
        publishedAt.innerText = `Published: ${new Date(article.publishedAt).toLocaleString()}`;
        author.innerText = `Author: ${article.author || "Unknown"}`;
        newsImg.src = article.urlToImage || "placeholder.jpg";
        linkUrl.href = article.url;
        linkUrl.target = "_blank";
        linkUrl.innerText = "Read more";

        newsContainer.appendChild(boxNews);
        boxNews.appendChild(newsTitle);
        boxNews.appendChild(newsContent);
        boxNews.appendChild(publishedAt);
        boxNews.appendChild(author);
        if (article.urlToImage) boxNews.appendChild(newsImg);
        boxNews.appendChild(linkUrl);
    });
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query) {
        searchNews(query);
    } else {
        displayNews();
        location.reload()
    }
});
}

function errorHandle(response) {
    switch (response.status) {
        case 400:
            console.log('Error 400 - Bad Request');
            break;
        case 401:
            console.log('Error 401 - Unauthorized');
            break;
        case 402:
            console.log('Error 402 - Payment Required');
            break;
        case 403:
                console.log('Error 403 - Forbidden');
                break;
        case 404:
                console.log('Error 404 - Not Found');
                break;          
        case 405:
                console.log('Error 405 - Forbidden');
                break;
        case 406:
                console.log('Error 406 -  Not Acceptable');
                break;   
        case 408:
                console.log('Error 408 - Request Timeout');
                break;                   
        default:
            console.log(`Error - Unknown Status Code: ${response.status}`);
    } 
    throw new Error(`HTTP error! status: ${response.status}`);
}

displayNews();

