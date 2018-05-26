function downloadPdf(){
    document.getElementById("pdf-cv").click();
}

function changeBackgroundSite(choiceBack){
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
// hide all panel expect the one pass in parameter
function showInfoStage(stageToShow){
    var tabIdStage = ["stage-one","stage-two","stage-three","stage-four","stage-five"];

    tabIdStage.map(function(idStageBlock,index){
        if(stageToShow == index+1){
            $("#"+idStageBlock).show("slow");
        }else{
            $("#"+idStageBlock).hide();
        }
    });
}

