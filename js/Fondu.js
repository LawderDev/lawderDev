const arrayFadeHome = [
    document.querySelector("header p"),
    document.querySelector("#linkA"),
    document.querySelector("#linkB"),
    document.querySelector("#linkC"),
    document.querySelector("#linkD"),
    document.querySelector("header h1"),
    document.querySelector("header h2"),
    document.querySelector("header"),
];

const arrayFadeSkill = [
    document.querySelector("#Skills #Skills1"),
    document.querySelector("#Skills #Skills2"),
    document.querySelector("#Skills #Skills3"),
    document.querySelector("#Skills #Skills4"),
    document.querySelector("#Skills #Skills5"),
];

const arrayFadeCareer = [
    document.querySelector("#Career #Career1"),
    document.querySelector("#Career #Career2"),
];

const arrayFadeAbout = [
    document.querySelector("#About #About1"),
    document.querySelector("#About #About2"),
];

    const arrayFadeIcons = [
    document.querySelector("a[href=\"https://www.facebook.com/LawderDev-100756294963908\"]"),
    document.querySelector("a[href=\"https://www.instagram.com/lawderdev/\"]"),
    document.querySelector("a[href=\"https://twitter.com/lawderDev\"]"),
    document.querySelector("a[href=\"https://www.linkedin.com/in/kenny-ramin-35977619a/\"]"),
];

const arrayFadeInfos = [
    document.querySelector("#Infos p"),
    document.querySelector("a[href=\"mailto:kenny.ramin433@gmail.com\"]"),
];

let timeFade = 240;

/**
 * Initialize the opacities of elements
 */
function InitOpacities(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] != undefined  && elements[i].tagName !== "HEADER") {
            elements[i].style.opacity = 0;
        } else if(elements[i] != undefined){
            elements[i].style.opacity = 0.7;
        }

    }
}

/**
 * Active the fade at a certaintime
 * @param {*} i the posistion of the element on the array
 * @param {*} nb the number of second we wait
 */
function fadeTime(element, time) {
    const x = setTimeout(function () {
        let timer;
        let opacity;
        if (element.tagName === "HEADER") {
            opacity = 0.7;
            timer = 95;
        } else {
            opacity = 0;
            timer = 70;
        }
        const y = setInterval(function () {
            opacity += 0.08;
            element.style.opacity = opacity;
            if (opacity >= 1)
                clearInterval(y);
        }, timer);
        clearInterval(x);
    }, time);
}

/**
 * Launch the fade of all elements
 */
function fadeStart(elements) {
    InitOpacities(elements);
    let time = 70;
    for (let i = 0; i < elements.length; i++) {
        time += timeFade;
        fadeTime(elements[i], time);
    }
}

window.addEventListener("scroll", function fadeSkills() {
    const skills = document.querySelector("#Skills");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        fadeStart(arrayFadeSkill);
        removeEventListener("scroll", fadeSkills);
    }
});

window.addEventListener("scroll", function fadeSkills() {
    const skills = document.querySelector("#Career");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        fadeStart(arrayFadeCareer);
        removeEventListener("scroll", fadeSkills);
    }
});

window.addEventListener("scroll", function fadeSkills() {
    const skills = document.querySelector("#About");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        fadeStart(arrayFadeAbout);
        removeEventListener("scroll", fadeSkills);
    }
});

window.addEventListener("scroll", function fadeSkills() {
    const skills = document.querySelector("#Icons");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        fadeStart(arrayFadeIcons);
        removeEventListener("scroll", fadeSkills);
    }
});

window.addEventListener("scroll", function fadeSkills() {
    const skills = document.querySelector("#Infos");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        fadeStart(arrayFadeInfos);
        removeEventListener("scroll", fadeSkills);
    }
});



fadeStart(arrayFadeHome);