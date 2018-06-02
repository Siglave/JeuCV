"use strict";
import {loadAssets} from "./sprite";
import {Game} from "./game";
import {showInfoStage} from "./siteScript";

/// Create Polyfill to add requestAnimationFrame for ie9
(function() {
    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback, element) {
            return this.window.setTimeout(function(){
                callback();
            },16);
        };
    }
}());

document.addEventListener("DOMContentLoaded", function () {
    function initGameClass(objAssets) {
        var canvasBack = document.getElementById("game-background");
        var canvasGame = document.getElementById("game-canvas");
        var canvasUI = document.getElementById("game-ui");
        var ctxBack = canvasBack.getContext("2d");
        var ctxGame = canvasGame.getContext("2d");
        var ctxUI = canvasUI.getContext("2d");
        var ctxs = {
            ui: ctxUI,
            game: ctxGame,
            back: ctxBack
        };

        var game = new Game(
            objAssets,
            canvasBack.width,
            canvasBack.height,
            ctxs
        );
        document.getElementById("start-game").addEventListener("click",function(){
            $("#info-game").show();
            $("#first-page").hide("slow");
            showInfoStage(1);
            game.startGame();
        });
    }
    console.log("Pour voir le code : https://github.com/Siglave/JeuCV :p");
    
    loadAssets(initGameClass);
});