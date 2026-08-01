document.getElementById("e").onclick = function () {

    document.getElementById("ironman-container").style.animation =
        "exitIronman 1s forwards";
    document.getElementById("intro").style.animation =
        "fadeOut 0.5s forwards";
    document.getElementById("e").style.animation =
        "fadeOut 0.5s forwards";
    setTimeout(function () {
        window.location.href = "../Pages/hall_1.html";
    }, 1000);

};