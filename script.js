fetch("https://newsapi.org/v2/everything?q=Apple&from=2024-11-22&sortBy=popularity&apiKey=40cf19549c954aabbf7a9e4c3dd08677")
.then((response)=>{

    if (!response.ok) {
        throw new Error("ERROR!!");
        
    } else {
        console.log("response: ",response);
        
        response.json()
    }
})
.then((data) => {
    console.log("data", data);
})
.catch((error) => {
    console.error("u got ERROR sir", error);
});