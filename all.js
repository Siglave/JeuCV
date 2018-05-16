function clearCircle(ctx,radius,x,y,intervalX,intervalY){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x+intervalX, y+intervalY, radius, 0, 2*Math.PI, true);
    ctx.clip();
    ctx.clearRect(x-radius+intervalX,y-radius+intervalY,radius*2,radius*2);
    ctx.restore();
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function drawScore(ctx, x, y, text, canvasWidth) {
    ctx.font = "40px Verdana";
    // Fill with gradient
    ctx.fillStyle = "rgb(107, 244, 66)";
    ctx.fillText(text + " / 50", x, y);
}

function drawText(ctx, x, y, text, font, textAlign) {
    if (font) {
        ctx.font = font;
    }
    if (textAlign) {
        ctx.textAlign = textAlign;
    }
    ctx.fillText(text, x, y);
}

function drawMultipleText(ctx, arrayText) {
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    arrayText.map(function (elem) {
        drawText(ctx, elem.x, elem.y, elem.text, elem.font, elem.textAlign);
    });
}

function getCvPart1(canvasWidth, canvasHeight) {
    return [{
            x: 30,
            y: 30,
            text: "Pierre Rouzaud",
            font: "16px Arial"
        },
        {
            x: 30,
            y: 50,
            text: "Tél : 06 06 06 06 06",
            font: null
        },
        {
            x: 30,
            y: 70,
            text: "Mail : test@gmail.com",
            font: null
        },
        {
            x: 30,
            y: 90,
            text: "Age : 22 ans",
            font: null
        },
        {
            x: 30,
            y: 240,
            text: "Mes Atouts",
            font: "bold 20px Arial"
        },
        {
            x: 30,
            y: 270,
            text: "Mes compétences professionnelles  dans le développement Web à la fois front-end",
            font: "18px Arial"
        },
        {
            x: 30,
            y: 290,
            text: "et back-end associées à ma formation en Dut Informatique et ma capacité linguistique. ",
            font: null,
        },
        {
            x: canvasWidth / 2,
            y: 170,
            text: "Développeur Web Full Stack",
            textAlign: "center",
            font: "bold 24px Arial",
        },
    ];
}

function getSkillsCv(canvasWidth,canvasHeight){
    return [{
        x: 30,
        y: 320,
        text: "Compétences",
        textAlign: "start",
        font: "bold 20px Arial"
    },
    {
        x: 30,
        y: 350,
        text: "Langages informatiques",
        font: "bold 18px Arial"
    },
    {
        x: 45,
        y: 380,
        text: "- Langages Web : Javascript, Php, Html, Css",
        font: "18px Arial"
    },
    {
        x: 45,
        y: 400,
        text: "- SGBD : MYSQL",
        font: null
    },
    {
        x: 45,
        y: 420,
        text: "- Divers : Python, Java",
        font: null
    },
    {
        x: 30,
        y: 450,
        text: "Framework",
        font: "bold 18px Arial"
    },
    {
        x: 45,
        y: 480,
        text: "- Front : Bootstrap, Jquery, Angular, ReactJs",
        font: "18px Arial"
    },
    {
        x: 45,
        y: 500,
        text: "- Back : NodeJs, Express, Symfony",
        font: "18px Arial"
    },
    {
        x: 30,
        y: 530,
        text: "Langue",
        font: "bold 18px Arial"
    },
    {
        x: 45,
        y: 550,
        text: "- Anglais courant",
        font: "18px Arial"
    },
    {
        x: 30,
        y: 580,
        text: "Autres",
        font: "bold 18px Arial"
    },
    {
        x: 45,
        y: 600,
        text: "- Echanger sur les bugs rencontrés dans un projet",
        font: "18px Arial"
    },
    {
        x: 45,
        y: 620,
        text: "- Travailler en méthode agile",
        font: null
    },
];
}

function getEndCV(canvasWidth,canvasHeight){
    return [
        {
            x: 30,
            y: 650,
            text: "Projets",
            textAlign: "start",
            font: "bold 20px Arial"
        },
        {
            x: 45,
            y: 680,
            text: "- Jeu CV (Vanilla JS, HTML/CSS)",
            font: "18px Arial"
        },
        {
            x: 30,
            y: 710,
            text: "Experience professionnelle :",
            font: "bold 20px Arial"
        },
        {
            x: 45,
            y: 740,
            text: "- Smartsitting, réalisation de la plateforme web (Symfony 3, Jquery, Bootstrap, HTML/CSS)",
            font: "18px Arial"
        },
        {
            x: 45,
            y: 760,
            text: "- Institut de France, Réalisation d'une plateforme de gestion des dons (MVC, PHP, HTML/CSS)",
            font: "18px Arial"
        },
        {
            x: 30,
            y: 790,
            text: "Diplômes :",
            font: " bold 20px Arial"
        },
        {
            x: 45,
            y: 820,
            text: "- 2018-2019 Formation Full Stack Js en alternance, IFOCOP",
            font: "18px Arial"
        },
        {
            x: 45,
            y: 840,
            text: "- 2015-2017 DUT Informatique, Université Paris Descartes",
            font: "18px Arial"
        },
        {
            x: 45,
            y: 860,
            text: "- 2015 Baccalauréat(STI2D) mention \"Très bien \"",
            font: "18px Arial"
        },
        {
            x: 30,
            y: 890,
            text: "Centres D'intérêt :",
            font: "bold 20px Arial"
        },
        {
            x: 45,
            y: 910,
            text: "- Nouvelles technologies, Web, IA (Machine Learning, Deep learning), Espace (NASA, Space X)",
            font: "18px Arial"
        },
        {
            x: 45,
            y: 930,
            text: "- E-sports (Tournoi de jeu vidéo online/offline) ",
            font: null
        },
    ]
}
function drawCvPart1(ctx, canvasWidth, canvasHeight) {
    var textToDraw = getCvPart1(canvasWidth, canvasHeight);
    drawMultipleText(ctx, textToDraw);
}

