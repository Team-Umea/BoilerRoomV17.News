const newsBox0 = document.getElementById("box0");
const newsBox1 = document.getElementById("box1");
const newsBox2 = document.getElementById("box2");
const newsBox3 = document.getElementById("box3");
const newsBox4 = document.getElementById("box4");
const newsBox5 = document.getElementById("box5");
const newsBox6 = document.getElementById("box6");
const newsBox7 = document.getElementById("box7");

fetch("https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08")
.then((response)=>{
    if (!response.ok) {
        throw new Error("ERROR!!");
        
    } else {
        console.log("response: ",response);
        
       return response.json()
    }
})
.then((data) => {
    console.log("data", data.response);
    functionIndex0(data.response.results)
    functionIndex1(data.response.results)
    functionIndex2(data.response.results)
    functionIndex3(data.response.results)
    functionIndex4(data.response.results)
    functionIndex5(data.response.results)
    functionIndex6(data.response.results)
    functionIndex7(data.response.results)
})
.catch((error) => {
    console.error("u got ERROR sir", error);
});

function functionIndex0(arr) {
    for (let i = 0; i < 1; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox0.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox0.appendChild(newsDescription);
        newsBox0.appendChild(newsTime)
        
    }  
}
function functionIndex1(arr) {
    for (let i = 1; i < 2; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox1.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox1.appendChild(newsDescription);
        newsBox1.appendChild(newsTime)
        
    }  

}
function functionIndex2(arr) {
    for (let i = 2; i < 3; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox2.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox2.appendChild(newsDescription);
        newsBox2.appendChild(newsTime)
        
    }  

}
function functionIndex3(arr) {
    for (let i = 3; i < 4; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox3.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox3.appendChild(newsDescription);
        newsBox3.appendChild(newsTime)
        
    }  

}
function functionIndex4(arr) {
    for (let i = 4; i < 5; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox4.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox4.appendChild(newsDescription);
        newsBox4.appendChild(newsTime)
        
    }  

}
function functionIndex5(arr) {
    for (let i = 5; i < 6; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox5.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox5.appendChild(newsDescription);
        newsBox5.appendChild(newsTime)
        
    }  

}
function functionIndex6(arr) {
    for (let i = 6; i < 7; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox6.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox6.appendChild(newsDescription);
        newsBox6.appendChild(newsTime)
        
    }  

}
function functionIndex7(arr) {
    for (let i = 7; i < 8; i++) {
        
        
        const newsTitle = document.createElement("li");
        const newsTagg = document.createElement("a");
        const newsDescription = document.createElement("p");
        const newsTime = document.createElement("p")
        newsTagg.href = arr[i].webUrl;
        newsTagg.target = "_blank"; 
        newsTagg.innerText = arr[i].sectionId;
        newsDescription.innerText = arr[i].webTitle;
        newsTime.innerText = arr[i].webPublicationDate;

        newsBox7.appendChild(newsTitle);
        newsTitle.appendChild(newsTagg)
        newsBox7.appendChild(newsDescription);
        newsBox7.appendChild(newsTime)
        
    }  

}
