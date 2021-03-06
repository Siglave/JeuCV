import {
    Stage
} from "./game";
import {
    Portal,
    Cloud,
    Bomb,
    Horse,
    createSkillOrBomb,
    createTextExperience
} from "./elementsGame";
import {
    BackParallax,
    Tile
} from "./elementsBack";
import {
    drawCvPart1,
    drawSkillsCv,
    drawScore,
    drawMovingCV,
    drawText,
    getCvPart1,
    getSkillsCv,
    getEndCV
} from "./elementsUi";
import {
    showInfoStage,
    changeBackgroundSite,
    downloadPdf
} from "./siteScript";
import {
    randomNumber,
    clearCircle
} from "./utilityCanvas";
import {
    Sprite
} from "./sprite";



// user interaction functions //
function fctMapKeyCode(elem) {
    if (elem.keyCode == event.keyCode) {
        elem.keyIsUp = true;
    }
}

function fctMapKeyUp(elem, charac) {
    if (elem.keyCode == event.keyCode) {
        this.characters[charac].animation.frame = 0;
        this.characters[charac].animation.direction = "stayStill";
        elem.keyIsUp = false;
        if (event.keyCode == 16) {
            this.characters[charac].animation.maxTime = 10;
            this.characters[charac].speed = 2;
        }
    }
};

function keyUpRickAndMorty(event) {
    if (event.defaultPrevented) {
        return;
    }
    var fctMapbind = fctMapKeyUp.bind(this);

    this.characters.rick.arrowMove.map(function (elem) {
        fctMapbind(elem, "rick");
    });
    this.characters.morty.arrowMove.map(function (elem) {
        fctMapbind(elem, "morty");
    });
    event.preventDefault();
}
////////////////////////////////
export function createStage1() {
    var stage1FctDown = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        //Only allow right move and sprint
        if (event.keyCode == 39 || event.keyCode == 16) {
            this.characters.rick.arrowMove.map(fctMapKeyCode);
            this.characters.morty.arrowMove.map(fctMapKeyCode);
        }

        event.preventDefault();
    };
    var elemStage = {
        portal: this.objAssets.elements.portal[0]
    };
    var stage1 = new Stage(
        elemStage, [],
        this.characters,
        this.collisionDetector,
        stage1FctDown,
        keyUpRickAndMorty,
        this.objAssets.ui.background[0],
        "assets/sounds/midstage.mp3"
    );

    stage1.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
        /// Show stage info UI ///
        showInfoStage(1);
        /// Change backgound of web site ///
        changeBackgroundSite("cv");

        // Define portal
        var portal = new Portal(this.elemStage.portal, 870, 320, 175, 175);

        var rick = this.characters.rick;
        var morty = this.characters.morty;
        var rickIsOut = false;
        var objCollision = this.collisionDetector;

        drawCvPart1(ctxs.ui, canvasWidth, canvasHeight);
        drawText(ctxs.ui, 900, 240, "Compétences", "bold 18px Lucida Sans Unicode", null, null);


        window.requestAnimationFrame(loop);

        function loop() {
            /// Clean canvas ///
            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
            /// Detect Collision ///
            objCollision.isOutCanvas(rick);
            objCollision.isOutCanvas(morty);

            morty.draw(ctxs.game);
            /// Make rick disappear if pass portal ///
            if (!(rick.x > portal.x)) {
                rick.draw(ctxs.game);
            } else {
                if (!rickIsOut) {
                    portal.sound.play();
                    rickIsOut = true;
                }
            }
            /// Draw portal ///
            portal.draw(ctxs.game);
            if (morty.x > portal.x) {
                portal.sound.play();
                fctStop();
            } else {
                window.requestAnimationFrame(loop);
            }
        }
    };

    return stage1;
}

