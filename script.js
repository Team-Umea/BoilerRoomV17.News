
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
    console.log("data", data.response.results);
})
.catch((error) => {
    console.error("u got ERROR sir", error);
});



function createTitle() {
    for (let i = 0; i < data.length; i++) {
        
        
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

