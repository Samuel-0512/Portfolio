// hamburger menu for mobile view
const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', mobileNav=()=>{
    const mobileNav = document.querySelector('.side-nav');
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('mobile');
})
// closing mobile nav via main window

/*window toggling */
const tab1 = document.querySelector('.window-1');
const tab2 = document.querySelector('.window-2');
const tab3 = document.querySelector('.window-3');
const tab4 = document.querySelector('.window-4');
const tab5 = document.querySelector('.window-5');
const tab6 = document.querySelector('.window-6');

const switchToWindow1=()=>{
    tab1.style.display = "flex";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    tab6.style.display = "none";
}
const switchToWindow2=()=>{
    tab1.style.display = "none";
    tab2.style.display = "flex";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    tab6.style.display = "none";
}
const switchToWindow3=()=>{
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "flex";
    tab4.style.display = "none";
    tab5.style.display = "none";
    tab6.style.display = "none";
}
const switchToWindow4=()=>{
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "flex";
    tab5.style.display = "none";
    tab6.style.display = "none";
}
const switchToWindow5=()=>{
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "flex";
    tab6.style.display = "none";
}
const switchToWindow6=()=>{
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
    tab6.style.display = "flex";
}

// script to switch mode
const switchMode=()=>{
    const firstSkill = document.querySelector('.content-1');
    const secondSkill = document.querySelector('.content-2');
    const thirdSkill = document.querySelector('.content-3');
    const forthSkill = document.querySelector('.content-4');
    const fifthSkill = document.querySelector('.content-5');
    const sixthSkill = document.querySelector('.content-6');
    const sideNav = document.querySelector('.side-nav');
    const mainWindow = document.querySelector('.main-window');
    sideNav.classList.toggle('is-active');
    mainWindow.classList.toggle('active');
    firstSkill.classList.toggle('dark');
    secondSkill.classList.toggle('dark');
    thirdSkill.classList.toggle('dark');
    forthSkill.classList.toggle('dark');
    fifthSkill.classList.toggle('dark');
    sixthSkill.classList.toggle('dark');
}


// project pop up section
popUpC=()=>{
    const travel = document.querySelector('#travel');
    const realEstate = document.querySelector('#real-estate');
    travel.style.display = 'flex';
    realEstate.style.display = 'none';
};

popUpD=()=>{
    const travel = document.querySelector('#travel');
    const realEstate = document.querySelector('#real-estate');
    travel.style.display = 'none';
    realEstate.style.display = 'flex';
};

// to close all pop up window
closePopUp=()=>{
    const travel = document.querySelector('#travel');
    const realEstate = document.querySelector('#real-estate');
    travel.style.display = 'none';
    realEstate.style.display = 'none';
}