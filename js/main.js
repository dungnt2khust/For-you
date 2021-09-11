//#region Declare
var button = document.querySelector('.button');
var count = 0;
var height = window.innerHeight;
var width = window.innerWidth;
//#endregion

button.addEventListener('mousedown', () => { 
    switch(count) {
        case 0: 
            button.innerText = 'Ơ kìa hụt rồi. Lại đi.';
            randomButton();
            break;
        case 1: 
            button.innerText = 'Sắp được rồi đấy cố lên nào';
            randomButton();
            break;
        case 2:
            button.innerText = 'Ơ kìa còn một tý thôi kìa'; 
            randomButton();
            break; 
        case 3:
            button.innerText = 'Ui suýt trúng';
            randomButton();
            break;
        case 4: 
            button.innerText = 'Em mệt chưa :)';
            randomButton();
            break;
        case 5: 
            button.innerText = 'Rồi anh cho bé yêu bấm nhá';
            randomButton();
            break;
        case 6:
            button.innerText = 'Đây cho thật này. Uy tín nuônnn ^^';
            randomButton();
            break;
    }
    count++;
});


function randomButton() {
    // Random position
    var randomHeight = Math.floor(Math.random() * (height - 100));
    var randomWidth = Math.floor(Math.random() * (width));
    // Curr size
    var sizeHeight = button.offsetHeight;
    var sizeWidth = button.offsetWidth;
    console.log(width, sizeWidth, randomWidth);
    // Check out of window
    // Width 
    if (randomWidth + sizeWidth > width) {
        randomWidth = width - sizeWidth;
        console.log(randomWidth);
    }
    // Height 
    if (randomHeight + sizeHeight > height) {
        randomHeight = height - sizeHeight;
    }

    button.style.transform = 'translate(0, 0)';
    button.style.left = randomWidth + 'px';
    button.style.top = randomHeight + 'px';
}