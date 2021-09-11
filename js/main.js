//#region Declare
var button = document.querySelector(".button");
var quiz = document.querySelector(".quiz");
var count = 0;
var height = window.innerHeight;
var width = window.innerWidth;
var alphabet = ['A', 'B', 'C', 'D'];
var quiz = [
	{
		question: "Em bé yêu anh hong ?",
		answers: ["Dạ có", "Yêu ối dồi ôi nuôn", "Đừng nói gì nữa. Moahh", "Hong"],
	},
];
//#endregion

button.addEventListener("mousedown", () => {
	switch (count) {
		case 0:
			button.innerText = "Ơ kìa hụt rồi. Lại đi.";
			randomButton();
			break;
		case 1:
			button.innerText = "Sắp được rồi đấy cố lên nào";
			randomButton();
			break;
		case 2:
			button.innerText = "Ơ kìa còn một tý thôi kìa";
			randomButton();
			break;
		case 3:
			button.innerText = "Ui suýt trúng";
			randomButton();
			break;
		case 4:
			button.innerText = "Em mệt chưa :)";
			randomButton();
			break;
		case 5:
			button.innerText = "Rồi anh cho bé yêu bấm nhá";
			randomButton();
			break;
		case 6:
			button.innerText = "Thôi không trêu nữa này. Bấm nào ^^";
			randomButton();
			break;
		case 7:
            this.makeQuestion(0);
			document.querySelector(".quiz").style.display = "block";
			button.style.display = "none";
			break;
	}
	count++;
});



/**
 * Cho nút bấm một vị trí ngẫu nhiên trên màn hình
 * CreatedBy: NTDUNG (11/09/2021)
 */
function randomButton() {
	// Random position
	var randomHeight = Math.floor(Math.random() * (height - 100));
	var randomWidth = Math.floor(Math.random() * width);
	// Curr size
	var sizeHeight = button.offsetHeight;
	var sizeWidth = button.offsetWidth;
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

	button.style.transform = "translate(0, 0)";
	button.style.left = randomWidth + "px";
	button.style.top = randomHeight + "px";
}
/**
 * Tạo ra một câu hỏi từ danh sách
 * @param {Number} index 
 * CreatedBy: NTDUNG (11/09/2021)
 */
function makeQuestion(index) {
    this.createQuestionElement(quiz[index].question);
    quiz[index].answers.forEach((answer, index) => {
        this.createAnswerElement(`${this.alphabet[index]}. ${answer}`);
    });
}
/**
 * Tạo ra tiêu đề câu hỏi
 * @param {String} text 
 * CreatedBy: NTDUNG (11/09/2021)
 */
function createQuestionElement(text) {
    var node = document.createElement("DIV");     
    var textnode = document.createTextNode(text);  
    node.appendChild(textnode);
    node.classList.add('quiz__question');
    document.querySelector(".quiz").appendChild(node);
}
/**
 * Tạo ra các đáp án của câu hỏi
 * @param {String} text 
 * CreatedBy: NTDUNG (11/09/2021)
 */
function createAnswerElement(text) {
    var node = document.createElement("DIV");     
    var textnode = document.createTextNode(text);  
    node.appendChild(textnode);
    node.classList.add('quiz__answer');
    document.querySelector(".quiz").appendChild(node); 
}
