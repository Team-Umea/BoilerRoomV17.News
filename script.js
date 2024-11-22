// Function to fetch and display news
async function fetchAndDisplayNews(query = "") {
    const apiKey = "022e2d96-2cf9-421e-9b66-bc1ac2780e08";
    const apiUrl = query
        ? `https://content.guardianapis.com/search?q=${encodeURIComponent(query)}&api-key=${apiKey}`
        : `https://content.guardianapis.com/search?api-key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch news articles.");
        }

        const data = await response.json();
        const results = data.response.results;
        displayNews(results);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Function to display news
function displayNews(arr) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ""; // Clear previous results

    if (arr.length === 0) {
        newsContainer.innerHTML = "<p>No articles found.</p>";
        return;
    }

    arr.forEach((newsItem) => {
        // Create a container for each news item
        const newsBox = document.createElement("div");
        newsBox.classList.add("news-box");

        // Title
        const newsTitle = document.createElement("h3");
        newsTitle.innerText = newsItem.webTitle;

        // Section ID
        const section = document.createElement("p");
        section.innerText = `Category: ${newsItem.sectionId}`;

        // Publication Date
        const timeForCreation = document.createElement("p");
        timeForCreation.innerText = `Published: ${new Date(newsItem.webPublicationDate).toLocaleString()}`;

        // Link to the full article
        const linkToArticle = document.createElement("a");
        linkToArticle.innerText = "Read more";
        linkToArticle.href = newsItem.webUrl;
        linkToArticle.target = "_blank";

        // Append elements to the news box
        newsBox.appendChild(newsTitle);
        newsBox.appendChild(section);
        newsBox.appendChild(timeForCreation);
        newsBox.appendChild(linkToArticle);

        // Append the news box to the container
        newsContainer.appendChild(newsBox);
    });
}

// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    fetchAndDisplayNews(query);
});

// Trigger search when the user presses the Enter key
document.getElementById("searchInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        const query = document.getElementById("searchInput").value.trim();
        fetchAndDisplayNews(query);
    }
});

// Initial fetch to display some news on page load
fetchAndDisplayNews();
