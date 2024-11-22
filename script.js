const newsBox0 = document.getElementById("box0");
const newsBox1 = document.getElementById("box1");
const newsBox2 = document.getElementById("box2");
const newsBox3 = document.getElementById("box3");
const newsBox4 = document.getElementById("box4");
const newsBox5 = document.getElementById("box5");
const newsBox6 = document.getElementById("box6");
const newsBox7 = document.getElementById("box7");
const newsBox8 = document.getElementById("box8");
const newsBox9 = document.getElementById("box9");
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
    sportFunction(data.response.results)

})
.catch((error) => {
    console.error("u got ERROR sir", error);
});



function sportFunction(arr) {
    for (let i = 1; i < 2; i++) {
        
        
        const newsTitle = document.createElement("li");
        newsTitle.innerText = arr[i].sectionId;    ;
        const newsDescription = document.createElement("p");
        newsDescription.innerText = arr[i].webTitle;    ;
        newsBox0.appendChild(newsTitle);
        newsBox0.appendChild(newsDescription);
    }

        
        
    
        

}
function creationDate() {
    
}
function createPTaggs() {
    
}
function createDescription() {
    
}
function createLiElement() {
    
}
function render() {
    
}

