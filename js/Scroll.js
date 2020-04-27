const arrayScrollSkill = [
    document.querySelector("#Skills .titleLeftA"),
    document.querySelector("#Skills .titleRightA"),
    document.querySelector("#Skills .titleLeftB"),
    document.querySelector("#Skills .titleRightB"),
    document.querySelector("#Skills .titleLeftC")
];

const arrayScrollCareer = [
    document.querySelector("#Career .titleLeftA"),
    document.querySelector("#Career .titleRightA")
];
const arrayScrollAbout = [
    document.querySelector("#About .titleLeftA"),
    document.querySelector("#About .titleRightA")
];

let nb = 70;


function InitScroll(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i].className.indexOf("Left") != -1)
            element[i].style.marginLeft = -100 + "%";
        else
            element[i].style.marginLeft = 160 + "%";
    }
}


function scrollAction(element, marginStart) {
    let scroll;
    switch (marginStart) {
        case "left":
            scroll = -60;
            break;
        case "right":
            scroll = 60;
    }
    const x = setInterval(function () {

        console.log(marginStart);
        switch (marginStart) {
            case "left":
                scroll += 1;
                element.style.marginLeft = scroll + "%";
                if (scroll >= 0)
                    clearInterval(x);
                break;
            case "right":
                scroll -= 1;
                element.style.marginLeft = scroll + "%";

                if (scroll <= 0)
                    clearInterval(x);
        }
    }, 12);
}

function scrollComp(i, nb, element, marginStart) {
    const x = setTimeout(function () {
        scrollAction(element[i], marginStart);

        clearInterval(x);
    }, nb);
}

function startScroll(element, i, marginStart) {
    nb += 150;
    scrollComp(i, nb, element, marginStart);
}


function LaunchScroll(element) {
    for (let i = 0; i < element.length; i++) {

        if (element[i].className.indexOf("Left") != -1)
            startScroll(element, i, "left");
        else
            startScroll(element, i, "right");
    }
}


InitScroll(arrayScrollSkill);
InitScroll(arrayScrollCareer);
InitScroll(arrayScrollAbout);

window.addEventListener("scroll", function scrollSkills() {
    const skills = document.querySelector("#Skills");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        LaunchScroll(arrayScrollSkill);
        removeEventListener("scroll", scrollSkills);
    }
});

window.addEventListener("scroll", function scrollCareer() {
    const career = document.querySelector("#Career");
    const target = career.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        LaunchScroll(arrayScrollCareer);
        removeEventListener("scroll", scrollCareer);
    }
});

window.addEventListener("scroll", function scrollAbout() {
    const about = document.querySelector("#About");
    const target = about.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        LaunchScroll(arrayScrollAbout);
        removeEventListener("scroll", scrollAbout);
    }
});