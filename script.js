$(document).ready(function(){
    $(".card-link").hover(function(){
        $(this).toggleClass("icon-large");
    });
});

function loadRepo(){
    const xhttp = new XMLHttpRequest():
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            results = JSON.parse(this.responseText);
            document.getElementById("repo1").innerHTML = results[0].name;
        };
    };
    xhttp.open ("GET", "https://api.github.com/users/fborders08/repos", true);
    xhttp.send();
};

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let loadRepo = JSON.parse(this.responseText);
        document.getElementById("gitBio").innerHTML = loadRepo.bio;
    }
};