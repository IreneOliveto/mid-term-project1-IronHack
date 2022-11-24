class Article {
    constructor(data) {
        this.id = data.uuid;
        this.name = data.name;
        this.description = data.description;
        this.content = data.content;
        this.img = data.image;
        this.date = data.completed_on;

    }
}

let p1Img = document.getElementById('p1-img');
let p1Title = document.getElementById('p1-title');
let p1Content = document.getElementById('p1-txt');

var projectArr = []

// fetch projects on the homepage
function fetchProjects() {
    return fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")

    .then((response) => response.json())
    .then((data) => {
        data.forEach((data) => {
            projectArr.push(new Article(data));
        })

        projectArr.reverse();

        getThreeProjects();

        mappingArr(projectArr);


    })
    .catch((err) => console.log(err)); 
}

//filter the first 3 projects
function getThreeProjects() {
    return [...projectArr].slice(0,3);
}

//map on the project array
function mappingArr(arr) {
    projectArr.forEach((project, index) => {
        let img = document.getElementById('p' + index + '-img');
        let title = document.getElementById('p' + index + '-title');
        let description = document.getElementById('p' + index + '-description');
        let date = document.getElementById('p' + index + '-date');
        
        title.innerHTML = project.name;
        description.innerHTML = project.description;
        img.src = project.img;
        
    });
}

// fetch project and set data on the project page
async function loadProjectPage(){

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    let id = urlParams.get("projectId");

    //validate if url contains id
    if (id !== null && id !==  undefined) {

        await fetchProjects();
        setProjectData();

    } else {
        
        await fetchProjects();
        let randomNumber = Math.floor(Math.random() * projectArr.length);
        console.log(projectArr[randomNumber]);
        
        let mainProject = projectArr[randomNumber];
        let otherProjects = projectArr.filter((project) => project !== mainProject );
        
        let mainImg = document.getElementById('p-img');
        let mainTitle = document.getElementById('p-title');
        let mainDescription = document.getElementById('p-description');
        let mainContent = document.getElementById('p-txt');
        let mainDate = document.getElementById('p-date');

        mainImg.src = mainProject.img;
        mainTitle.innerHTML = mainProject.name;
        mainDescription.innerHTML = mainProject.description;
        console.log(mainProject.date)
        mainDate.innerHTML = mainProject.date;
        mainContent.innerHTML = mainProject.content;

        mappingArr(otherProjects);  
    
    }

}




// filter project based on the id
function setProjectData() {

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    let id = urlParams.get("projectId");
    
    let mainProject = projectArr.filter((project) => project.id == id);
    console.log(mainProject);

    let otherProjects = projectArr.filter((project) => project.id != id);
    console.log(otherProjects);

    let mainImg = document.getElementById('p-img');
    let mainTitle = document.getElementById('p-title');
    let mainDescription = document.getElementById('p-description');
    let mainContent = document.getElementById('p-txt');
    let mainDate = document.getElementById('p-date');

    mainImg.src = mainProject[0].img;
    mainTitle.innerHTML = mainProject[0].name;
    mainDescription.innerHTML = mainProject[0].description;
    mainDate.innerHTML = mainProject[0].date;
    mainContent.innerHTML = mainProject[0].content;

    mappingArr(otherProjects); 
  
}



