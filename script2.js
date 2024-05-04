// JavaScript code to add or remove classes
function increaseContainerSize() {
    document.querySelector('.container').classList.add('large');
}

function decreaseContainerSize() {
    document.querySelector('.container').classList.add('small');
}

function resetContainerSize() {
    document.querySelector('.container').classList.remove('large');
    document.querySelector('.container').classList.remove('small');
}

// JavaScript code to scale down container and song items
function decreaseSize() {
    document.querySelector('.container').classList.add('small');
    var songItems = document.querySelectorAll('.songItem');
    songItems.forEach(function(item) {
        item.classList.add('small');
    });
}

function resetSize() {
    document.querySelector('.container').classList.remove('small');
    var songItems = document.querySelectorAll('.songItem');
    songItems.forEach(function(item) {
        item.classList.remove('small');
    });
}
