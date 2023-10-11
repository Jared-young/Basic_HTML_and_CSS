// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.querySelector("iframe");

    iframe.addEventListener("mouseover", function () {
        iframe.style.transform = "scale(2)";
    });

    iframe.addEventListener("mouseout", function () {
        iframe.style.transform = "scale(1)";
    });
});