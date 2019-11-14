let buttonOne = false;
let buttonTwo = false;
let buttonThree = false;
let info = document.querySelector("#sub-navigation");

function subMenu() {

    if(buttonOne === false && buttonTwo === false) {
        info.style.maxHeight = "20vh";
        buttonOne = true;
    } else if(buttonOne === false && buttonTwo === true) {
        info.style.maxHeight = "60vh";
        buttonOne = true;
    } else if(buttonOne === true) {
        info.style.maxHeight = "0vh";
        buttonOne = false;
    }
}

function subAbout() {
    let infoTwo = document.querySelector("#sub-about");
    let buttonAnimate = document.querySelector("#sub-about-button");
    
    if(buttonTwo === false) {
        info.style.maxHeight = "60vh";
        infoTwo.style.maxHeight = "40vh";
        buttonAnimate.style.transform = "rotate(0deg)";
        buttonTwo = true;
    } else if(buttonTwo === true) {
        info.style.maxHeight = "20vh";
        infoTwo.style.maxHeight = "0vh";
        buttonAnimate.style.transform = "rotate(45deg)";
        buttonTwo = false;
    }
}

function menuLists() {
    let infoThreeButton = document.querySelector("#menu-page .positioning");
    let infoThreeButtonH4 = document.querySelector("#menu-page .positioning h4");
    let infoThreeButtonFas = document.querySelector("#menu-page .positioning i");
    let infoThree = document.querySelector("#menu-lists");

    const mobileView = window.matchMedia("(min-width: 320px)");
    const tabletView = window.matchMedia("(min-width: 768px)");
    
    if(matchMedia) {
        mobileView.addListener(mobileViewChange);
        mobileViewChange(mobileView);
    }    
    
    if(matchMedia) {
        tabletView.addListener(tabletViewChange);
        tabletViewChange(tabletView);
    }    

    function mobileViewChange(mobileView) {
        if(mobileView.matches) {
            if(buttonThree === false) {
                infoThreeButton.style.opacity = "1";
                
                infoThreeButtonH4.style.maxWidth = "50vw";
                infoThreeButtonH4.style.visibility = "visible";
                infoThreeButtonH4.style.padding = "2px 5px";
        
                infoThreeButtonFas.style.transform = "rotate(180deg)";
        
                infoThree.style.maxWidth = "60vw";
                buttonThree = true;
            } else if(buttonThree === true) {
        
                infoThreeButtonH4.style.visibility = "hidden";
                infoThreeButtonH4.style.maxWidth = "0vw";
                infoThreeButtonH4.style.padding = "0px";
        
                infoThreeButtonFas.style.transform = "rotate(0deg)";
        
                infoThree.style.maxWidth = "0vw";
                infoThreeButton.style.opacity = "0.5";
                buttonThree= false;
            } else if(mobileView.matches && buttonThree === false) {
                infoThree.style.maxWidth = "0vw";
                buttonThree = true;
            }
        }
    }

    function tabletViewChange(tabletView) {
        if(tabletView.matches) {
            infoThree.style.maxWidth = "60vw";
        } else if(mobileView.matches && buttonThree === false) {
            infoThree.style.maxWidth = "0vw";
        }
    }
}