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

let p1Img = document.getElementById('p1-img');
let p1Title = document.getElementById('p1-title');
let p1Content = document.getElementById('p1-txt');

let projects = document.getElementsByClassName('project');
let project2 = document.getElementById('p2');
let project3 = document.getElementById('p3');

var projectArr = []


window.addEventListener("load", () => {
    fetchProjects()
})

function fetchProjects() {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((data) => {
            projectArr.push(new Article(data));
        })

        projectArr = projectArr.slice(0,3); //filter the first 3 projects

        projectArr.forEach((project, index) => {
            let img = document.getElementById('p' + index + '-img');
            let title = document.getElementById('p' + index + '-title');
            let content = document.getElementById('p' + index + '-txt');

            title.innerHTML = project.name;
            content.innerHTML = project.content;
            img.src = project.img;
        })
    })
    .catch((err) => console.log(err)); 
}

function getProjectId() {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    let id = urlParams.get("projectId");
    console.log(projectArr);
    console.log(projectArr[0].Article);
     

    projectArr.forEach((element) => console.log(element));

    let project;

    for (let i = 0; i <= arguments.length; i++){
        if(projectArr[i] == id) {
            project = projectArr[i];
        }
    }
    
    //console.log(project, id);
       
    
}



