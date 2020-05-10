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

const arrayAutoScroll = [
    document.querySelector("#linkA"),
    document.querySelector("#linkB"),
    document.querySelector("#linkC"),
    document.querySelector("#linkD")
];

let isScroll = false;


let nb = 70;

/**
 * Initialize element for scroll effect
 * @param element the element
 */
function initScroll(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i].className.indexOf("Left") != -1) {
            element[i].style.marginLeft = -100 + "%";
        }
        else {
            element[i].style.marginLeft = 160 + "%";
        }
    }
}

/**
 * Manage the scroll.
 * @param element the element
 * @param marginStart the default margin
 */
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

/**
 * Set time for scroll
 * @param i the index of the element
 * @param nb the time for timeout
 * @param element the element
 * @param marginStart the default margin
 */
function scrollTime(i, nb, element, marginStart) {
    const x = setTimeout(function () {
        scrollAction(element[i], marginStart);

        clearInterval(x);
    }, nb);
}

/**
 * Start the scroll
 * @param element the element
 * @param i the index
 * @param marginStart the margin of default
 */
function startScroll(element, i, marginStart) {
    nb += 150;
    scrollTime(i, nb, element, marginStart);
}

/**
 * Launch scroll for all elements on an array
 * @param element the array
 */
function launchScroll(element) {
    for (let i = 0; i < element.length; i++) {

        if (element[i].className.indexOf("Left") != -1)
            startScroll(element, i, "left");
        else
            startScroll(element, i, "right");
    }
}

/**
 * Scroll on the bottom automatically.
 * @param target the target
 */
function scrollAutoBottom(target)
{
    isScroll = true;
    window.scrollBy(0,7);
    let timeOut = setTimeout( function(){
        console.log(target);
        let windowHeight = document.documentElement.clientHeight;
        if (window.pageYOffset + windowHeight >= target) {
            isScroll = false;
            clearInterval(timeOut);
        }else{
        scrollAutoBottom(target);
        }
    }, 1);

}

/**
 * Scroll on the top automatically
 * @param target the target
 */
function scrollAutoTop(target){
    isScroll = true;
    window.scrollBy(0,-7);
    let timeOut = setTimeout( function(){
        console.log(target);
        let windowHeight = document.documentElement.clientHeight;
        if (window.pageYOffset + windowHeight <= target) {
            isScroll = false;
            clearInterval(timeOut);

        }else{
            scrollAutoTop(target);
        }
    }, 1);
}

/**
 * Initialize element to click for automatic scroll
 */
function initAutoScroll(){
    for(let i = 0;i<arrayAutoScroll.length;i++){
        arrayAutoScroll[i].addEventListener('click',function() {

            arrayAutoScroll[i].removeAttribute('href');
            console.log(arrayAutoScroll[i].id);
            let windowHeight = document.documentElement.clientHeight;
            let elementToGo;
            let target;
            let compensation;
            let mediaAccueil = false;

            let compensationAccueil;
            if (window.matchMedia("(max-height: 768px)").matches && window.matchMedia("(max-width: 740px)").matches) {
                compensationAccueil = -50;
                compensation = 550;
            }
            else if(window.matchMedia("(max-height: 850px)").matches && window.matchMedia("(max-width: 740px)").matches) {
                compensationAccueil = -100;
                compensation = 475;
            }
            else
                compensation=80;

            if(!isScroll) {
                switch (arrayAutoScroll[i].id) {
                    case "linkA":
                        console.log("enter");
                        elementToGo = document.querySelector("#Home");

                        if (window.matchMedia("(max-width: 768px)").matches) {
                            mediaAccueil = true;
                            target = elementToGo.offsetTop + elementToGo.offsetHeight - compensationAccueil;
                        }else{
                            mediaAccueil = false;
                        }
                        console.log(elementToGo);
                        break;
                    case "linkB":
                        console.log("enter")
                        elementToGo = document.querySelector("#Skills");
                        break;
                    case "linkC":
                        elementToGo = document.querySelector("#Career");
                        break;
                    case "linkD":
                        elementToGo = document.querySelector("#About");
                        break;
                }

                if(!mediaAccueil) {
                    if (window.matchMedia("(max-width: 768px)").matches)
                        target = elementToGo.offsetTop + elementToGo.offsetHeight - compensation;
                    else
                        target = elementToGo.offsetTop + elementToGo.offsetHeight - compensation;
                }
                if (window.pageYOffset + windowHeight >= target)
                    scrollAutoTop(target);
                else
                    scrollAutoBottom(target);
            }

        });
    }


}

initAutoScroll();
initScroll(arrayScrollSkill);
initScroll(arrayScrollCareer);
initScroll(arrayScrollAbout);

window.addEventListener("scroll", function stickNav() {
    const nav = document.querySelector("#Home nav");
    const title = document.querySelector("#Home h1");
    const target = nav.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        if(window.matchMedia("(max-width: 768px)").matches)
            title.style.paddingTop = 15 + "%";
        else{
            nav.style.position = "fixed";
            nav.style.width = 100 + "%";
            nav.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
            nav.style.opacity = 0.7;
            if(window.matchMedia("(min-width: 1600px)").matches) {
                title.style.paddingTop = 20.8 + "%";
            }else{
                title.style.paddingTop = 20.5 + "%";
            }
        }
    }
});


window.addEventListener("scroll", function initNav() {
    const header = document.querySelector("header");
    const nav = document.querySelector("#Home nav");
    const title = document.querySelector("#Home h1");
    const target = header.offsetTop;
    if (window.pageYOffset === target) {
        nav.style.position = "initial";
        nav.style.backgroundColor = "unset";
        nav.style.opacity = 1;
        title.style.paddingTop = 15 + "%";
    }
});

window.addEventListener("scroll", function scrollSkills() {
    const skills = document.querySelector("#Skills");
    const target = skills.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        launchScroll(arrayScrollSkill);
        removeEventListener("scroll", scrollSkills);
    }
});

window.addEventListener("scroll", function scrollCareer() {
    const career = document.querySelector("#Career");
    const target = career.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        launchScroll(arrayScrollCareer);
        removeEventListener("scroll", scrollCareer);
    }
});

window.addEventListener("scroll", function scrollAbout() {
    const about = document.querySelector("#About");
    const target = about.offsetTop;
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset + windowHeight >= target) {
        launchScroll(arrayScrollAbout);
        removeEventListener("scroll", scrollAbout);
    }
});