export function createStageForest() {
    var stage2FctDown = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        this.characters.morty.arrowMove.map(fctMapKeyCode);

        event.preventDefault();
    };
    var stage2FctUp = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        var fctMapKeyUpBind = fctMapKeyUp.bind(this);
        this.characters.morty.arrowMove.map(function (elem) {
            fctMapKeyUpBind(elem, "morty");
        });

        event.preventDefault();
    };
    var elemStage2 = {
        morty: this.objAssets.characters.morty,
        rick: this.objAssets.characters.rick,
        clouds: this.objAssets.elements.clouds,
        skills: this.objAssets.elements.skills,
        bomb: this.objAssets.elements.bomb,
        explosion: this.objAssets.effects.explosion,
        portal: this.objAssets.elements.portal,
        uiInfo: this.objAssets.ui.elementInfo
    }
    var elemBackStage2 = this.objAssets.background.forest;
    var stage2 = new Stage(
        elemStage2,
        elemBackStage2,
        this.characters,
        this.collisionDetector,
        stage2FctDown,
        stage2FctUp,
        this.objAssets.ui.background[1],
        "assets/sounds/cycles.mp3"

    );

    stage2.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
        /// Show stage info UI ///
        showInfoStage(2);
        //////////////////////////
        var elemStage = this.elemStage;
        var imgToHide = this.transitionImg;
        var endStage = false;
        /// Change backgound of web site ///
        changeBackgroundSite("forest");
        // Draw all backgrounds elements
        this.elemBack.map(function (elem) {
            var s = new Sprite(elem, 0, 0, elem.width, elem.height);
            s.draw(ctxs.back, 0, 0, canvasWidth, canvasHeight);
        });
        ///////////////////////////////////////////
        // Create Clouds and Skills
        var skills = [];
        var bombs = [];
        var clouds = [];
        for (var i = 0; i < 15; i++) {
            var cloud = new Cloud(
                this.elemStage.clouds[randomNumber(0, this.elemStage.clouds.length - 1)],
                canvasWidth + randomNumber(0, canvasWidth),
                randomNumber(0, 150),
                110,
                70
            );
            cloud.speed = randomNumber(1, 3);

            var skillOrBomb = createSkillOrBomb(this.elemStage.skills, this.elemStage.bomb[0], this.elemStage.explosion[0], cloud, canvasWidth);
            if (skillOrBomb.type == "skill") {
                skills.push(skillOrBomb.obj);
            } else {
                bombs.push(skillOrBomb.obj);
            }
            clouds.push(cloud);
        }
        //////////////////////////////////////
        /// Init characters ///
        this.characters.rick.x = 800;
        this.characters.rick.y = 50;
        var rick = this.characters.rick;
        this.characters.morty.x = (canvasWidth / 2) - this.characters.morty.width / 2;
        this.characters.morty.y = 465;
        this.characters.morty.changeImg(this.elemStage.morty[0]);
        var morty = this.characters.morty;
        ///////////////////////////////
        /// Create Cloud for Rick ///
        var cloudRick = {
            x: 780,
            y: 80,
            width: 110,
            height: 70,
            img: new Sprite(
                this.elemStage.clouds[0],
                0,
                0,
                this.elemStage.clouds[0].width,
                this.elemStage.clouds[0].height
            )
        }
        //Detect Collision
        var objCollision = this.collisionDetector;
        //////////////////////
        //Player
        var scorePlayer = 0;
        var visionPlayer = 100;
        //////////
        window.requestAnimationFrame(loopGame);

        function loopGame() {
            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);
            // Collision
            objCollision.isOutCanvas(morty);

            //////////////
            /// Hide parts of the game ///
            if (visionPlayer < 550) {
                /// Draw the img on top of the game ///
                imgToHide.draw(ctxs.ui, 0, 0, canvasWidth, canvasHeight);
                /// to see morty ///
                clearCircle(ctxs.ui, visionPlayer, morty.x, morty.y, 30, 30);
                /// to see rick ///
                clearCircle(ctxs.ui, 70, rick.x, rick.y, 30, 35);
            }
            //////////////////               
            /// Draw Clouds ///
            var testCollisionCloud;
            clouds.map(function (cloud) {
                // Detect if cloud out of canvas
                testCollisionCloud = objCollision.isOutCanvas(cloud);
                if (testCollisionCloud.isOut) {
                    var skillOrBomb = createSkillOrBomb(elemStage.skills, elemStage.bomb[0], elemStage.explosion[0], cloud, canvasWidth);
                    if (skillOrBomb.type == "skill") {
                        skills.push(skillOrBomb.obj);
                    } else {
                        bombs.push(skillOrBomb.obj);
                    }
                }
                cloud.draw(ctxs.game);
            });
            // Draw skills elements
            skills.map(function (skill, index) {
                if (
                    objCollision.isCollisionCoord(
                        morty.x,
                        morty.y,
                        morty.width,
                        morty.height,
                        skill.x,
                        skill.y,
                        skill.width,
                        skill.height - 35
                    ) && !skill.collision
                ) { // There is collision with morty
                    setTimeout(function () {
                        scorePlayer += skill.score;
                        visionPlayer += 10 * skill.score;
                        skill.collision = true;
                        skill.sound.play();
                        if (visionPlayer >= 200) {
                            if (visionPlayer >= 350) {
                                if (visionPlayer >= 500) {
                                    morty.changeImg(elemStage.morty[3]);
                                } else {
                                    morty.changeImg(elemStage.morty[2]);
                                }
                            } else {
                                morty.changeImg(elemStage.morty[1]);
                            }
                        }
                        if (scorePlayer >= 50) {
                            endStage = true;
                        }
                    }, 0);
                } else { // No collision with morty
                    //remove skill from array if out canvas or he disappear from game
                    if (skill.y > canvasHeight || skill.alpha < 0) {
                        setTimeout(function () {
                            skills.splice(index, 1);
                        }, 0);
                    } else {
                        if (skill.x < skill.distanceFall) {
                            // if skill fall draw behind the img who cover the game
                            skill.draw(ctxs.game);
                        } else {
                            skill.draw(ctxs.ui);
                        }
                    }
                }
            });
            // Draw bombs
            bombs.map(function (bomb, index) {
                if (
                    objCollision.isCollisionCoord(
                        morty.x,
                        morty.y,
                        morty.width,
                        morty.height,
                        bomb.x,
                        bomb.y,
                        bomb.width,
                        bomb.height - 35
                    ) && !bomb.explode
                ) { // Collision with morty
                    if (scorePlayer > 0) {
                        scorePlayer -= 1;
                    }
                    bomb.explode = true;
                    bomb.sound.play();
                    if (visionPlayer >= 100) {
                        visionPlayer -= 20;

                        if (visionPlayer <= 200) {
                            morty.changeImg(elemStage.morty[0]);
                        } else {
                            if (visionPlayer <= 350) {
                                morty.changeImg(elemStage.morty[1]);
                            } else {
                                if (visionPlayer <= 500) {
                                    morty.changeImg(elemStage.morty[2]);
                                } else {
                                    morty.changeImg(elemStage.morty[3]);
                                }
                            }
                        }
                    }
                } else { // No collision with morty
                    // Remove bomb from array if is out or explosion ends
                    if (bomb.y > canvasHeight || bomb.animation.explosion.frame >= 12) {
                        setTimeout(function () {
                            bombs.splice(index, 1);
                        }, 0);
                    } else {
                        if (bomb.x < bomb.distanceFall) {
                            bomb.draw(ctxs.game);
                        } else {
                            bomb.draw(ctxs.ui);

                        }
                    }
                }
            });

            ////////////////////
            /// Draw cloud of rick ///
            cloudRick.img.draw(ctxs.game, cloudRick.x, cloudRick.y, cloudRick.width, cloudRick.height);
            /// Draw Rick and Morty
            rick.draw(ctxs.game);
            morty.draw(ctxs.game);
            //
            //Draw UI/////
            drawScore(ctxs.ui, canvasWidth / 2, 50, scorePlayer, canvasWidth);
            //////////////

            if (endStage) {
                clouds.map(function (cloud) {
                    cloud.speed = cloud.speed * 2;
                });
                skills.map(function (skill) {
                    skill.speed = skill.speed * 2;
                });
                bombs.map(function (bomb) {
                    bomb.speed = bomb.speed * 2;
                });
                window.requestAnimationFrame(loopEnd);
            } else {
                window.requestAnimationFrame(loopGame);
            }
        }
        var portalMorty = new Portal(this.elemStage.portal[0], 925, 410, 175, 175);
        portalMorty.setScaleXY(0, 0);
        var trueEndStage = false;
        // allow to start the sound of the portal only once
        var rickIsOut = false;

        function loopEnd() {

            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);
            // Collision
            objCollision.isOutCanvas(morty);
            /// Draw cloud Rick /// 
            cloudRick.img.draw(ctxs.game, cloudRick.x, rick.y + 30, cloudRick.width, cloudRick.height);
            morty.draw(ctxs.game);
            drawScore(ctxs.ui, canvasWidth / 2, 50, scorePlayer, canvasWidth);

            if (objCollision.passPortal(portalMorty, morty, true)) {
                trueEndStage = true;
                portalMorty.sound.play();
                fctStop();

            }
            // make rick disappear if he pass the portal
            if (portalMorty.x > rick.x) {
                rick.draw(ctxs.game);
            } else {
                if (!rickIsOut) {
                    portalMorty.sound.play();
                    rickIsOut = true;
                }
            }

            if (rick.y < morty.y) {
                // Make rick fall 
                rick.y += 1.5;
                if (morty.x + morty.width * 2 >= portalMorty.x) {
                    morty.x -= morty.speed * 2;
                }
            } else { // Rick same level as morty
                // Make portal appear
                if (portalMorty.scaleX < 0.4 || portalMorty.scaleY < 1) {
                    if (portalMorty.scaleX < 0.4) {
                        portalMorty.scaleX += 0.002;
                    }
                    if (portalMorty.scaleY < 1) {
                        portalMorty.scaleY += 0.01;
                    }
                } else { // Portal completely appear
                    // Move rick toward the portal
                    rick.arrowMove.map(function (elem) {
                        if (elem.keyCode == 39 && !elem.keyIsUp) {
                            rick.animation.maxTime = 20;
                            rick.speed = 1;
                            elem.keyIsUp = true;
                        }
                    });
                }
                portalMorty.draw(ctxs.game);
            }

            //Clean Cloud
            clouds.map(function (cloud, index) {
                objCollision.isOutCanvas(cloud);
                cloud.draw(ctxs.game);
            });
            //Clean skills
            skills.map(function (skill, index) {
                if (skill.y > canvasHeight) {
                    setTimeout(function () {
                        skills.splice(index, 1);
                    }, 0);
                } else {
                    skill.draw(ctxs.game);
                }
            });
            //Clean bombs
            bombs.map(function (bomb, index) {
                if (bomb.y > canvasHeight || bomb.animation.explosion.frame >= 12) {
                    setTimeout(function () {
                        bombs.splice(index, 1);
                    }, 0);
                } else {
                    bomb.draw(ctxs.game);
                }
            });

            if (!trueEndStage) {
                window.requestAnimationFrame(loopEnd);
            }
        }
    };
    return stage2;
}

