/* time=true, document */
var animation, exhaust, x = 50, y = 200, lightToDark = 1, time;

function smokeAnimation(time) {
    "use strict";
    // makes the slider more intuitive. Left goes slower, right goes faster.
    var timer = 300 - time;
    var smoke = document.getElementById("myCar").getContext("2d");
    // clears the previous interval so a new one can be set.
    clearInterval(animation);
    // sets a new interval for the smoke animation.
    animation = setInterval(exhaust, timer);
}

exhaust = function () {
    "use strict";
    var canvas = document.getElementById("smokeAnimation"),
        smoke = canvas.getContext("2d");
    if (y >= 0) {
        // Clears the canvas for for the next smoke animation.
        smoke.clearRect(0, 0, canvas.width, canvas.height);
        smoke.fillStyle = "#B3B4B8";
        // Changes the opacity.
        smoke.globalAlpha = lightToDark;
        smoke.beginPath();
        smoke.ellipse(60 + x, 30 + y, 20, 20, 0, 0, 2 * Math.PI);
        smoke.ellipse(50 + x, 20 + y, 20, 20, 0, 0, 2 * Math.PI);
        smoke.ellipse(70 + x, 30 + y, 20, 20, 0, 0, 2 * Math.PI);
        smoke.ellipse(70 + x, 20 + y, 20, 20, 0, 0, 2 * Math.PI);
        smoke.fill();
        // Fades the smoke as it gets farther from the car.
        lightToDark -= 0.1;
        // Randomizes the distance that the smoke travels during animation.
        x = x - 10 * Math.random();
        y = (y - 10) - 20 * Math.random();
    } else {
        // resets the variables once the smoke has drifted far enough.
        x = 50;
        y = 200;
        lightToDark = 1;
    }
};

