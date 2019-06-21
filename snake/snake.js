let zybex = new Audio(`../music/zybex.mp3`);


window.onload = function () {
    let game = new Game();
    let nameP1 = document.getElementById("nameP1");
    let nameP2 = document.getElementById("nameP2");
    let nameP3 = document.getElementById("nameP3");
    let nameP4 = document.getElementById("nameP4");
    let leftP1 = document.getElementById("leftP1");
    let leftP2 = document.getElementById("leftP2");
    let leftP3 = document.getElementById("leftP3");
    let leftP4 = document.getElementById("leftP4");
    let rightP1 = document.getElementById("rightP1");
    let rightP2 = document.getElementById("rightP2");
    let rightP3 = document.getElementById("rightP3");
    let rightP4 = document.getElementById("rightP4");
    let createP1 = document.getElementById("createP1");
    let createP2 = document.getElementById("createP2");
    let createP3 = document.getElementById("createP3");
    let createP4 = document.getElementById("createP4");
    let play = document.getElementById("btn-play");
    let sound = document.getElementById("btn-sound");
    let players = 0;
    let useKeys = [];

    sound.onclick = function () {
            zybex.play();
    }

    createP1.onclick = function () {
        if (nameP1.value !== "" && leftP1.value !== "" && rightP1.value !== "") {
            if (leftP1.value !== rightP1.value) {
                nameP2.disabled = false;
                leftP2.disabled = false;
                rightP2.disabled = false;
                createP2.disabled = false;
                nameP1.disabled = true;
                leftP1.disabled = true;
                rightP1.disabled = true;
                createP1.disabled = true;
                useKeys.push(leftP1.value);
                useKeys.push(rightP1.value);
                play.disabled = false;
                players++;
                nameP2.focus();
            }
            else {
                alert("Control keys can't be equals");
                rightP1.focus();
            }
        }
        else {
            if (nameP1.value === "") {
                alert("Put your player name");
                nameP1.focus();
            }
            else if (leftP1.value === "") {
                alert("Select key to control left move");
                leftP1.focus();
            }
            else {
                alert("Select key to control right move");
                rightP1.focus();
            }
        }

    };

    createP2.onclick = function () {

        if (nameP2.value !== "" && leftP2.value !== "" && rightP2.value !== "") {
            if (leftP2.value !== rightP2.value) {
                if (!useKeys.includes(leftP2.value)) {
                    if (!useKeys.includes(rightP2.value)) {
                        nameP3.disabled = false;
                        leftP3.disabled = false;
                        rightP3.disabled = false;
                        createP3.disabled = false;
                        nameP2.disabled = true;
                        leftP2.disabled = true;
                        rightP2.disabled = true;
                        createP2.disabled = true;
                        useKeys.push(leftP2.value);
                        useKeys.push(rightP2.value);
                        players++;
                        nameP3.focus();
                    }
                    else {
                        alert("Right control key is already selected by another player.");
                        rightP2.focus();
                    }
                }
                else {
                    alert("Left control key is already selected by another player.");
                    leftP2.focus();
                }
            }
            else {
                alert("Control keys can't be equals");
                rightP2.focus();
            }
        }
        else {
            if (nameP2.value === "") {
                alert("Put your player name");
                nameP2.focus();
            }
            else if (leftP2.value === "") {
                alert("Select key to control left move");
                leftP2.focus();
            }
            else {
                alert("Select key to control right move");
                rightP2.focus();
            }
        }

    };

    createP3.onclick = function () {
        if (nameP3.value !== "" && leftP3.value !== "" && rightP3.value !== "") {
            if (leftP3.value !== rightP3.value) {
                if (!useKeys.includes(leftP3.value)) {
                    if (!useKeys.includes(rightP3.value)) {
                        nameP4.disabled = false;
                        leftP4.disabled = false;
                        rightP4.disabled = false;
                        createP4.disabled = false;
                        nameP3.disabled = true;
                        leftP3.disabled = true;
                        rightP3.disabled = true;
                        createP3.disabled = true;
                        useKeys.push(leftP3.value);
                        useKeys.push(rightP3.value);
                        players++;
                        nameP4.focus();
                       
                    }
                    else {
                        alert("Right control key is already selected by another player.");
                        rightP3.focus();
                    }
                }
                else {
                    alert("Left control key is already selected by another player.");
                    leftP3.focus();
                }
            }
            else {
                alert("Control keys can't be equals");
                rightP3.focus();
            }
        }
        else {
            if (nameP3.value === "") {
                alert("Put your player name");
                nameP3.focus();
            }
            else if (leftP3.value === "") {
                alert("Select key to control left move");
                leftP3.focus();
            }
            else {
                alert("Select key to control right move");
                rightP3.focus();
            }
        }

    };

    createP4.onclick = function () {
        if (nameP4.value !== "" && leftP4.value !== "" && rightP4.value !== "") {
            if (leftP4.value !== rightP4.value) {
                if (!useKeys.includes(leftP4.value)) {
                    if (!useKeys.includes(rightP4.value)) {
                        nameP4.disabled = true;
                        leftP4.disabled = true;
                        rightP4.disabled = true;
                        createP4.disabled = true;
                        players++;
                        play.focus();
                    }
                    else {
                        alert("Right control key is already selected by another player.");
                        rightP4.focus();
                    }
                }
                else {
                    alert("Left control key is already selected by another player.");
                    leftP4.focus();
                }
            }
            else {
                alert("Control keys can't be equals");
                rightP4.focus();
            }
        }
        else {
            if (nameP4.value === "") {
                alert("Put your player name");
                nameP4.focus();
            }
            else if (leftP4.value === "") {
                alert("Select key to control left move");
                leftP4.focus();
            }
            else {
                alert("Select key to control right move");
                rightP4.focus();
            }
        }

    };

    

    play.onclick = function () {
        zybex.pause();
        nameP1 = nameP1.value;
        leftP1 = leftP1.value;
        rightP1 = rightP1.value;
        nameP2 = nameP2.value;
        leftP2 = leftP2.value;
        rightP2 = rightP2.value;
        nameP3 = nameP3.value;
        leftP3 = leftP3.value;
        rightP3 = rightP3.value;
        nameP4 = nameP4.value;
        leftP4 = leftP4.value;
        rightP4 = rightP4.value;
        document.querySelector("#config").setAttribute("class", "not-visible");
        document.getElementById("game").setAttribute("class", "visible");
        switch (players) {
            case 1:
                document.getElementById("p1-content").hidden = false;
                document.getElementById("p1").innerHTML = nameP1;
                document.getElementById("left-p1").innerHTML = leftP1.toUpperCase();
                document.getElementById("right-p1").innerHTML = rightP1.toUpperCase();
                break;
            case 2:
                document.getElementById("p1-content").hidden = false;
                document.getElementById("p1").innerHTML = nameP1;
                document.getElementById("left-p1").innerHTML = leftP1.toUpperCase();
                document.getElementById("right-p1").innerHTML = rightP1.toUpperCase();
                document.getElementById("p2-content").hidden = false;
                document.getElementById("p2").innerHTML = nameP2;
                document.getElementById("left-p2").innerHTML = leftP2.toUpperCase();
                document.getElementById("right-p2").innerHTML = rightP2.toUpperCase();
                break;
            case 3:
                document.getElementById("p1-content").hidden = false;
                document.getElementById("p1").innerHTML = nameP1;
                document.getElementById("left-p1").innerHTML = leftP1.toUpperCase();
                document.getElementById("right-p1").innerHTML = rightP1.toUpperCase();
                document.getElementById("p2-content").hidden = false;
                document.getElementById("p2").innerHTML = nameP2;
                document.getElementById("left-p2").innerHTML = leftP2.toUpperCase();
                document.getElementById("right-p2").innerHTML = rightP2.toUpperCase();
                document.getElementById("p3-content").hidden = false;
                document.getElementById("p3").innerHTML = nameP3;
                document.getElementById("left-p3").innerHTML = leftP3.toUpperCase();
                document.getElementById("right-p3").innerHTML = rightP3.toUpperCase();
                break;
            case 4:
                document.getElementById("p1-content").hidden = false;
                document.getElementById("p1").innerHTML = nameP1;
                document.getElementById("left-p1").innerHTML = leftP1.toUpperCase();
                document.getElementById("right-p1").innerHTML = rightP1.toUpperCase();
                document.getElementById("p2-content").hidden = false;
                document.getElementById("p2").innerHTML = nameP2;
                document.getElementById("left-p2").innerHTML = leftP2.toUpperCase();
                document.getElementById("right-p2").innerHTML = rightP2.toUpperCase();
                document.getElementById("p3-content").hidden = false;
                document.getElementById("p3").innerHTML = nameP3;
                document.getElementById("left-p3").innerHTML = leftP3.toUpperCase();
                document.getElementById("right-p3").innerHTML = rightP3.toUpperCase();
                document.getElementById("p4-content").hidden = false;
                document.getElementById("p4").innerHTML = nameP4;
                document.getElementById("left-p4").innerHTML = leftP4.toUpperCase();
                document.getElementById("right-p4").innerHTML = rightP4.toUpperCase();
                break;
        }
        let controls = [leftP1,rightP1,leftP2,rightP2,leftP3,rightP3,leftP4,rightP4];
        game.init(players,controls);
        
    }
}
