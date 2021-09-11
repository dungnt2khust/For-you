//#region Declare
var button = document.querySelector('.button');
var count = 0;
var height = window.innerHeight;
var width = window.innerWidth;
//#endregion

button.addEventListener('mousedown', () => { 
    switch(count) {
        case 0: 
            randomButton();
            button.innerText = 'Ơ kìa hụt rồi. Lại đi.';
            break;
        case 1: 
            randomButton();
            button.innerText = 'Sắp được rồi đấy cố lên nào';
            break;
        case 2:
            randomButton();
            button.innerText = 'Ơ kìa còn một tý thôi kìa'; 
            break; 
        case 3:
            randomButton();
            button.innerText = 'Ui suýt trúng';
            break;
        case 4: 
            randomButton();
            button.innerText = 'Em mệt chưa :)';
            break;
        case 5: 
            randomButton();
            button.innerText = 'Rồi anh cho bé yêu bấm nhá';
            break;
        case 6:
            randomButton();
            button.innerText = 'Đây cho thật này. Uy tín nuônnn ^^';
            break;
    }
    count++;
});


function randomButton() {
    // Random position
    var randomHeight = Math.floor(Math.random() * (height));
    var randomWidth = Math.floor(Math.random() * (width));
    // Curr size
    var sizeHeight = button.offsetHeight;
    var sizeWidth = button.offsetWidth;
    // console.log(width, sizeWidth, randomWidth);
    // // Check out of window
    // // Width
    // if (randomWidth < sizeWidth) {
    //     randomWidth = sizeWidth;
    // }
    // else if (randomWidth + sizeWidth > width) {
    //     randomWidth = width - sizeWidth;
    //     console.log(randomWidth);
    // }
    // // Height
    // if (randomHeight < sizeHeight) {
    //     randomHeight = sizeHeight;
    // }
    // else if (randomHeight + sizeHeight > height) {
    //     randomHeight = height - sizeHeight;
    // }

    button.style.transform = 'translate(0, 0)';
    button.style.left = randomWidth + 'px';
    button.style.top = randomHeight + 'px';
}