const guardianApi = "https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08";
const newsApi = "https://newsapi.org/v2/everything?q=Apple&from=2024-11-22&sortBy=popularity&apiKey=40cf19549c954aabbf7a9e4c3dd08677";
const newYorkApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=a9gTn2C71NQBedCyFhFG41nLOr1CbkJt";


const NewsContainer = document.getElementById('divContainer');

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


    console.log(dataSecond);
    console.log(guardianFirst);
    console.log(newYorkThird);


    let articlesWithImages = dataSecond.filter(dataSecond => dataSecond.urlToImage);
    console.log(articlesWithImages);

    let maxValueImg = 5;


    articlesWithImages.slice(0, maxValueImg).forEach(valueArticles => {
        const BoxNews = document.createElement('div');
        const newsTitle = document.createElement('h2');
        const newsContent = document.createElement('p');
        const publishedAt = document.createElement('p');
        const author = document.createElement('p');
        const NewsImg = document.createElement('img');
        const linkUrl = document.createElement('a')


        newsTitle.innerText = valueArticles.title;
        newsContent.innerText = valueArticles.description;
        publishedAt.innerText = valueArticles.publishedAt;
        author.innerText = valueArticles.author;
        NewsImg.src = valueArticles.urlToImage;
        linkUrl.href = valueArticles.url;
        linkUrl.target = "_blank";
        linkUrl.innerText = "Read more";


        
        NewsContainer.appendChild(BoxNews);
        BoxNews.appendChild(newsTitle);
        BoxNews.appendChild(newsContent);
        BoxNews.appendChild(publishedAt);
        BoxNews.appendChild(author);
        BoxNews.appendChild(NewsImg);
        BoxNews.appendChild(linkUrl);
        
        
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