export function createStage3() {

    var stage3FctDown = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        //Only allow right move and sprint
        if (event.keyCode == 39 || event.keyCode == 16) {
            this.characters.rick.arrowMove.map(fctMapKeyCode);
            this.characters.morty.arrowMove.map(fctMapKeyCode);
        }

        event.preventDefault();
    };

    var elemStage3 = {
        portal: this.objAssets.elements.portal[0]
    };

    var stage3 = new Stage(
        elemStage3, [],
        this.characters,
        this.collisionDetector,
        stage3FctDown,
        keyUpRickAndMorty,
        this.objAssets.ui.background[0],
        "assets/sounds/midstage.mp3"
    );

    stage3.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
        /// Show stage info UI ///
        showInfoStage(3);
        /// Change backgound web site ///
        changeBackgroundSite("cv");

        // Define portal
        var portal = new Portal(this.elemStage.portal, 870, 320, 175, 175);

        var rick = this.characters.rick;
        var morty = this.characters.morty;
        rick.x = 460;
        rick.y = canvasHeight / 3 * 2 - 80
        morty.x = 400;
        morty.y = canvasHeight / 3 * 2 - 79;

        var objCollision = this.collisionDetector;

        // allow to start the sound of the portal only once
        var rickIsOut = false;
        window.requestAnimationFrame(loop);

        function loop() {
            objCollision.isOutCanvas(rick);
            //objCollision.trucRick(rick,morty.x+morty.width);
            objCollision.isOutCanvas(morty);
            //gameDraw
            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);

            drawCvPart1(ctxs.back, canvasWidth, canvasHeight);
            drawSkillsCv(ctxs.back, canvasWidth, canvasHeight);
            ctxs.ui.fillStyle = "black";
            drawText(ctxs.ui, 795, 260, "Expériences/Diplômes", "bold 18px Lucida Sans Unicode", "start");


            if (!(rick.x > portal.x)) {
                rick.draw(ctxs.game);
            } else {
                if (!rickIsOut) {
                    portal.sound.play();
                    rickIsOut = true;
                }
            }
            morty.draw(ctxs.game);
            //Draw portal
            portal.draw(ctxs.game);

            if (morty.x > portal.x) {
                portal.sound.play();
                fctStop();
            } else {
                window.requestAnimationFrame(loop);
            }
        }
    };
    return stage3;
}