function drawSkillsCv(ctx, canvasWidth, canvasHeight) {
    var textToDraw = getSkillsCv(canvasWidth,canvasHeight);
    drawMultipleText(ctx, textToDraw);
}

function drawMovingCV(ctx,tabCv,canvasWidth,canvasHeight){
    tabCv.map(function(elemText){
        elemText.y -= 0.3;
        if (elemText.y < 0) {
            elemText.y = canvasHeight*1.5;
        }
    });
    drawMultipleText(ctx,tabCv);
}
"use strict";

class Element {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
}

class Portal extends Element {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.img = new Sprite(img, 2483, 329, 670, 670);
        this.speed = 0.2;
        this.direction = true;
        this.maxMouv = y + 10;
        this.scaleX = 0.4;
        this.scaleY = 1;
    }
    move() {
        if (this.y < this.maxMouv && this.direction) {
            this.y += this.speed;
        } else {
            if (this.y > this.maxMouv - 20) {
                this.y = this.y - this.speed;
                this.direction = false;
            } else {
                this.direction = true;
            }
        }
    }
    setScaleXY(scaleX, scaleY) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }
    draw(ctx) {
        this.move();

        ctx.save();
        ctx.scale(this.scaleX, this.scaleY)
        // 870 * 2.5 cause 1/0.4 = 2.5
        this.img.draw(ctx, this.x * (1 / this.scaleX), this.y * (1 / this.scaleY), this.width, this.height);
        ctx.restore();

    }
}

