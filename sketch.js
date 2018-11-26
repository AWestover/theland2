
let stupidColors = [];
let sqs = 10; // number of squares
let sqd = 30; // square side length
// prob should be rectangle, because most people have rectangular screens

function crumbColors() {
	for(var i = 0; i < sqs; i++){
		stupidColors.push([]);
		for (var j = 0; j < sqs; j++){
			stupidColors[i].push(color(random()*255,random()*255,random()*255));
		}
	}
}

function setup() {
	createCanvas(sqs*sqd,sqs*sqd);
	crumbColors();
}


function draw() {
	background(0,0,0);

	for(var i = 0; i < sqs; i++) {
		for(var j = 0; j < sqs; j++) {
			fill(stupidColors[i][j]);
			rect(sqd*i,sqd*j,sqd,sqd);
		}
	}
}

