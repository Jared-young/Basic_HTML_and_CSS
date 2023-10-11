document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.querySelector("iframe");

    iframe.addEventListener("mouseover", function () {
        iframe.style.transform = "scale(1.1)";
    });

    iframe.addEventListener("mouseout", function () {
        iframe.style.transform = "scale(1)";
    });
});
