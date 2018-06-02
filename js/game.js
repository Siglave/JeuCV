"use strict";

import {Character} from "./elementsGame";
import {Sprite} from "./sprite";
import {createStage1,createStage3,createStage5,createStageForest,createStageWestern} from "./creationStages";

export class CollisionDetector {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    isCollisionCoord(xObj1, yObj1, wObj1, hObj1, xObj2, yObj2, wObj2, hObj2) {
        if (
            xObj1 < xObj2 + wObj2 &&
            xObj1 + wObj1 > xObj2 &&
            yObj1 < yObj2 + hObj2 &&
            hObj1 + yObj1 > yObj2
        ) {
            return true;
        } else {
            return false;
        }
    }
    isCollisionElem(elem1, elem2) {
        if (
            elem1.x < elem2.x + elem2.width &&
            elem1.x + elem1.width > elem2.x &&
            elem1.y < elem2.y + elem2.height &&
            elem1.height + elem1.y > elem2.y
        ) {
            return true;
        } else {
            return false;
        }
    }
    isOutCanvas(elem) {
        elem.setIsCollision(false);
        if (elem.y <= 0) {
            //Check up
            elem.effectCollision({
                type: "canvas",
                direction: "up"
            });
            return {
                isOut: false
            };
        }
        if (elem.y + elem.height >= this.canvasHeight) {
            //Check down
            elem.effectCollision({
                type: "canvas",
                direction: "down"
            });
            return {
                isOut: false
            };
        }
        if (elem.x < 0) {
            //Check left
            return elem.effectCollision({
                type: "canvas",
                direction: "left",
                offset: elem.x + elem.width,
                canvasWidth: this.canvasWidth
            });
        }
        if (elem.x + elem.width >= this.canvasWidth) {
            //Check right
            return elem.effectCollision({
                type: "canvas",
                direction: "right"
            });
        }
        return {
            isOut: false
        };
    }
    passPortal(portal, character, fromLeft) {
        if (fromLeft) {
            if (character.x >= portal.x) {
                return true;
            } else {
                return false;
            }
        } else {
            if (character.x <= portal.x) {
                return true;
            } else {
                return false;
            }
        }
    } 
    //Out canvas compared to morty
    isOutCanvasRickAndMorty(morty, rick) {
        morty.setIsCollision(false);
        if (morty.x < 0) {
            //Check left
            return morty.effectCollision({
                type: "canvas",
                direction: "left",
                offset: morty.x + morty.width,
                canvasWidth: this.canvasWidth
            });
        }
        //add rick width because only morty can be control
        if (morty.x + morty.width + rick.width >= this.canvasWidth) {
            //Check right
            return morty.effectCollision({
                type: "canvas",
                direction: "right"
            });
        }
    }
}
export class Game {
    constructor(objAssets, canvasWidth, canvasHeight, ctxs) {
        this.ctxs = ctxs; // obj ctxs {ui:ctx,game:ctx,back:ctx}
        this.objAssets = objAssets;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.collisionDetector = new CollisionDetector(
            canvasWidth,
            canvasHeight
        );
        this.characters = {
            rick: new Character(
                objAssets.characters.rick[0],
                60,
                canvasHeight / 3 * 2 - 80,
                60,
                79
            ),
            morty: new Character(
                objAssets.characters.morty[2],
                0,
                canvasHeight / 3 * 2 - 79,
                60,
                79
            )
        };
        this.actualStage = 0;
        this.stages = this.createStages();

        this.switchStage = this.switchStage.bind(this);
    }
    startGame() {
        this.stages[this.actualStage].loadListeners();
        // Start Music
        this.stages[this.actualStage].startMusic();
        this.stages[this.actualStage].start(
            this.ctxs,
            this.canvasWidth,
            this.canvasHeight,
            this.switchStage
        );
       
    }
    switchStage() {
        //Clear all Canvas
        this.ctxs.back.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctxs.game.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctxs.ui.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        //Clean movement of characters
        this.characters.rick.restartCharacter();
        this.characters.morty.restartCharacter();
        //Remove event of previous stage
        this.stages[this.actualStage].removeListener();
        //Stop Music previous Stage
        this.stages[this.actualStage].pauseMusic();
        //Change stage
        this.actualStage += 1;
        // Start Music
        this.stages[this.actualStage].startMusic();
        //Load event for the next stage and start it
        this.stages[this.actualStage].loadListeners();
        this.stages[this.actualStage].start(
            this.ctxs,
            this.canvasWidth,
            this.canvasHeight,
            this.switchStage
        );
        var functAnim = animTransitionStage.bind(this);
        var valuexL = 0;
        var valuexR = this.canvasWidth / 2;

        var transiSprite = new Sprite(this.objAssets.ui.background[0],0,0,this.objAssets.ui.background[0].width,this.objAssets.ui.background[0].height);
        window.requestAnimationFrame(functAnim);

        function animTransitionStage() {
            // Draw transition between stage
            this.ctxs.ui.fillStyle = "black";
            //left
            this.ctxs.ui.clearRect(valuexL, 0, this.canvasWidth / 2, this.canvasHeight);
            this.stages[this.actualStage].transitionImg.draw(this.ctxs.ui,valuexL,0,this.canvasWidth / 2, this.canvasHeight);
            //right
            this.ctxs.ui.clearRect(valuexR, 0, this.canvasWidth / 2, this.canvasHeight);
            //this.ctxs.ui.fillRect(valuexR, 0, this.canvasWidth / 2, this.canvasHeight);
            this.stages[this.actualStage].transitionImg.draw(this.ctxs.ui,valuexR, 0, this.canvasWidth / 2, this.canvasHeight);
            valuexL -= 5;
            valuexR += 5;
            if (valuexL * -1 < this.canvasWidth / 2) {
                window.requestAnimationFrame(functAnim);
            }

        };
    }
    createStages() {
        var stages = [];
        /////////////////////////////// STAGE 1 //////////////////////////////////////////      
        var stage1 = createStage1.call(this);
        ///////////////////////// STAGE 2 //////////////////////////////////////
        var stage2 = createStageForest.call(this);
        /////////////////////STAGE 3////////////////////////////////////////////
        var stage3 = createStage3.call(this);
        /////////////////////////STAGE 4 WESTERN/////////////////////////////////
        var stage4 = createStageWestern.call(this);
        ///////////////////////// STAGE 5 //////////////////////////////////////////
        var stage5 = createStage5.call(this);
        /// Add all stages in object game 
        stages.push(stage1);
        stages.push(stage2);
        stages.push(stage3);
        stages.push(stage4);
        stages.push(stage5);
        
        return stages;
    }
}

