class Article {
    constructor(data) {
        this.id = data.uuid;
        this.name = data.name;
        this.description = data.description;
        this.content = data.content;
        this.img = data.image;
        this.date = data.date;
    }
}

var projectArr = []

window.addEventListener("load", () => {
   fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((article) => {
            projectArr.push(new Article(article))       
        })            

    })
    .catch((err) => console.log(err)); 
    console.log(projectArr)
})


