function downloadPdf(){
    document.getElementById("pdf-cv").click();
}

function changeBacgroundSite(choiceBack){
    var mainPage = document.getElementById("main-page");
    switch (choiceBack) {
        case "forest":
            mainPage.className = "background-forest";
            break;
            
        case "western":
            mainPage.className = "background-western";
            break;
            
        case "cv":
            mainPage.className = "background-cv";
            break;
    
        default:
            break;
    }
}