// body background
let body = document.getElementById("body");

// button
let lightDark = document.getElementById("lightDark");
let biru = document.getElementById("biru");
let merah = document.getElementById("merah");
let hijau = document.getElementById("hijau");
let btnCard5 = document.getElementById("btnCard5");

// label switch
let lightDarkLabel = document.getElementById("lightDarkLabel");
let biruLabel = document.getElementById("biruLabel");
let merahLabel = document.getElementById("merahLabel");
let hijauLabel = document.getElementById("hijauLabel");

// navbar
let navSwitch = document.getElementById("navSwitch");
let navBtn = document.getElementById("navBtn");

// footer
let footer = document.getElementById("footer");

// content
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");

function lightDarkTheme() {
    // navbar switch
    if (body.classList == "bg-dark-subtle") {
        // dark mode
        navSwitch.classList = "navbar navbar-expand-lg bg-black sticky-top";
        body.classList = "bg-secondary";
        footer.classList = "sticky-bottom bg-black text-light text-center pt-3 pb-3";
        card1.classList = "card text-bg-dark bg-opacity-75";
        card2.classList = "card text-bg-dark bg-opacity-75";
        card3.classList = "card text-bg-dark bg-opacity-75";
        card4.classList = "card text-bg-dark bg-opacity-75";
        card5.classList = "card text-bg-dark bg-opacity-75";
        navSwitch.setAttribute("data-bs-theme", "dark");
        navBtn.classList = "btn btn-outline-light";
        btnCard5.classList = "btn btn-outline-light";
        lightDarkLabel.innerHTML = "On";
        biru.disabled = true;
        merah.disabled = true;
        hijau.disabled = true;
    } else {
        navSwitch.classList = "navbar navbar-expand-lg bg-light sticky-top";
        body.classList = "bg-dark-subtle";
        footer.classList = "sticky-bottom bg-light text-center pt-3 pb-3";
        card1.classList = "card";
        card2.classList = "card";
        card3.classList = "card";
        card4.classList = "card";
        card5.classList = "card";
        navSwitch.setAttribute("data-bs-theme", "light");
        navBtn.classList = "btn btn-outline-dark";
        btnCard5.classList = "btn btn-outline-dark";
        lightDarkLabel.innerHTML = "Off";
        biru.disabled = false;
        merah.disabled = false;
        hijau.disabled = false;
    }
}

function biruTheme() {
    // navbar switch
    if (body.classList == "bg-dark-subtle") {
        // dark mode
        navSwitch.classList = "navbar navbar-expand-lg bg-primary sticky-top";
        body.classList = "bg-primary-subtle";
        footer.classList = "sticky-bottom bg-primary text-light text-center pt-3 pb-3";
        card1.classList = "card text-bg-primary bg-opacity-75";
        card2.classList = "card text-bg-primary bg-opacity-75";
        card3.classList = "card text-bg-primary bg-opacity-75";
        card4.classList = "card text-bg-primary bg-opacity-75";
        card5.classList = "card text-bg-primary bg-opacity-75";
        navSwitch.setAttribute("data-bs-theme", "dark");
        navBtn.classList = "btn btn-outline-light";
        btnCard5.classList = "btn btn-outline-light";
        biruLabel.innerHTML = "On";
        lightDark.disabled = true;
        merah.disabled = true;
        hijau.disabled = true;
    } else {
        navSwitch.classList = "navbar navbar-expand-lg bg-light sticky-top";
        body.classList = "bg-dark-subtle";
        footer.classList = "sticky-bottom bg-light text-center pt-3 pb-3";
        card1.classList = "card";
        card2.classList = "card";
        card3.classList = "card";
        card4.classList = "card";
        card5.classList = "card";
        navSwitch.setAttribute("data-bs-theme", "light");
        navBtn.classList = "btn btn-outline-dark";
        btnCard5.classList = "btn btn-outline-dark";
        biruLabel.innerHTML = "Off";
        lightDark.disabled = false;
        merah.disabled = false;
        hijau.disabled = false;
    }
}

function merahTheme() {
    // navbar switch
    if (body.classList == "bg-dark-subtle") {
        // dark mode
        navSwitch.classList = "navbar navbar-expand-lg bg-danger sticky-top";
        body.classList = "bg-danger-subtle";
        footer.classList = "sticky-bottom bg-danger text-light text-center pt-3 pb-3";
        card1.classList = "card text-bg-danger bg-opacity-75";
        card2.classList = "card text-bg-danger bg-opacity-75";
        card3.classList = "card text-bg-danger bg-opacity-75";
        card4.classList = "card text-bg-danger bg-opacity-75";
        card5.classList = "card text-bg-danger bg-opacity-75";
        navSwitch.setAttribute("data-bs-theme", "dark");
        navBtn.classList = "btn btn-outline-light";
        btnCard5.classList = "btn btn-outline-light";
        merahLabel.innerHTML = "On";
        lightDark.disabled = true;
        biru.disabled = true;
        hijau.disabled = true;
    } else {
        navSwitch.classList = "navbar navbar-expand-lg bg-light sticky-top";
        body.classList = "bg-dark-subtle";
        footer.classList = "sticky-bottom bg-light text-center pt-3 pb-3";
        card1.classList = "card";
        card2.classList = "card";
        card3.classList = "card";
        card4.classList = "card";
        card5.classList = "card";
        navSwitch.setAttribute("data-bs-theme", "light");
        navBtn.classList = "btn btn-outline-dark";
        btnCard5.classList = "btn btn-outline-dark";
        biruLabel.innerHTML = "Off";
        lightDark.disabled = false;
        biru.disabled = false;
        hijau.disabled = false;
    }
}

function hijauTheme() {
    // navbar switch
    if (body.classList == "bg-dark-subtle") {
        // dark mode
        navSwitch.classList = "navbar navbar-expand-lg bg-success sticky-top";
        body.classList = "bg-success-subtle";
        footer.classList = "sticky-bottom bg-success text-light text-center pt-3 pb-3";
        card1.classList = "card text-bg-success bg-opacity-75";
        card2.classList = "card text-bg-success bg-opacity-75";
        card3.classList = "card text-bg-success bg-opacity-75";
        card4.classList = "card text-bg-success bg-opacity-75";
        card5.classList = "card text-bg-success bg-opacity-75";
        navSwitch.setAttribute("data-bs-theme", "dark");
        navBtn.classList = "btn btn-outline-light";
        btnCard5.classList = "btn btn-outline-light";
        hijauLabel.innerHTML = "On";
        lightDark.disabled = true;
        biru.disabled = true;
        merah.disabled = true;
    } else {
        navSwitch.classList = "navbar navbar-expand-lg bg-light sticky-top";
        body.classList = "bg-dark-subtle";
        footer.classList = "sticky-bottom bg-light text-center pt-3 pb-3";
        card1.classList = "card";
        card2.classList = "card";
        card3.classList = "card";
        card4.classList = "card";
        card5.classList = "card";
        navSwitch.setAttribute("data-bs-theme", "light");
        navBtn.classList = "btn btn-outline-dark";
        btnCard5.classList = "btn btn-outline-dark";
        hijauLabel.innerHTML = "Off";
        lightDark.disabled = false;
        biru.disabled = false;
        merah.disabled = false;
    }
}