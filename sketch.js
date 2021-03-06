
let isSelected = false; 
let sqs = 10; // number of squares per side of the grid 
let sqd = 30; // square side length
// prob should be rectangle, because most people have rectangular screens

let planningPhase = true; // PLAN or BUILD

let colorMatrix = [];
for(var i = 0; i < sqs; i++){
	colorMatrix.push([]);
	for(var j = 0; j < sqs; j++){
		colorMatrix[i].push(null);
	}
}

let userPos = [Math.floor(sqs/2), Math.floor(sqs/2)];

function updateBoard(userPos) {
	for(var i = 0; i < sqs; i++){
			for (var j = 0; j < sqs; j++){
				colorMatrix[i][j] = color(0,0,0);
		}
	}
	if(!isSelected){
		colorMatrix[userPos[0]][userPos[1]] = color(255,255,255);
	}
	else {
		colorMatrix[userPos[0]][userPos[1]] = color(0,255,0);
	}
}

function setup() {
	createCanvas(sqs*sqd,sqs*sqd);
	background(0,0,0);
	updateBoard(userPos);
	showBoard();
}

function showBoard() {
	for(var i = 0; i < sqs; i++) {
		for(var j = 0; j < sqs; j++) {
			fill(colorMatrix[i][j]);
			rect(sqd*i,sqd*j,sqd,sqd);
		}
	}
}


function mouseReleased() {
	if(planningPhase) {
		if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			let xIdx = floor(mouseX / sqd);
			let yIdx = floor(mouseY / sqd);
			if(abs(xIdx-userPos[0]) <= 1 && abs(yIdx - userPos[1]) <= 1){
				isSelected = true;
				userPos = [xIdx, yIdx];
				updateBoard(userPos);
				showBoard();
			}	
		}
	}
}



function draw() {
	if(planningPhase) {
	}
	else {
		showBoard();
	}
}