export class Stage {
    constructor(
        elemStage,
        elemBack,
        characters,
        collisionDetector,
        fctKeyDown,
        fctKeyUp,
        transitionImg,
        srcMusic
    ) {
        this.elemStage = elemStage;
        this.elemBack = elemBack;
        this.fctKeyDown = fctKeyDown;
        this.fctKeyUp = fctKeyUp;
        this.characters = characters;
        this.startStage = false;
        this.collisionDetector = collisionDetector;
        this.transitionImg = new Sprite(transitionImg,0,0,transitionImg.width,transitionImg.height);
        this.sound = new Audio(srcMusic);
        this.sound.volume = 0.8;

        this.sound.addEventListener('ended',function(){
            this.currentTime = 0;
            this.play();
        });

        this.fctKeyDown = this.fctKeyDown.bind(this);
        this.fctKeyUp = this.fctKeyUp.bind(this);
    }
    loadListeners() {
        //load listeners bind this
        window.addEventListener("keydown", this.fctKeyDown);
        window.addEventListener("keyup", this.fctKeyUp);
    }
    removeListener() {
        //cancel listeners
        window.removeEventListener("keydown", this.fctKeyDown);
        window.removeEventListener("keyup", this.fctKeyUp);
    }
    startMusic(){
        this.sound.play();
    }
    pauseMusic(){
        this.sound.pause();
    }
}