function drawCar() {
    "use strict";
    var carBody = document.getElementById("myCar").getContext("2d"),
        rearWheel = document.getElementById("myCar").getContext("2d"),
        tire = document.getElementById("myCar").getContext("2d"),
        rim = document.getElementById("myCar").getContext("2d"),
        headLights = document.getElementById("myCar").getContext("2d"),
        door = document.getElementById("myCar").getContext("2d"),
        windshield = document.getElementById("myCar").getContext("2d"),
        accessories = document.getElementById("myCar").getContext("2d");
    
    
    //rear-right wheelhouse
    tire.beginPath();
    tire.strokeStyle = "blue";
    tire.fillStyle = "black";
    tire.moveTo(100, 334);
    tire.quadraticCurveTo(103, 261, 56, 252);
    tire.quadraticCurveTo(23, 255, 28, 315);
    tire.quadraticCurveTo(30, 318, 35, 320);
    tire.closePath();
    tire.fill();
    //tire.stroke();
    
    //front-right wheelhouse
    tire.beginPath();
    tire.moveTo(390, 341);
    tire.lineTo(392, 335);
    tire.lineTo(385, 335);
    tire.quadraticCurveTo(385, 300, 373, 287);
    tire.lineTo(366, 343);
    tire.closePath();
    tire.fill();
    tire.beginPath();
    tire.moveTo(369, 278);
    carBody.bezierCurveTo(335, 228, 276, 259, 291, 335);
    tire.lineTo(304, 341);
    tire.fill();
    //tire.stroke();
    

    carBody.fillStyle = "rgba(66, 188, 250, 0.63)";
    carBody.beginPath();
    carBody.moveTo(29, 317);
    //backWheelWell
    carBody.bezierCurveTo(20, 210, 110, 250, 100, 335);
    //underDoor
    carBody.lineTo(290, 335);
    //frontWheelWell
    carBody.bezierCurveTo(280, 210, 390, 245, 385, 335);
    carBody.lineTo(440, 335);
    //bumperUnderGrill
    carBody.lineTo(560, 327);
    carBody.lineTo(566, 325);
    //rightMostBumper
    carBody.quadraticCurveTo(575, 290, 566, 267);
    carBody.lineTo(560, 262);
    //hood
    carBody.bezierCurveTo(540, 225, 470, 223, 410, 210);
    carBody.quadraticCurveTo(395, 195, 350, 170);
    //top
    carBody.bezierCurveTo(340, 170, 210, 130, 90, 205);
    carBody.lineTo(60, 217);
    //spoiler
    carBody.quadraticCurveTo(50, 215, 45, 223);
    carBody.bezierCurveTo(20, 250, 15, 270, 20, 308);
    carBody.closePath();
    carBody.fill();
    //carBody.stroke();
    
    
    
    //rearTire
    tire.fillStyle = "black";
    tire.beginPath();
    tire.ellipse(65, 308, 30, 47, 0, 0, 2 * Math.PI);
    tire.fill();
    //tire.stroke();
    
    //rearRim
    rim.fillStyle = "#c3cbd8";
    rim.beginPath();
    rim.ellipse(63, 308, 22, 37, 0, 0, 2 * Math.PI);
    rim.fill();
    //rim.stroke();

    //frontTire
    tire.fillStyle = "black";
    tire.beginPath();
    tire.ellipse(338, 313, 43, 51, 0, 0, 2 * Math.PI);
    tire.fill();
    //tire.stroke();
    
    //frontRim
    rim.fillStyle = "#c3cbd8";
    rim.beginPath();
    rim.ellipse(339, 313, 32, 39, 0, 0, 2 * Math.PI);
    rim.fill();
    //rim.stroke();
    
   
    
    //rear-right tire(under body)
    tire.strokeStyle = "white";
    tire.fillStyle = "black";
    tire.beginPath();
    tire.moveTo(64, 354);
    tire.lineTo(94, 354);
    tire.quadraticCurveTo(105, 352, 113, 335);
    tire.lineTo(99, 335);
    tire.quadraticCurveTo(98, 302, 88, 281);
    tire.quadraticCurveTo(96, 342, 64, 354);
    tire.fill();
    
    //front-right tire(under body)
    tire.fillStyle = "black";
    tire.moveTo(342, 363);
    tire.lineTo(369, 363);
    tire.quadraticCurveTo(380, 360, 390, 341);
    tire.quadraticCurveTo(381, 338, 379, 331);
    tire.closePath();
    tire.fill();
    
    //front-left tire
    tire.moveTo(470, 335);
    tire.lineTo(548, 330);
    tire.quadraticCurveTo(514, 369, 470, 338);
    tire.fill();
    
    //rear-left tire
    tire.moveTo(207, 337);
    tire.lineTo(263, 337);
    tire.quadraticCurveTo(235, 355, 207, 337);
    tire.fill();
    
    
    // ===================frontend=======================
    
     //right HeadLight
    headLights.fillStyle = "rgba(180, 238, 253, 0.67)";
    headLights.beginPath();
    headLights.moveTo(358, 240);
    headLights.quadraticCurveTo(377, 245, 398, 267);
    headLights.lineTo(455, 269);
    headLights.bezierCurveTo(420, 240, 390, 230, 358, 240);
    headLights.fill();
    //headLights.stroke();
    
    //left HeadLight
    headLights.beginPath();
    headLights.moveTo(562, 262);
    headLights.lineTo(552, 264);
    headLights.quadraticCurveTo(547, 250, 527, 235);
    headLights.quadraticCurveTo(558, 252, 562, 262);
    headLights.fill();
    //headLights.stroke();
    
    //air grill
    tire.beginPath();
    tire.fillStyle = "black";
    tire.moveTo(463, 295);
    tire.lineTo(463, 324);
    tire.lineTo(556, 318);
    tire.quadraticCurveTo(561, 294, 556, 290);
    tire.lineTo(463, 295);
    tire.fill();
    tire.beginPath();
    tire.strokeStyle = "grey";
    tire.lineWidth = "1";
    tire.moveTo(464, 298);
    tire.lineTo(550, 294);
    tire.moveTo(466, 303);
    tire.lineTo(554, 298);
    tire.moveTo(470, 308);
    tire.lineTo(554, 303);
    tire.moveTo(471, 314);
    tire.lineTo(553, 309);
    tire.moveTo(465, 320);
    tire.lineTo(547, 315);
    tire.stroke();
    
    //shadow(front bumper)
    accessories.strokeStyle = "white";
    accessories.fillStyle = "rgba(104, 175, 211, 0.43)";
    accessories.beginPath();
    accessories.moveTo(476, 294);
    accessories.lineTo(560, 289);
    accessories.quadraticCurveTo(563, 289, 568, 285);
    accessories.quadraticCurveTo(567, 267, 565, 267);
    accessories.quadraticCurveTo(540, 283, 519, 280);
    accessories.quadraticCurveTo(517, 286, 487, 275);
    accessories.quadraticCurveTo(480, 294, 476, 292);
    accessories.fill();
    accessories.beginPath();
    accessories.moveTo(434, 289);
    accessories.quadraticCurveTo(432, 269, 419, 272);
    accessories.lineTo(398, 268);
    accessories.quadraticCurveTo(382, 260, 365, 265);
    accessories.quadraticCurveTo(378, 278, 385, 304);
    accessories.quadraticCurveTo(405, 309, 385, 304);
    accessories.quadraticCurveTo(408, 312, 434, 289);
    accessories.fill();
    //accessories.stroke();
    
    
    accessories.fillStyle = "#307EA6";
    accessories.beginPath();
    accessories.moveTo(385, 304);
    accessories.quadraticCurveTo(401, 310, 411, 298);
    accessories.lineTo(423, 289);
    accessories.lineTo(434, 290);
    accessories.quadraticCurveTo(440, 296, 459, 294);
    accessories.lineTo(462, 328);
    accessories.lineTo(558, 321);
    accessories.quadraticCurveTo(561, 302, 560, 289);
    accessories.quadraticCurveTo(563, 289, 568, 285);
    accessories.quadraticCurveTo(570, 304, 566, 325);
    accessories.quadraticCurveTo(460, 334, 400, 334);
    accessories.quadraticCurveTo(387, 334, 383, 304);
    accessories.closePath();
    accessories.fill();
    //accessories.stroke();
    
    //reflector
    accessories.beginPath();
    tire.lineWidth = "2";
    accessories.fillStyle = "black";
    accessories.strokeStyle = "white";
    accessories.moveTo(412, 296);
    accessories.quadraticCurveTo(408, 286, 423, 288);
    accessories.lineTo(427, 322);
    accessories.quadraticCurveTo(419, 324, 416, 321);
    accessories.closePath();
    accessories.fill();
    //accessories.stroke();
    accessories.closePath();
    accessories.fillStyle = "orange";
    accessories.beginPath();
    accessories.moveTo(422, 289);
    accessories.lineTo(427, 322);
    accessories.lineTo(421, 322);
    accessories.lineTo(416, 289);
    accessories.closePath();
    accessories.fill();
    //accessories.stroke();
    
    //emblem(front bumper)
    accessories.beginPath();
    accessories.fillStyle = "grey";
    accessories.ellipse(514, 264, 5, 8, 18, 0, Math.PI * 2, true);
    accessories.closePath();
    accessories.fill();
    //accessories.stroke();
    
    //gap(hood & front bumper)
    accessories.beginPath();
    accessories.strokeStyle = "black";
    accessories.moveTo(441, 257);
    accessories.lineWidth = "3";
    accessories.quadraticCurveTo(511, 259, 545, 254);
    accessories.stroke();
    
    //decorative lines(hood)
    accessories.lineWidth = "1";
    accessories.moveTo(348, 214);
    accessories.quadraticCurveTo(437, 222, 482, 251);
    accessories.moveTo(440, 218);
    accessories.quadraticCurveTo(492, 226, 516, 249);
    accessories.stroke();
    
    //gap(hood & fender)
    accessories.moveTo(283, 218);
    accessories.quadraticCurveTo(290, 225, 300, 225);
    accessories.lineTo(374, 235);
    accessories.stroke();
    
     // ===================side panel=======================
    //shadow(body)
    door.beginPath();
    door.fillStyle = "rgba(104, 175, 211, 0.43)";
    door.moveTo(294, 280);
    door.quadraticCurveTo(283, 290, 282, 271);
    door.quadraticCurveTo(285, 259, 267, 260);
    door.lineTo(117, 255);
    door.quadraticCurveTo(100, 254, 101, 263);
    door.quadraticCurveTo(98, 272, 89, 263);
    door.quadraticCurveTo(100, 284, 108, 324);
    door.quadraticCurveTo(203, 324, 291, 328);
    door.quadraticCurveTo(283, 302, 294, 280);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //logo
    accessories.beginPath();
    accessories.fillStyle = "grey";
    accessories.ellipse(269, 269, 5, 6, 0, 0, Math.PI * 2, true);
    accessories.fill();
    
    //shadow door
    //door.strokeStyle = "white";
    door.beginPath();
    door.fillStyle = "grey";
    door.moveTo(258, 314);
    door.lineTo(252, 322);
    door.lineTo(173, 318);
    door.quadraticCurveTo(153, 318, 142, 307);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //door
    door.beginPath();
    door.moveTo(252, 221);
    door.quadraticCurveTo(262, 235, 259, 259);
    door.lineTo(257, 314);
    door.lineTo(252, 322);
    door.lineTo(173, 318);
    door.quadraticCurveTo(128, 322, 122, 250);
    door.quadraticCurveTo(121, 235, 128, 223);
    door.lineTo(131, 217);
    door.closePath();
    door.stroke();
    
    //door handle
    door.beginPath();
    door.fillStyle = "#8B9696";
    door.moveTo(122, 250);
    door.quadraticCurveTo(121, 235, 128, 223);
    door.lineTo(137, 223);
    door.lineTo(133, 251);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //door window
    door.beginPath();
    door.fillStyle = "rgba(180, 238, 253, 0.67)";
    door.strokeStyle = "white";
    door.moveTo(143, 214);
    door.lineTo(149, 183);
    door.quadraticCurveTo(204, 159, 230, 195);
    door.lineTo(228, 205);
    door.quadraticCurveTo(211, 198, 193, 208);
    door.lineTo(193, 216);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //corner window
    door.beginPath();
    door.moveTo(137, 190);
    door.quadraticCurveTo(109, 200, 110, 214);
    door.lineTo(132, 213);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //window seal finisher
    door.beginPath();
    door.fillStyle = "black";
    door.moveTo(132, 213);
    door.quadraticCurveTo(134, 197, 139, 187);
    door.lineTo(149, 183);
    door.quadraticCurveTo(145, 198, 143, 213);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //window seals
    door.beginPath();
    door.lineWidth = "4";
    door.strokeStyle = "black";
    door.moveTo(193, 217);
    door.lineTo(108, 214);
    door.quadraticCurveTo(105, 203, 137, 188);
    door.lineTo(131, 214);
    //door.fill();
    door.stroke();
    
    //rear view mirror
    door.beginPath();
    door.fillStyle = "grey";
    door.moveTo(230, 195);
    door.lineTo(228, 205);
    door.quadraticCurveTo(211, 198, 193, 208);
    door.lineTo(193, 218);
    door.lineTo(246, 220);
    door.closePath();
    door.fill();
    //door.stroke();
    
    //fill tank cap
    door.beginPath();
    door.strokeStyle = "black";
    door.lineWidth = "1";
    door.ellipse(41, 246, 3, 11, 10, 0, Math.PI * 2, false);
    //door.fill();
    door.stroke();
    
    //tail light
    door.beginPath();
    door.fillStyle = "#E4052E";
    door.moveTo(68, 220);
    door.lineTo(26, 246);
    door.quadraticCurveTo(34, 232, 40, 227);
    door.quadraticCurveTo(52, 220, 68, 220);
    door.fill();
    //door.stroke();
    
    
    
    //====================windows===================
    //front window
    windshield.beginPath();
    windshield.fillStyle = "rgba(180, 238, 253, 0.67)";
    windshield.moveTo(236, 183);
    windshield.quadraticCurveTo(227, 173, 245, 171);
    windshield.quadraticCurveTo(305, 163, 350, 172);
    windshield.quadraticCurveTo(379, 182, 410, 211);
    windshield.lineTo(263, 218);
    windshield.closePath();
    windshield.fill();
    //windshield.stroke();
    
    //front left door window
    windshield.beginPath();
    windshield.fillStyle = "rgba(48, 166, 146, 0.3)";
    windshield.moveTo(291, 189);
    windshield.quadraticCurveTo(332, 194, 320, 178);
    windshield.quadraticCurveTo(336, 174, 384, 209);
    windshield.lineTo(363, 210);
    windshield.quadraticCurveTo(347, 190, 330, 211);
    windshield.lineTo(302, 211);
    windshield.closePath();
    windshield.fill();
    //windshield.stroke();
    
    //rear window
    windshield.beginPath();
    windshield.fillStyle = "rgba(48, 166, 146, 0.3)";
    windshield.moveTo(172, 206);
    windshield.quadraticCurveTo(172, 186, 190, 187);
    windshield.quadraticCurveTo(205, 186, 206, 197);
    windshield.lineTo(222, 190);
    windshield.lineTo(217, 185);
    windshield.lineTo(172, 185);
    windshield.quadraticCurveTo(155, 186, 156, 206);
    windshield.closePath();
    windshield.fill();
    //windshield.stroke();
    
    //steering wheel
    windshield.beginPath();
    windshield.fillStyle = "rgba(48, 166, 146, 0.3)";
    windshield.moveTo(353, 212);
    windshield.lineTo(358, 211);
    windshield.quadraticCurveTo(357, 207, 353, 206);
    windshield.closePath();
    windshield.moveTo(340, 212);
    windshield.lineTo(342, 206);
    windshield.lineTo(336, 211);
    windshield.closePath();
    windshield.fill();
    //windshield.stroke();
    
    //wiper
    windshield.beginPath();
    windshield.strokeStyle = "black";
    windshield.lineWidth = "3";
    windshield.moveTo(261, 212);
    windshield.lineTo(274, 216);
    windshield.quadraticCurveTo(312, 209, 349, 215);
    windshield.moveTo(349, 215);
    windshield.quadraticCurveTo(379, 209, 407, 213);
    windshield.stroke();
    
}