export function createStageWestern() {
    var stage4FctDown = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        if (event.keyCode == 32) {
            // Verify if the horse can jump
            // if true reset the jump animation
            if (this.characters.horse.actualJump < this.characters.horse.maxJump) {
                // Jump
                this.characters.horse.isJumping = true;
                this.characters.horse.movementJumpUp = true;
                this.characters.horse.animation.frame = 0;
                this.characters.horse.velocityY = -15;
                this.characters.horse.actualJump++;
                // Sound
                this.characters.horse.soundJump.currentTime = 0;
                this.characters.horse.soundJump.play();
            }
        }
        event.preventDefault();
    };
    var stage4FctUp = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        event.preventDefault();
    };
    var elemStage4 = {
        portal: this.objAssets.elements.portal[0],
        cloud: this.objAssets.elements.clouds[0],
        mortyCowboy: this.objAssets.characters.morty[4],
        rickCowboy: this.objAssets.characters.rick[1],
    };
    var elemBackStage4 = {
        western: this.objAssets.background.western,
        tilesGrass: this.objAssets.tiles.grass
    }
    var stage4 = new Stage(
        elemStage4,
        elemBackStage4,
        this.characters,
        this.collisionDetector,
        stage4FctDown,
        stage4FctUp,
        this.objAssets.ui.background[2],
        "assets/sounds/country.mp3"

    );
    //Add horse character in stage4
    stage4.characters.horse = new Horse(this.objAssets.characters.horse[0], 0, 450, 156, 120);
    stage4.characters.horse.animation.direction = "run";

    stage4.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
        /// Show stage info UI ///
        showInfoStage(4);
        /// Change background web site ///
        changeBackgroundSite("western");
        //Define objectCollision
        var objCollision = this.collisionDetector;
        //Define speed for each background
        var tabSpeed = [0, 0, 0, 0.3, 1, 0.5, 1.5, 1.8, 3];
        var tabParralaxBack = [];
        this.elemBack.western.map(function (elem, index) {
            tabParralaxBack.push(new BackParallax(elem, 0, 0, elem.width, elem.height, tabSpeed[index]));
        });
        //Create Tiles Grass
        var tilesGrass = [
            new Tile(this.elemBack.tilesGrass[0], 0, 530, 360, 120, 4),
            new Tile(this.elemBack.tilesGrass[0], 360, 530, 360, 120, 4),
            new Tile(this.elemBack.tilesGrass[0], 720, 530, 360, 120, 4),
            new Tile(this.elemBack.tilesGrass[0], 1080, 530, 360, 120, 4),
        ];
        //Create Experience elements
        var tabExperience = [];
        var tabText = ["Dut Informatique, Paris Descartes", "Ifocop, Formation Dev JS", "Dev Web, Institut de France", "Dev Web, Le Smartsitting"];
        // Every 3 sec create new TextExperience
        var idIntervalExp = setInterval(function () {
            tabExperience.push(createTextExperience(ctxs.game, canvasWidth));
        }, 3000);
        //Access horse character////
        var horse = this.characters.horse;
        //Set rick position////
        var rick = this.characters.rick;
        rick.changeImg(this.elemStage.rickCowboy);
        rick.x = horse.x + 65;
        rick.y = 435;
        rick.width = 50;
        rick.height = 65.5;
        rick.animation.direction = "right";
        //Set morty position
        var morty = this.characters.morty;
        morty.changeImg(this.elemStage.mortyCowboy);
        morty.x = 820;
        morty.y = 410;
        morty.animation.direction = "left";
        morty.animation.frame = 0;
        // Create Cloud for Morty
        var cloud = {
            x: 800,
            y: 450,
            width: 110,
            height: 70,
            img: new Sprite(
                this.elemStage.cloud,
                0,
                0,
                this.elemStage.cloud.width,
                this.elemStage.cloud.height
            )
        }
        /// Create Portal ///
        var portalEnd = new Portal(this.elemStage.portal, 100, 420, 175, 175);
        portalEnd.setScaleXY(0, 0);

        var stopMainLoop = false;

       
        //Start loop
        window.requestAnimationFrame(loop);

        function loop() {
            if (!stopMainLoop) {

                //Clear background ////
                ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);

                //Draw background ////
                tabParralaxBack.map(function (elemBack) {
                    elemBack.draw(ctxs.back, canvasWidth, canvasHeight);
                });
                /// Draw Morty and Cloud ///
                cloud.img.draw(ctxs.game, cloud.x, cloud.y, cloud.width, cloud.height);
                morty.draw(ctxs.game);
                morty.animation.actualTime = 0; //to stay in the 1st frame of "right" position
                //Draw Rick ////
                rick.y = horse.y - 15;
                rick.x = horse.x + 65;
                rick.draw(ctxs.game);
                rick.animation.actualTime = 0; //to stay in the 1st frame of "right" position
                //Draw Tiles ////
                tilesGrass.map(function (tile) {
                    tile.draw(ctxs.game);
                    if (tile.x + tile.width < 0) {
                        tile.x = canvasWidth;
                    }
                });
                //Draw Text Experience ////
                tabExperience.map(function (exp, index) {
                    //Detect Collision
                    if (objCollision.isCollisionElem(horse, exp) && !exp.isCollision) {
                        exp.sound.play();
                        // Propagate collsion to element
                        exp.effectCollision({
                            type: "horse"
                        })
                        horse.effectCollision({
                            type: "experience"
                        })
                    }
                    if (exp.isCollision && exp.scaleX <= -1) {
                        setTimeout(function () {
                            tabExperience.splice(index, 1);
                        }, 0);
                    }
                    exp.draw(ctxs.game);
                });
                /// Draw horse ////
                //collisionHorse
                objCollision.isOutCanvas(horse);
                horse.draw(ctxs.game);

                ///Draw this background to appear in front of the horse ///
                tabParralaxBack[8].draw(ctxs.game, canvasWidth, canvasHeight);
                //Detection collision rick & morty
                if (objCollision.isCollisionElem(rick, morty)) {
                    stopMainLoop = true;
                    clearInterval(idIntervalExp);
                }

                window.requestAnimationFrame(loop);
            } else {
                window.requestAnimationFrame(decreaseSpeedGame);
            }
        }
        var decreaseSpeedOver = false;

        function decreaseSpeedGame() {
            if (!decreaseSpeedOver) {

                /// Clear background ////
                ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
                /// Draw background ////
                tabParralaxBack.map(function (elemBack) {
                    elemBack.draw(ctxs.back, canvasWidth, canvasHeight);
                    /// Decrease speed ///
                    if (elemBack.speed > 0) {
                        elemBack.speed -= 0.01;
                        if (elemBack.speed < 0) {
                            elemBack.speed = 0;
                        }
                    }

                });
                /// Draw Morty and Cloud ///
                cloud.img.draw(ctxs.game, cloud.x, cloud.y, cloud.width, cloud.height);
                morty.draw(ctxs.game);
                morty.animation.actualTime = 0; //to stay in the 1st frame of right animation
                //Draw Rick ////
                rick.y = horse.y - 15;
                rick.x = horse.x + 65;
                rick.draw(ctxs.game);
                rick.animation.actualTime = 0; //to stay in the 1st frame of right animation
                //Draw Text Experience ////
                tabExperience.map(function (exp, index) {
                    //Detect Collision
                    if (exp.isCollision && exp.scaleX <= -1) {
                        setTimeout(function () {
                            tabExperience.splice(index, 1);
                        }, 0);
                    }
                    exp.draw(ctxs.game);
                });
                tilesGrass.map(function (tile) {
                    tile.draw(ctxs.game);
                    /// Decrease speed ///
                    if (tile.speed > 0) {
                        tile.speed -= 0.01;
                        if (tile.speed < 0) {
                            tile.speed = 0;
                            horse.animation.direction = "stayStill";
                            decreaseSpeedOver = true;
                            horse.soundRun.pause();
                        }
                    }
                    if (tile.x + tile.width < 0) {
                        tile.x = canvasWidth;
                    }
                });

                horse.draw(ctxs.game);

                ///Draw this background to appear in front of the horse ///
                tabParralaxBack[8].draw(ctxs.game, canvasWidth, canvasHeight);
                window.requestAnimationFrame(decreaseSpeedGame);
            } else {
                window.requestAnimationFrame(endLoop);
            }
        }

        function endLoop() {

            if (rick.y < 497 || morty.y < 490) {
                // Make rick fall of the horse and morty from the cloud
                if (rick.y < 497) {
                    rick.y += 2;
                }
                if (morty.y < 490) {
                    morty.y += 2;
                }
            } else {
                // Move rick and morty
                if (!morty.arrowMove[0].keyIsUp) {
                    morty.arrowMove[0].keyIsUp = true;
                }
                if (!rick.arrowMove[0].keyIsUp) {

                    rick.arrowMove[0].keyIsUp = true;
                }
                // Make portal appear
                if (portalEnd.scaleX < 0.4 || portalEnd.scaleY < 1) {
                    if (portalEnd.scaleX < 0.4) {
                        portalEnd.scaleX += 0.002;
                    }
                    if (portalEnd.scaleY < 1) {
                        portalEnd.scaleY += 0.01;
                    }
                }
            }
            var rickPassPortal = objCollision.passPortal(portalEnd, rick, false);
            var mortyPassPortal = objCollision.passPortal(portalEnd, rick, false);



            /// Clear background ////
            ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            /// Draw background ////
            tabParralaxBack.map(function (elemBack) {
                elemBack.draw(ctxs.back, canvasWidth, canvasHeight);
            });
            /// Draw horse && Cloud///
            cloud.img.draw(ctxs.game, cloud.x, cloud.y, cloud.width, cloud.height);
            horse.draw(ctxs.game);
            /// Draw Rick & Morty ///
            if (!mortyPassPortal) {
                morty.draw(ctxs.game);
            } else {
                portalEnd.sound.play();
            }
            if (!rickPassPortal) {
                rick.draw(ctxs.game);
            } else {
                portalEnd.sound.play();
            }
            /// Draw Grass ///
            tilesGrass.map(function (tile) {
                tile.draw(ctxs.game);
            });
            /// Draw Portal ///
            portalEnd.draw(ctxs.game);
            ///Draw this background to appear in front of the horse ///
            tabParralaxBack[8].draw(ctxs.game, canvasWidth, canvasHeight);
            if (rickPassPortal && mortyPassPortal) {
                horse.soundRun.pause();
                fctStop();
            } else {
                window.requestAnimationFrame(endLoop);
            }
        }

    };
    return stage4;
}