class Cloud extends Element {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.img = new Sprite(img, 0, 0, img.width, img.height);
        this.speed = 1;
        this.isCollision = false;
    }
    setIsCollision(bool) {
        this.isCollision = bool;
    }
    effectCollision(collision) {
        switch (collision.type) {
            case "canvas":
                switch (collision.direction) {
                    case "left":
                        //check if all img out
                        if (collision.offset < 0) {
                            this.x = collision.canvasWidth;
                            this.speed = randomNumber(1, 4);
                            return {
                                isOut: true,
                                speed: this.speed
                            };
                        } else {
                            return {
                                isOut: false
                            };
                        }
                        break;
                    case "right":
                        return {
                            isOut: false
                        };
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    move() {
        this.x -= this.speed;
    }
    draw(ctx) {
        this.move();
        this.img.draw(ctx, this.x, this.y, this.width, this.height);
    }
}

class Skill extends Element {
    constructor(img, x, y, width, height, distanceFall) {
        super(x, y, width, height);
        this.img = new Sprite(img, 0, 0, img.width, img.height);
        this.speed = 1;
        this.isCollision = false;
        this.distanceFall = distanceFall;
        this.alpha = 1;
        this.collision = false;
        this.score = 1;
    }
    move() {
        if (this.collision) {
            this.y -= 0.5;
        } else {
            if (this.x < this.distanceFall) {
                this.y += this.speed;
            } else {
                this.x -= this.speed;
            }
        }
    }
    draw(ctx) {
        this.move();
        if (this.collision) {
            ctx.fillStyle = "rgba(5, 111, 173, " + this.alpha + ")";
            ctx.font = "24pt Arial";
            ctx.fillText("+" + this.score, this.x, this.y + (this.height / 2));
            this.alpha -= 0.005;
        } else {
            this.img.draw(ctx, this.x, this.y, this.width, this.height);
        }
    }

}
class Bomb extends Element {
    constructor(imgBomb, imgExplosion, x, y, width, height, distanceFall) {
        super(x, y, width, height);
        this.speed = 1;
        this.distanceFall = distanceFall;
        this.explode = false;
        this.animation = getAnimationBomb(imgBomb, imgExplosion);
    }
    move() {
        if (!this.explode) {
            if (this.x < this.distanceFall) {
                this.y += this.speed;
            } else {
                this.x -= this.speed;
            }
        }
    }
    draw(ctx) {
        this.move();
        if (this.x < this.distanceFall) {
            if (this.explode) {
                this.animation.explosion.explode[this.animation.explosion.frame % 12].draw(
                    ctx,
                    this.x - (this.animation.explosion.explode[this.animation.explosion.frame % 12].sWidth / 2) + (this.width / 2),
                    this.y - (this.animation.explosion.explode[this.animation.explosion.frame % 12].sHeight / 2) + (this.height / 2),
                    this.animation.explosion.explode[this.animation.explosion.frame % 12].sWidth,
                    this.animation.explosion.explode[this.animation.explosion.frame % 12].sHeight
                );
                if (this.animation.explosion.actualTime < this.animation.explosion.maxTime) {
                    this.animation.explosion.actualTime++;
                } else {
                    this.animation.explosion.frame++;
                    this.animation.explosion.actualTime = 0;
                }
            } else {
                this.animation.bomb[this.animation.frame % 3].draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                if (this.animation.actualTime < this.animation.maxTime) {
                    this.animation.actualTime++;
                } else {
                    this.animation.frame++;
                    this.animation.actualTime = 0;
                }
            }
        }
    }
}

function createSkillOrBomb(imgsSkill, imgBomb, imgExplosion, cloud, canvasWidth) {
    var objRet = {
        type: null,
        img: null
    };
    var score = 1;
    switch (randomNumber(0, 40)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            score = 1;
            objRet.type = "skill";
            objRet.img = imgsSkill[randomNumber(0, 3)];
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            score = 2;
            objRet.type = "skill";
            objRet.img = imgsSkill[randomNumber(4, 5)];
            break;
        case 9:
        case 10:
        case 11:
            score = 3;
            objRet.type = "skill";
            objRet.img = imgsSkill[randomNumber(6, 7)];
            break;
        case 12:
        case 13:
            score = 4;
            objRet.type = "skill";
            objRet.img = imgsSkill[randomNumber(8, 11)];
            break;
        default:
            objRet.type = "bomb";
            break;
    }
    if (objRet.type == "skill") {
        var skill = new Skill(
            objRet.img,
            cloud.x + 30,
            cloud.y + 10,
            40,
            50,
            randomNumber(0, canvasWidth - 50)
        );
        skill.score = score;
        skill.speed = cloud.speed;
        return {
            type: "skill",
            obj: skill
        };
    } else {
        var bomb = new Bomb(
            imgBomb,
            imgExplosion,
            cloud.x + 30,
            cloud.y + 10,
            50,
            50,
            randomNumber(0, canvasWidth - 50)
        );
        bomb.speed = cloud.speed;
        return {
            type: "bomb",
            obj: bomb
        };
    }

}

class Character extends Element {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.animation = getAnimationCharacter(img);
        this.speed = 2;
        this.isCollision = false;
        this.arrowMove = [{
                keyCode: 38,
                keyIsUp: false
            }, //up
            {
                keyCode: 40,
                keyIsUp: false
            }, //down
            {
                keyCode: 37,
                keyIsUp: false
            }, //left
            {
                keyCode: 39,
                keyIsUp: false
            }, //right
            {
                keyCode: 16,
                keyIsUp: false
            } //shift
        ];
    }
    changeImg(img) {
        this.animation = getAnimationCharacter(img);
    }
    restartCharacter() {
        this.arrowMove.map(function (elem) {
            elem.keyIsUp = false;
        });
        this.animation.direction = "stayStill";
        this.x = 0;
        this.y = 0;
        this.speed = 2;
        this.animation.maxTime = 10;
        this.width = 60;
        this.height = 79;
    }
    effectCollision(collision) {
        switch (collision.type) {
            case "canvas":
                switch (collision.direction) {
                    /* if collision with canvas add or sub speed to nullify movement and keep
					character to the same place */
                    case "left":
                        this.setX(this.x + this.speed);
                        return {
                            isOut: true
                        };
                        break;
                    case "right":
                        this.setX(this.x - this.speed);
                        return {
                            isOut: true
                        };
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    setIsCollision(bool) {
        this.isCollision = bool;
    }
    move() {
        this.arrowMove.map(item => {
            if (item.keyIsUp) {
                switch (item.keyCode) {
                    case 38: //up
                        //this.setY(this.getY() - this.speed);
                        break;
                    case 40: //down
                        //this.setY(this.getY() + this.speed);
                        break;
                    case 37: //left
                        this.setX(this.x - this.speed);
                        this.animation.direction = "left";
                        break;
                    case 39: //right
                        this.setX(this.x + this.speed);
                        this.animation.direction = "right";
                        break;
                    case 16: //shift
                        this.speed = 5;
                        this.animation.maxTime = 3;
                        break;
                    default:
                        return;
                }
            }
        });
    }
    draw(ctx) {
        this.move();
        switch (this.animation.direction) {
            case "stayStill":
                this.animation.stayStill.draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                break;
            case "left":
                this.animation.left[this.animation.frame % 4].draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                if (this.animation.actualTime < this.animation.maxTime) {
                    this.animation.actualTime++;
                } else {
                    this.animation.frame++;
                    this.animation.actualTime = 0;
                }
                break;
            case "right":
                ctx.save();
                ctx.scale(-1, 1); // needed to flip the img
                this.animation.left[this.animation.frame % 4].draw(
                    ctx,
                    (this.x + this.width) * -1,
                    this.y,
                    this.width,
                    this.height
                );
                if (this.animation.actualTime < this.animation.maxTime) {
                    this.animation.actualTime++;
                } else {
                    this.animation.frame++;
                    this.animation.actualTime = 0;
                }
                ctx.restore();
                break;
            default:
                break;
        }
    }
}

class Horse extends Element {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.animation = getAnimationHorse(img);
        this.speed = 0.5;
        this.distanceToGo = x;
        this.isCollision = false;
        this.isJumping = false;
        this.baseY = y;
        this.movementJumpUp = true;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.maxJump = 2;
        this.actualJump = 0;
        this.arrowMove = [{
                keyCode: 37,
                keyIsUp: false
            }, //left
            {
                keyCode: 39,
                keyIsUp: false
            }, //right
            {
                keyCode: 16,
                keyIsUp: false
            }, //shift
            {
                keyCode: 32,
                keyIsUp: false
            } //shift
        ];
    }
    setIsCollision(bool){
        this.isCollision = bool;
    }
    effectCollision(collision) {
        switch (collision.type) {
            case "canvas":
                switch (collision.direction) {
                    case "up":
                        this.velocityY = 0;
                        this.movementJumpUp = false;
                        break;
                    default:
                        break;
                }
                break;
            case "experience":
                this.distanceToGo +=30;
                break;
            default:
                break;
        }
    }
    move() {
        if (this.isJumping) {
            this.animation.direction = "jump";
            if (this.velocityY > 0 && this.movementJumpUp) {
                this.movementJumpUp = false;
                this.animation.frame = 4;
            }
            this.velocityY += this.gravity;
            if (this.movementJumpUp) {
                this.y += this.velocityY;
            } else {
                this.y += this.velocityY;
                if (this.y >= this.baseY) {
                    this.animation.direction = "run";
                    this.animation.frame = 0;
                    this.isJumping = false;
                    this.movementJumpUp = true;
                    this.actualJump = 0;
                    this.y = this.baseY;
                }
            }
        }
        if (this.x < this.distanceToGo) {
            this.x += this.speed;
        }
    }
    draw(ctx) {
        this.move();
        switch (this.animation.direction) {
            case "stayStill":
                this.animation.stayStill.draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                break;
            case "run":
                this.animation.run[this.animation.frame % 7].draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                if (this.animation.actualTime < this.animation.maxTime) {
                    this.animation.actualTime++;
                } else {
                    this.animation.frame++;
                    this.animation.actualTime = 0;
                }
                break;
            case "jump":
                this.animation.jump[this.animation.frame % 7].draw(
                    ctx,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                if (this.animation.actualTime < this.animation.maxTimeJump) {
                    this.animation.actualTime++;
                } else {
                    if(!(this.animation.frame == 3 || this.animation.frame  == 6)){
                    
                        this.animation.frame++;
                    }
                    this.animation.actualTime = 0;
                }
                break;
            default:
                break;
        }

    }
}
class TextExperience extends Element {
    constructor(text, x, y, width, height) {
        super(x, y, width, height);
        this.text = text;
        this.speed = 5;
        this.isCollision = false;
        this.scaleX = 1;
        this.alpha = 1;
    }
    setIsCollision(bool){
        this.isCollision = bool;
    }
    effectCollision(collision) {
        this.setIsCollision(true);
        switch (collision.type) {
            case "canvas":
                break;
            case "horse":
                console.log("horse");
                
                break;
            default:
                break;
        }
    }
    move(){
        if(!this.isCollision){
            this.x -= this.speed
        }else{
            this.scaleX += -0.01;
            this.alpha -= 0.005;
        }
    }
    draw(ctx){
        this.move();
        ctx.save();
        ctx.scale(this.scaleX, 1); // needed to flip the img
        ctx.textBaseline = "top";
        //ctx.fillStyle = "rgba(66, 140, 244, " + this.alpha + ")";
        ctx.fillStyle = "rgba(102, 255, 51, " + this.alpha + ")";
        drawText(ctx,this.x * (1 / this.scaleX),this.y,this.text,"bold 20px Arial",null);
        ctx.restore();
    }
}

function createTextExperience(ctx,canvasWidth){
    var tabText = ["Dut Informatique, Paris Descartes", "Ifocop, Dev Full Stack JS", "Dev Web, Institut de France", "Dev Web Le Smartsitting"];
    var selectedIndex = randomNumber(0,tabText.length-1);
    return new TextExperience(
        tabText[selectedIndex], 
        canvasWidth, 
        randomNumber(20, 500), 
        300, 
        20
    );
}

class BackParallax extends Element{
    constructor(img,x,y,width,height,speed){
        super(x, y, width, height);
        this.img = new Sprite(img, 0, 0, img.width, img.height);
        this.speed = speed;
    }
    move(){
        this.x -= this.speed;
    }
    draw(ctx,canvasWidth,canvasHeight){
        this.move();
        this.img.draw(ctx, this.x, this.y, canvasWidth, canvasHeight);
        //if img is out of canvas draw an other img to fill the blank
        if (this.x < 0) {
            this.img.draw(ctx, this.x+canvasWidth, this.y, canvasWidth, canvasHeight);
        }
        //if image completely out set x to 0
        if ((this.x + canvasWidth)<= 0) {
            this.x = 0;
        }
    }
}

class Tile extends Element{
    constructor(img,x,y,width,height,speed){
        super(x,y,width,height);
        this.img = new Sprite(img, 0, 0, img.width, img.height);
        this.speed = speed;
    }
    move(){
        this.x -= this.speed;
    }
    draw(ctx){
        this.move();
        this.img.draw(ctx,this.x,this.y,this.width,this.height);
    }
}

// http://spritedatabase.net/file/21543/Horse

class Sprite {
    constructor(img, sx, sy, sWidth, sHeight) {
        this.img = img;
        this.sX = sx;
        this.sY = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
    }
    draw(ctx, dx, dy, dWidth, dHeight) {
        ctx.drawImage(this.img, this.sX, this.sY, this.sWidth, this.sHeight, dx, dy, dWidth, dHeight);
    }
}

function getPortalElement(img) {
    return new Sprite(img, 2483, 329, 670, 670);
}

function getAnimationCharacter(img) {
    // console.log(srcImg);
    var sWidth = 120;
    var sHeight = 158;
    var interval = 4.5;
    var posX = 9;
    var posY = 167;
    var tabSprite = [];
    for (let i = 0; i < 4; i++) {
        tabSprite.push(new Sprite(img, posX, posY, sWidth, sHeight));
        posX += sWidth + interval * 2;
    }
    var objAnimation = {
        stayStill: new Sprite(img, 7, 1, 120, 156),
        left: tabSprite,
        right: tabSprite,
        frame: 0,
        direction: "stayStill",
        maxTime: 10, // set how much time the frame appear before next one 
        actualTime: 0
    }
    return objAnimation;
}

function getAnimationBomb(img, imgExplosion) {
    return {
        frame: 0,
        maxTime: 10,
        actualTime: 0,
        bomb: [
            new Sprite(img, 24, 3, 77, 107),
            new Sprite(img, 149, 3, 84, 109),
            new Sprite(img, 277, 3, 83, 112)
        ],
        explosion: getAnimationExplosion(imgExplosion),
    }
}

function getAnimationExplosion(img) {
    return {
        frame: 0,
        maxTime: 3,
        actualTime: 0,
        explode: [
            new Sprite(img, 30, 19, 66, 76),
            new Sprite(img, 140, 9, 96, 109),
            new Sprite(img, 263, 1, 108, 121),
            new Sprite(img, 391, 4, 113, 119),
            new Sprite(img, 11, 133, 106, 115),
            new Sprite(img, 141, 134, 102, 114),
            new Sprite(img, 269, 141, 95, 97),
            new Sprite(img, 398, 142, 93, 92),
            new Sprite(img, 24, 273, 79, 88),
            new Sprite(img, 165, 294, 47, 53),
            new Sprite(img, 292, 294, 48, 52),
            new Sprite(img, 421, 296, 45, 49),
        ]
    }
}

function getAnimationHorse(img) {
    var jumpSprites = [];
    var runSprites = [];
    var pointerImgX = 960;
    for (var i = 0; i < 7; i++) {
        jumpSprites.push(new Sprite(img, pointerImgX, 0, 192, 144));
        pointerImgX += 192;
    }
    pointerImgX = 2304;
    for (var j = 0; j < 7; j++) {
        runSprites.push(new Sprite(img, pointerImgX, 0, 192, 144));
        pointerImgX += 192;
    }
    return {
        stayStill: new Sprite(img, 0, 0, 192, 144),
        run: runSprites,
        jump: jumpSprites,
        frame: 0,
        direction: "stayStill",
        maxTime: 4, // set how much time the frame appear before next one 
        maxTimeJump: 7, // set how much time the frame appear before next one 
        actualTime: 0

    }
}

function loadImgs(tabSrc,keylevel0,keylevel1, callback) {
    var tabRetImg = [];
    tabSrc.map(function (src, index) {
        var oneImg = new Image();
        oneImg.src = src;
        /// When end loadimg if the element is the last of the array execute callback 
        oneImg.onload = function () {
            if (tabSrc.length - (index + 1) == 0) {
                callback(tabRetImg,keylevel0,keylevel1);
            }
        }
        tabRetImg.push(oneImg);
    });

}

function getNumberTabAssets(assets) {
    var numberAttr = 0;
    for (var keylevel0 in assets) {
        if (assets.hasOwnProperty(keylevel0)) {
            for (var keylevel1 in assets[keylevel0]) {
                if (assets[keylevel0].hasOwnProperty(keylevel1)) {
                    numberAttr++;
                }
            }
        }
    }
    return numberAttr;
}

function loadAssets(callback) {
    var assetsSrc = {
        background: {
            forest: [
                "assets/background/forest/background.png",
                "assets/background/forest/bigClouds.png",
                "assets/background/forest/hill.png",
                "assets/background/forest/bushes.png",
                "assets/background/forest/distantTrees.png",
                "assets/background/forest/tree.png",
                "assets/background/forest/ground.png"
            ],
            western: [
                "assets/background/western/background.png",
                "assets/background/western/stars.png",
                "assets/background/western/sun.png",
                "assets/background/western/mountains.png",
                "assets/background/western/clouds.png",
                "assets/background/western/layer4.png",
                "assets/background/western/layer3.png",
                "assets/background/western/layer2.png",
                "assets/background/western/layer1.png"
            ]
        },
        characters: {
            rick: [
                "assets/character/rick.png",
                "assets/character/rickCowboy.png",

            ],
            morty: [
                "assets/character/mortyNoEye.png",
                "assets/character/mortyOneEye.png",
                "assets/character/morty.png",
                "assets/character/mortyThreeEye.png",
                "assets/character/mortyCowboy.png",
            ],
            horse: [
                "assets/character/horseSprite.png",
            ]
        },
        effects: {
            explosion: ["assets/effects/effectExplo.png"],
        },
        elements: {
            bomb: [
                "assets/elements/bomb.png"
            ],
            clouds: [
                "assets/elements/cloud1.png",
                "assets/elements/cloud2.png",
                "assets/elements/cloud3.png",
                "assets/elements/cloud4.png",
                "assets/elements/cloud5.png",
            ],
            portal: [
                "assets/elements/element.png"
            ],
            skills: [
                "assets/skills/html.png",
                "assets/skills/css.png",
                "assets/skills/js.png",
                "assets/skills/php.png",
                "assets/skills/jquery.png",
                "assets/skills/bootstrap.png",
                "assets/skills/angular.png",
                "assets/skills/react.png",
                "assets/skills/symfony.png",
                "assets/skills/nodejs.png",
                "assets/skills/mongodb.png",
                "assets/skills/mysql.png",
            ]
        },
        tiles: {
            grass: [
                "assets/tiles/grass/tile_grass_02.png"
            ]
        }
    }
    var assets = {
        background: {
            forest: null,
            western: null,
        },
        characters: {
            rick: null,
            morty: null,
            horse: null,
        },
        effects: {
            explosion: null,
        },
        elements: {
            bomb: null,
            clouds: null,
            portal: null,
            skills: null
        },
        tiles: {
            grass: null
        }
    }
    var numTab = getNumberTabAssets(assetsSrc);   
    var numberAttr = 0;
    var numberObj = 0;
    var numTotalAttr = 0;
    for (var keylevel0 in assetsSrc) {
        if (assetsSrc.hasOwnProperty(keylevel0)) {
            numberObj++;
            numberAttr = 0;
            for (var keylevel1 in assetsSrc[keylevel0]) {
                if (assetsSrc[keylevel0].hasOwnProperty(keylevel1)) {
                    numberAttr++;
                    loadImgs(assetsSrc[keylevel0][keylevel1],keylevel0,keylevel1, function (tabImg,keylevel0,keylevel1) {                
                        assets[keylevel0][keylevel1] = tabImg;
                        numTotalAttr++;                        
                        if (numTotalAttr == numTab) {
                            callback(assets);
                        }
                    });
                }
            }
        }
    }
}
"use strict";

class CollisionDetector {
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
    testCollision() {}
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

class Game {
    constructor(objAssets, canvasWidth, canvasHeight, ctxs) {
        this.ctxs = ctxs; // obj ctxs {ui:ctx,game:ctx,back:ctx}
        this.objAssets = objAssets;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.collisionDetector = new CollisionDetector(
            canvasWidth,
            canvasHeight
        );
        /*         console.log(objAssets.characters.rick[0][0]);
         */
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
        this.stages[this.actualStage].start(
            this.ctxs,
            this.canvasWidth,
            this.canvasHeight,
            this.switchStage
        );
    }
    switchStage() {
        //console.log("autreStage");
        console.log("actuStage");
        console.log(this.actualStage);
        console.log(this);

        //Clear all Canvas
        this.ctxs.back.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctxs.game.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctxs.ui.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        //Clean movement of characters
        this.characters.rick.restartCharacter();
        this.characters.morty.restartCharacter();
        //Remove event of previous stage
        this.stages[this.actualStage].removeListener();
        //Change stage
        this.actualStage += 1;

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
        var valuexR = this.canvasWidth/2;
        window.requestAnimationFrame(functAnim);

        function animTransitionStage(){
            this.ctxs.ui.fillStyle = "black";
            //left
            this.ctxs.ui.clearRect(valuexL, 0, this.canvasWidth/2, this.canvasHeight);
            this.ctxs.ui.fillRect(valuexL, 0, this.canvasWidth/2, this.canvasHeight);
            //right
            this.ctxs.ui.clearRect(valuexR, 0, this.canvasWidth/2, this.canvasHeight);
            this.ctxs.ui.fillRect(valuexR, 0, this.canvasWidth/2, this.canvasHeight);
            valuexL-=5;
            valuexR+=5;
            if(valuexL*-1 < this.canvasWidth/2){
                window.requestAnimationFrame(functAnim);

            }
            
        };
    }
    createStages() {
        var stages = [];
        /////////////////////////////// STAGE 1 //////////////////////////////////////////
        var stage1FctDown = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            //Only allow right move and sprint
            if (event.keyCode == 39 || event.keyCode == 16) {
                var fctMap = function (elem) {
                    if (elem.keyCode == event.keyCode) {
                        elem.keyIsUp = true;
                    }
                };
                this.characters.rick.arrowMove.map(fctMap);
                this.characters.morty.arrowMove.map(fctMap);
            }

            event.preventDefault();
        };
        var stage1FctUp = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            var fctMap = function (elem, character) {
                if (elem.keyCode == event.keyCode) {
                    character.animation.frame = 0;
                    character.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        character.animation.maxTime = 10;
                        character.speed = 2;
                    }
                }
            };
            this.characters.rick.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.rick.animation.frame = 0;
                    this.characters.rick.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.rick.animation.maxTime = 10;
                        this.characters.rick.speed = 2;
                    }
                }
            });
            this.characters.morty.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.morty.animation.frame = 0;
                    this.characters.morty.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.morty.animation.maxTime = 10;
                        this.characters.morty.speed = 2;
                    }
                }
            });
            console.log("from1");

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
            stage1FctUp
        );

        stage1.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
            //Background
            ctxs.back.fillStyle = "white";
            ctxs.back.fillRect(0, 0, canvasWidth, canvasHeight);

            // Define portal
            var portal = new Portal(this.elemStage.portal, 870, 320, 175, 175);

            var rick = this.characters.rick;
            var morty = this.characters.morty;

            var objCollision = this.collisionDetector;

            var gradient = ctxs.game.createLinearGradient(0, 0, canvasWidth, 0);
            gradient.addColorStop("0", "black");
            gradient.addColorStop("0.5", "black");
            gradient.addColorStop("0.60", "yellow");
            gradient.addColorStop("1.0", "green");

            drawCvPart1(ctxs.ui, canvasWidth, canvasHeight);
            drawText(ctxs.ui, 900, 240, "Compétences", "bold 18px Arial", null, null);

            window.requestAnimationFrame(loop);

            function loop() {
                objCollision.isOutCanvas(rick);
                //objCollision.trucRick(rick,morty.x+morty.width);
                objCollision.isOutCanvas(morty);
                //gameDraw
                ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);

                ctxs.back.fillStyle = gradient;
                ctxs.back.fillRect(morty.x + 10, canvasHeight / 3 * 2, canvasWidth, 1);

                rick.draw(ctxs.game);
                morty.draw(ctxs.game);

                //blank block to make character disepear
                ctxs.game.fillStyle = "white";
                ctxs.game.fillRect(
                    900,
                    canvasHeight / 3 * 2 - 108,
                    canvasWidth,
                    108
                );
                //Draw portal
                portal.draw(ctxs.game);

                if (morty.x > canvasWidth - 130) {
                    fctStop();
                } else {
                    window.requestAnimationFrame(loop);
                }
            }
        };
        ///////////////////////// STAGE 2 //////////////////////////////////////

        var stage2FctDown = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            var fctMap = function (elem) {
                if (elem.keyCode == event.keyCode) {
                    elem.keyIsUp = true;
                }
            };
            this.characters.morty.arrowMove.map(fctMap);

            event.preventDefault();
        };
        var stage2FctUp = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            this.characters.morty.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.morty.animation.frame = 0;
                    this.characters.morty.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.morty.animation.maxTime = 10;
                        this.characters.morty.speed = 2;
                    }
                }
            });
            console.log("from2");

            event.preventDefault();
        };
        var elemStage2 = {
            morty: this.objAssets.characters.morty,
            rick: this.objAssets.characters.rick,
            clouds: this.objAssets.elements.clouds,
            skills: this.objAssets.elements.skills,
            bomb: this.objAssets.elements.bomb,
            explosion: this.objAssets.effects.explosion,
            portal: this.objAssets.elements.portal
        }
        var elemBackStage2 = this.objAssets.background.forest;
        var stage2 = new Stage(
            elemStage2,
            elemBackStage2,
            this.characters,
            this.collisionDetector,
            stage2FctDown,
            stage2FctUp
        );

        stage2.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
            var elemStage = this.elemStage;
            var endStage = false;
            //Background
            this.elemBack.map(function (elem) {
                var s = new Sprite(elem, 0, 0, elem.width, elem.height);
                s.draw(ctxs.back, 0, 0, canvasWidth, canvasHeight);
            });
            ///////////////////////////////
            // Define portal
            //var portal = getPortalElement(this.elemStage[0]);
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
            //Characters
            this.characters.rick.x = 800;
            this.characters.rick.y = 50;
            var rick = this.characters.rick;
            this.characters.morty.x = (canvasWidth / 2)-this.characters.morty.width/2;
            this.characters.morty.y = 465;
            this.characters.morty.changeImg(this.elemStage.morty[0]);
            var morty = this.characters.morty;
            ///////////////////////////////
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
                if (visionPlayer < 550) {
                    ctxs.ui.fillStyle = "grey";
                    ctxs.ui.fillRect(0, 0, canvasWidth, canvasHeight);
                    // to see morty
                    clearCircle(ctxs.ui, visionPlayer, morty.x, morty.y, 30, 30);
                    //////////////////
                    //to see rick
                    clearCircle(ctxs.ui, 70, rick.x, rick.y, 30, 35);
                }
                //////////////////               
                //Draw Clouds
                var testCollisionCloud;
                clouds.map(function (cloud) {
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
                    ) { // Collision
                        setTimeout(function () {
                            scorePlayer += skill.score;
                            visionPlayer += 10 * skill.score;
                            skill.collision = true;
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
                    } else { // Pas de collision
                        if (skill.y > canvasHeight || skill.alpha < 0) {
                            setTimeout(function () {
                                skills.splice(index, 1);
                            }, 0);
                        } else {
                            if (skill.x < skill.distanceFall) {
                                skill.draw(ctxs.game);
                            } else {
                                skill.draw(ctxs.ui);
                            }
                        }
                    }
                });

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
                    ) {
                        if (scorePlayer > 0) {
                            scorePlayer -= 1;
                        }
                        bomb.explode = true;
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
                    } else {
                        if (bomb.y > canvasHeight || bomb.animation.explosion.frame >= 12) {
                            setTimeout(function () {
                                bombs.splice(index, 1);
                            }, 0);
                        } else {
                            bomb.draw(ctxs.game);
                        }
                    }
                });

                ////////////////////
                //Morty
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
            console.log(this.elemStage);

            var portalMorty = new Portal(this.elemStage.portal[0], 925, 410, 175, 175);
            portalMorty.setScaleXY(0, 0);
            var trueEndStage = false;

            function loopEnd() {

                ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);
                // Collision
                objCollision.isOutCanvas(morty);
                morty.draw(ctxs.game);
                drawScore(ctxs.ui, canvasWidth / 2, 50, scorePlayer, canvasWidth);

                if (objCollision.passPortal(portalMorty, morty, true)) {
                    trueEndStage = true;
                    fctStop();

                }
                // make rick disepear if he pass the portal
                if (portalMorty.x > rick.x) {
                    rick.draw(ctxs.game);
                }
                if (rick.y < morty.y) {
                    rick.y += 1.5;
                    if (morty.x + morty.width * 2 >= portalMorty.x) {
                        morty.x -= morty.speed * 2;
                    }
                } else {
                    if (portalMorty.scaleX < 0.4 || portalMorty.scaleY < 1) {
                        if (portalMorty.scaleX < 0.4) {
                            portalMorty.scaleX += 0.002;
                        }
                        if (portalMorty.scaleY < 1) {
                            portalMorty.scaleY += 0.01;
                        }
                    } else {
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
                    if (bomb.y > canvasHeight) {
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
        ////////////////////////////////////////////////////////////////////////
        /////////////////////STAGE 3////////////////////////////////////////////

        var stage3FctDown = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            //Only allow right move and sprint
            if (event.keyCode == 39 || event.keyCode == 16) {
                var fctMap = function (elem) {
                    if (elem.keyCode == event.keyCode) {
                        elem.keyIsUp = true;
                    }
                };
                this.characters.rick.arrowMove.map(fctMap);
                this.characters.morty.arrowMove.map(fctMap);
            }

            event.preventDefault();
        };
        var stage3FctUp = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            var fctMap = function (elem, character) {
                if (elem.keyCode == event.keyCode) {
                    character.animation.frame = 0;
                    character.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        character.animation.maxTime = 10;
                        character.speed = 2;
                    }
                }
            };
            this.characters.rick.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.rick.animation.frame = 0;
                    this.characters.rick.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.rick.animation.maxTime = 10;
                        this.characters.rick.speed = 2;
                    }
                }
            });
            this.characters.morty.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.morty.animation.frame = 0;
                    this.characters.morty.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.morty.animation.maxTime = 10;
                        this.characters.morty.speed = 2;
                    }
                }
            });
            console.log("from3");

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
            stage3FctUp
        );

        stage3.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
            console.log("stage3");
            ctxs.back.fillStyle = "white";
            ctxs.back.fillRect(0, 0, canvasWidth, canvasHeight);

            // Define portal
            var portal = new Portal(this.elemStage.portal, 870, 320, 175, 175);

            var rick = this.characters.rick;
            var morty = this.characters.morty;
            rick.x = 460;
            rick.y = canvasHeight / 3 * 2 - 80
            morty.x = 400;
            morty.y = canvasHeight / 3 * 2 - 79;

            var objCollision = this.collisionDetector;

            var gradient = ctxs.game.createLinearGradient(0, 0, canvasWidth, 0);
            gradient.addColorStop("0", "black");
            gradient.addColorStop("0.5", "black");
            gradient.addColorStop("0.60", "yellow");
            gradient.addColorStop("1.0", "green");

            drawCvPart1(ctxs.back, canvasWidth, canvasHeight);
            drawSkillsCv(ctxs.back, canvasWidth, canvasHeight);
            ctxs.ui.fillStyle = "black";
            drawText(ctxs.ui,810,260,"Expérience/Diplômes","bold 18px Arial", "start");
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
                drawText(ctxs.ui,810,260,"Expérience/Diplômes","bold 18px Arial", "start");

                ctxs.back.fillStyle = gradient;
                ctxs.back.fillRect(morty.x + 10, canvasHeight / 3 * 2, canvasWidth, 1);

                rick.draw(ctxs.game);
                morty.draw(ctxs.game);

                //blank block to make character disepear
                ctxs.game.fillStyle = "white";
                ctxs.game.fillRect(
                    900,
                    canvasHeight / 3 * 2 - 108,
                    canvasWidth,
                    108
                );
                //Draw portal
                portal.draw(ctxs.game);

                if (morty.x > canvasWidth - 130) {
                    fctStop();
                } else {
                    window.requestAnimationFrame(loop);
                }
            }
        };
        ////////////////////////////////////////////////////////////////////////
        /////////////////////////STAGE 4 WESTERN/////////////////////////////////
        var stage4FctDown = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            if (event.keyCode == 32) {
                if (this.characters.horse.actualJump < this.characters.horse.maxJump) {
                    this.characters.horse.isJumping = true;
                    this.characters.horse.movementJumpUp = true;
                    this.characters.horse.animation.frame = 0;
                    this.characters.horse.velocityY = -15;
                    this.characters.horse.actualJump++;
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
            stage4FctUp
        );
        //Add horse character in stage4
        stage4.characters.horse = new Horse(this.objAssets.characters.horse[0], 0, 450, 156, 120);
        stage4.characters.horse.animation.direction = "run";

        stage4.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
            console.log("stage4");
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
            var tabText = ["Dut Informatique, Paris Descartes", "Ifocop, Formation Dev JS", "Dev Web, Institut de France", "Dev Web Le Smartsitting"];

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
                    morty.animation.actualTime = 0; //to stay in the 1st frame of right animation
                    //Draw Rick ////
                    rick.y = horse.y - 15;
                    rick.x = horse.x + 65;
                    rick.draw(ctxs.game);
                    rick.animation.actualTime = 0; //to stay in the 1st frame of right animation
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
                    if (rick.y < 497) {
                        rick.y += 2;
                    }
                    if (morty.y < 490) {
                        morty.y += 2;
                    }
                } else {
                    if (!morty.arrowMove[2].keyIsUp) {
                        morty.arrowMove[2].keyIsUp = true;
                    }
                    if (!rick.arrowMove[2].keyIsUp) {

                        rick.arrowMove[2].keyIsUp = true;
                    }
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

                }
                if (!rickPassPortal) {
                    rick.draw(ctxs.game);
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
                    console.log("endStage");
                    fctStop();
                } else {
                    window.requestAnimationFrame(endLoop);
                }
            }

        };
        /////////////////////////END STAGE 4 WESTERN/////////////////////////////////
        ///////////////////////// STAGE 5 //////////////////////////////////////////

        var stage5FctDown = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            //Only allow left, right and sprint moves
            if (event.keyCode == 39 || event.keyCode == 37 || event.keyCode == 16) {
                var fctMap = function (elem) {
                    if (elem.keyCode == event.keyCode) {
                        elem.keyIsUp = true;
                    }
                };
                this.characters.rick.arrowMove.map(fctMap);
                this.characters.morty.arrowMove.map(fctMap);
            }

            event.preventDefault();
        };
        var stage5FctUp = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            var fctMap = function (elem, character) {
                if (elem.keyCode == event.keyCode) {
                    character.animation.frame = 0;
                    character.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        character.animation.maxTime = 10;
                        character.speed = 2;
                    }
                }
            };
            this.characters.rick.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.rick.animation.frame = 0;
                    this.characters.rick.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.rick.animation.maxTime = 10;
                        this.characters.rick.speed = 2;
                    }
                }
            });
            this.characters.morty.arrowMove.map(elem => {
                if (elem.keyCode == event.keyCode) {
                    this.characters.morty.animation.frame = 0;
                    this.characters.morty.animation.direction = "stayStill";
                    elem.keyIsUp = false;
                    if (event.keyCode == 16) {
                        this.characters.morty.animation.maxTime = 10;
                        this.characters.morty.speed = 2;
                    }
                }
            });

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
            stage5FctUp
        );

        stage5.start = function (ctxs, canvasWidth, canvasHeight, fctStop) {
            console.log("stage5");
            ctxs.back.fillStyle = "white";
            ctxs.back.fillRect(0, 0, canvasWidth, canvasHeight);

            var rick = this.characters.rick;
            var morty = this.characters.morty;
            rick.x = 460;
            rick.y = canvasHeight / 3 * 2 - 79;
            morty.x = 400;
            morty.y = canvasHeight / 3 * 2 - 79;

            var objCollision = this.collisionDetector;

            var gradient = ctxs.game.createLinearGradient(0, 0, canvasWidth, 0);
            gradient.addColorStop("0", "black");
            gradient.addColorStop("0.5", "black");
            gradient.addColorStop("0.60", "yellow");
            gradient.addColorStop("1.0", "green");
            var tabElemnentCV = getCvPart1(canvasWidth, canvasHeight).concat(
                getSkillsCv(canvasWidth, canvasHeight).concat(
                    getEndCV(canvasWidth, canvasHeight)
                )
            );
            /*  drawCvPart1(ctxs.back, canvasWidth, canvasHeight);
            drawSkillsCv(ctxs.back, canvasWidth, canvasHeight); */
            window.requestAnimationFrame(loop);

            function loop() {
                objCollision.isOutCanvasRickAndMorty(morty, rick);

                //gameDraw
                ctxs.game.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.back.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxs.ui.clearRect(0, 0, canvasWidth, canvasHeight);


                drawMovingCV(ctxs.back, tabElemnentCV, canvasWidth, canvasHeight);
                /*   drawCvPart1(ctxs.back, canvasWidth, canvasHeight);
                  drawSkillsCv(ctxs.back, canvasWidth, canvasHeight); */
                ctxs.back.fillStyle = gradient;
                ctxs.back.fillRect(0, canvasHeight / 3 * 2, canvasWidth, 1);
                /// Draw rick and morty ///
                // fix x of rick to follow morty
                rick.x = morty.x + 60;
                rick.draw(ctxs.game);
                morty.draw(ctxs.game);


                window.requestAnimationFrame(loop);
            }
        };
        /////////////////////////////////End Stage 5///////////////////////////////////////////////
        /// Add all stages in object game 
        //stages.push(stage1);
        //stages.push(stage2);
        stages.push(stage3);
        stages.push(stage4);
        stages.push(stage5);

        return stages;
    }
}

class Stage {
    constructor(
        elemStage,
        elemBack,
        characters,
        collisionDetector,
        fctKeyDown,
        fctKeyUp
    ) {
        this.elemStage = elemStage;
        this.elemBack = elemBack;
        this.fctKeyDown = fctKeyDown;
        this.fctKeyUp = fctKeyUp;
        this.characters = characters;
        this.startStage = false;
        this.collisionDetector = collisionDetector;

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
}

document.addEventListener("DOMContentLoaded", function () {
    function initGameClass(objAssets) {
        var canvasBack = document.getElementById("gameBackGround");
        var canvasGame = document.getElementById("gameCanvas");
        var canvasUI = document.getElementById("gameUI");
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
        game.startGame();
    }
    loadAssets(initGameClass);
});