document.getElementById('otra').addEventListener('click', function() {
    $("[target]").hide();
})

document.getElementById('esta').addEventListener('click', function () {
    $("a:not([target])").hide();
});