export function createStage5() {
    var stage5FctDown = function (event) {
        if (event.defaultPrevented) {
            return;
        }
        //Only allow left, right and sprint moves
        if (event.keyCode == 39 || event.keyCode == 37 || event.keyCode == 16) {
            this.characters.rick.arrowMove.map(fctMapKeyCode);
            this.characters.morty.arrowMove.map(fctMapKeyCode);
        }

        event.preventDefault();
    };
    var elemStage5 = {
        portal: this.objAssets.elements.portal[0]
    };

    var stage5 = new Stage(
        elemStage5, [],
        this.characters,
        this.collisionDetector,
        stage5FctDown,
        keyUpRickAndMorty,
        this.objAssets.ui.background[0],
        "assets/sounds/midstage.mp3"
    );

    stage5.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
        /// Show stage info UI ///
        showInfoStage(5);
        /// Change background web site ///
        changeBackgroundSite("cv");

        ctxs.back.fillStyle = "white";
        ctxs.back.fillRect(0, 0, canvasWidth, canvasHeight);

        var rick = this.characters.rick;
        var morty = this.characters.morty;
        rick.x = 460;
        rick.y = canvasHeight / 3 * 2 - 79;
        morty.x = 400;
        morty.y = canvasHeight / 3 * 2 - 79;

        var objCollision = this.collisionDetector;

        var tabElemnentCV = getCvPart1(canvasWidth, canvasHeight).concat(
            getSkillsCv(canvasWidth, canvasHeight).concat(
                getEndCV(canvasWidth, canvasHeight)
            )
        );
        /// object to display download Pdf text ///
        var pdfText = {
            x: 690,
            y: 350,
            timeCvDownloaded: 0,
            text: "Télécharger le CV ici !",
            font: "bold 24px Lucida Sans Unicode",
            align: "start",
            color: "black",
            isDownload: false,
            draw: function (ctx) {
                ctx.fillStyle = this.color;
                drawText(ctx, this.x, this.y, this.text, this.font, this.align);
            }
        }
        /// allow to change the color of the text ///
        var idInterPdf = setInterval(function () {
            if (!pdfText.isDownload) {
                if (pdfText.color == "black") {
                    pdfText.color = "red";
                } else {
                    pdfText.color = "black";
                }
            }
        }, 700);
        window.requestAnimationFrame(loop);

        function loop() {
            objCollision.isOutCanvasRickAndMorty(morty, rick);
            /// Clean all canvas ///
            ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
            ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);
            /// Draw "Download pdf" /// 
            pdfText.draw(ctxs.ui);
            /// Collision for object Download Pdf /// 
            if (morty.x > pdfText.x) {
                if (!pdfText.isDownload) {
                    downloadPdf();
                    pdfText.isDownload = true;
                    pdfText.color = "green";
                    pdfText.text = "CV Téléchargé !";
                    pdfText.timeCvDownloaded++;
                }
            } else {
                if (pdfText.isDownload) {
                    pdfText.isDownload = false;
                    pdfText.text = "Télécharger le CV ici !";
                    if (!(pdfText.timeCvDownloaded > 3)) {
                        for (var i = 0; i < pdfText.timeCvDownloaded; i++) {
                            pdfText.text = "Re" + pdfText.text;
                        }
                    } else {
                        pdfText.text = "Stop !";
                    }

                }
            }
            drawMovingCV(ctxs.back, tabElemnentCV, canvasWidth, canvasHeight);
            /// Draw rick and morty ///
            // fix position x of rick to follow morty
            rick.x = morty.x + 60;
            rick.draw(ctxs.game);
            morty.draw(ctxs.game);

            window.requestAnimationFrame(loop);
        }
    };
    return stage5;
}