var isWhite = false;
var isBlack = true;

var validMove = true;

var hasForwardFlip = true;
var hasBackwardFlip = true;
var hasDownFlip = true;
var hasUpFlip = true;
var hasDownRightFlip = true;
var hasDownLeftFlip = true;
var hasUpRightFlip = true;
var hasUpLeftFlip = true;

var setNum;
var player1;
var player2;
var blackScore;
var whiteScore;

window.onload = function() {
	/*
	BLACK --> -1
	WHITE --> 1
	*/
	var broadGrid = [[0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, -1, 1, 0, 0, 0],
					 [0, 0, 0, 1, -1, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0]];
	
	var chessBroad = document.getElementById("cGame");
	var contextBroad = chessBroad.getContext("2d");
	
	const BOX_W = chessBroad.width / 8;
	const BOX_H = chessBroad.height / 8;
	const GAP = 1;
	const drawCirAdjust = 54;
	const ROW = 8;
	const COL = 8;
	
	function play() {
		player1 = document.getElementById('player1').value;
		player2 = document.getElementById('player2').value;
		
		if (player1 != "" && player2 != "") {
			var p1Name, p1Score;
			var p2Name, p2Score;
			
			p1Name = player1;
			p1Score = getScoreBlack();
			p2Name = player2;
			p2Score = getScoreWhite();
			
			document.getElementById('p1Name').innerHTML = p1Name;
			document.getElementById('p1Score').innerHTML = p1Score;
			document.getElementById('p2Name').innerHTML = p2Name;
			document.getElementById('p2Score').innerHTML = p2Score;

			//var info = player1 + " (Player One): " + getScoreBlack();
			//info += "<br>" + player2 + " (Player Two): " + getScoreWhite();
			//
			//document.getElementById('score').innerHTML = info;
			
			$('#main').show();
		} else {
			alert("Please Enter Players Name");
		}
	}

	function updateInfo() {
		var p1Score;
		var p2Score;
		var playing = "Thinking...";
		p1Score = getScoreBlack();
		p2Score = getScoreWhite();
		
		document.getElementById('p1Score').innerHTML = p1Score;
		document.getElementById('p2Score').innerHTML = p2Score;

		if(isBlack) {
			document.getElementById('p1Turn').innerHTML = playing;
			document.getElementById('p2Turn').innerHTML = "";
		} else {
			if (isWhite) {
				document.getElementById('p1Turn').innerHTML = "";
				document.getElementById('p2Turn').innerHTML = playing;
			}
		}
	}

	function getScoreBlack() {
		var counter = 0;
		for (var r = 0; r < broadGrid.length; r++) {
			for (var c = 0; c < broadGrid.length; c++) {
				if(broadGrid[r][c] == (-1)) {
					counter++;
				} 
			}
		}
		blackScore = counter;
		return blackScore;
	}

	function getScoreWhite(){
		var counter = 0;
		for (var r = 0; r < broadGrid.length; r++) {
			for (var c = 0; c < broadGrid.length; c++) {
				if(broadGrid[r][c] == (1)) {
					counter++;
				} 
			}
		}
		whiteScore = counter;
		return whiteScore;
	}
	
	function winner() {
		for (var r = 0; r < broadGrid.length; r++) {
			for (var c = 0; c < broadGrid.length; c++) {
				if(broadGrid[r][c] != 0) {
					if(getScoreBlack() > getScoreWhite()) {
						document.getElementById('wName').innerHTML = player1 + "(PLAYER 1) - " + getScoreBlack();
						document.getElementById('wScore').innerHTML = getScoreBlack();
					} else {
						document.getElementById('wName').innerHTML = player2 + "(PLAYER 2) - " + getScoreWhite();
						document.getElementById('wScore').innerHTML = getScoreWhite();
					}
				} 
			}
		}
		//$('#bReplay').show();
	}

	$('#main').hide();
	//$('#bReplay').hide();
	$('#pButton').on("click", play);
	$('#bReset').on("click", reset);
	
	
	function reset() {
		broadGrid = [[0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, -1, 1, 0, 0, 0],
					 [0, 0, 0, 1, -1, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0, 0]];
		
		isWhite = false;
		isBlack = true;
		
		hasForwardFlip = true;
		hasBackwardFlip = true;
		hasDownFlip = true;
		hasUpFlip = true;
		hasDownRightFlip = true;
		hasDownLeftFlip = true;
		hasUpRightFlip = true;
		hasUpLeftFlip = true;
		
		drawBoard();
		drawPieces();
		updateInfo();
	}
	
	function getIndex(x, y) {
		var indexY;
		var indexX;
	
		if (y <= 100){
			indexY = 0;
		} else if (y > 100 && y <= 200) {
			indexY = 1;
		} else if (y > 200 && y <= 300) {
			indexY = 2;
		} else if (y > 300 && y <= 400) {
			indexY = 3;
		} else if (y > 400 && y <= 500) {
			indexY = 4;
		} else if (y > 500 && y <= 600) {
			indexY = 5;
		} else if (y > 600 && y <= 700) {
			indexY = 6;
		} else if (y > 700 && y <= 800) {
			indexY = 7;
		}
	
		if (x <= 100){
			indexX = 0;
		} else if (x > 100 && x <= 200) {
			indexX = 1;
		} else if (x > 200 && x <= 300) {
			indexX = 2;
		} else if (x > 300 && x <= 400) {
			indexX = 3;
		} else if (x > 400 && x <= 500) {
			indexX = 4;
		} else if (x > 500 && x <= 600) {
			indexX = 5;
		} else if (x > 600 && x <= 700) {
			indexX = 6;
		} else if (x > 700 && x <= 800) {
			indexX = 7;
		}
	
		//alert(indexY + " " + indexX);
		return { indexX : indexX, 
				 indexY : indexY };
	}

	function checkLegalMove(iX, iY) {
		col = iY;
		// Check forward
		for(var r = iX; r < broadGrid.length; r++) {
			if (broadGrid[r + 1][iY] == broadGrid[iX][iY]) {
				alert('invalid move');
				validMove = false;
				break;
			} else {
				break;
			}
		}
	
		//Check backward
		for(var r = iX; r > 0; r--) {
			if (broadGrid[iX][iY] == broadGrid[r - 1][iY]) {
				alert('invalid move');
				validMove = false;
				break;
			} else {
				break;
			}
		}
	
		//Check down
		for(var c = iY; c < broadGrid.length; c++) {
			if(broadGrid[iX][c + 1] == broadGrid[iX][iY]) {
				alert('invalid move');
				validMove = false;
				break;
			} else {
				break;
			}
		}
	
		//Check up
		for(var c = iY; c > 0; c--) {
			if(broadGrid[iX][iY] == broadGrid[iX][c - 1]) {
				alert('invalid move');
				validMove = false;
				break;
			} else {
				break;
			}
		}
	
	}

	function checkForward(iX, iY) {
		for(var r = iX; r < broadGrid.length; r++) {
			if(broadGrid[r + 1][iY] != 0) {
				if (broadGrid[r + 1][iY] == broadGrid[iX][iY]) {
					hasForwardFlip = false;
					break;
				}
			} else {
				break;
			}
		}
		return hasForwardFlip;
	}
	
	function checkBackward(iX, iY) {
		for(var r = iX; r > 0; r--) {
			if (broadGrid[r - 1][iY] != 0) {
				if (broadGrid[iX][iY] == broadGrid[r - 1][iY]) { 
					hasBackwardFlip = false;
					break;
				}
			} else {
				break;
			}
		}
		return hasBackwardFlip;
	}

	function checkDown(iX, iY) {
		for(var c = iY; c < broadGrid.length; c++) {
			if(broadGrid[iX][c + 1] != 0) {
				if (broadGrid[iX][c + 1] != broadGrid[iX][iY]) {
					hasDownFlip = false;
					break;
				}
			} else {
				break;
			}
		}
		return hasDownFlip;
	}
	
	function checkUp(iX, iY) {
		for(var c = iY; c > 0; c--) {
			if (broadGrid[iX][c - 1] != 0) {
				if (broadGrid[iX][iY] != broadGrid[iX][c - 1]) {
					hasUpFlip = false;
					break;
				}
			} else {
				break;
			}
			return hasUpFlip;
		}
	}

	function checkDownRight(iX, iY) {
		//Check Down - Right
		for (var r = iX, c = iY; r < broadGrid.length - 1; r++, c++) {
			if (broadGrid[r + 1][c + 1] != 0) {
				if(broadGrid[iX][iY] != broadGrid[r + 1][c + 1]) {
					hasDownRightFlip = false;
					break;
				} else {
					break;
				}
			} else {
				break;
			}
		}
		return hasDownRightFlip;
	
	}
	
	function checkDownLeft(iX, iY) {
		for (var r = iX, c = iY; c < broadGrid.length, r > 0; c++, r--) {
			if (broadGrid[r + 1][c - 1] != 0) {
				if(broadGrid[iX][iY] != broadGrid[r - 1][c + 1]) {
					hasDownLeftFlip = false;
					break;
				} else {
					break;
				}
			} else {
				break;ß
			}
		}
		return hasDownLeftFlip;
	}

	function checkUpRight(iX, iY) {
		for (var r = iX, c = iY; c > 0,r < broadGrid.length; c--, r++) {
			if (broadGrid[r - 1][c + 1] != 0) {
				if(broadGrid[iX][iY] == broadGrid[r + 1][c - 1]) {
					hasUpRightFlip = false;
					break;
				} else {
					break;
				}
			} else {
				break;
			}
		}
		return hasUpRightFlip;
	}
	
	function checkUpLeft(iX, iY) {
		for (var r = iX, c = iY; c > 0,r > 0; r--, c--) {
			if (broadGrid[r - 1][c - 1] != 0) {
				if(broadGrid[iX][iY] == broadGrid[r - 1][c - 1]) {
					hasUpLeftFlip = false;
					break;
				} else {
					break;
				}
			} else {
				break;
			}
		}
		return hasUpLeftFlip;
	}	

	function flipFoward(iX, iY) {
		// Flip forward
		for(var r = iX; r < broadGrid.length; r++) {
			if (broadGrid[r + 1][iY] != broadGrid[iX][iY] && broadGrid[r + 1][iY] != 0) {
				broadGrid[r + 1][iY] *= -1;
				drawPieces();
			} else {
				break;
			}
		}
	}
	
	function flipBackWard(iX, iY) {
		// Flip backward
		for(var r = iX; r > 0; r--) {
			if (broadGrid[iX][iY] != broadGrid[r - 1][iY] && broadGrid[r - 1][iY] != 0) { 
				broadGrid[r - 1][iY] *= -1;
				drawPieces();
			} else {
				break;
			}
		}
	}

	function flipDown(iX, iY) {
		// Flip top - down
		for(var c = iY; c < broadGrid.length; c++) {
			if (broadGrid[iX][c + 1] != broadGrid[iX][iY] && broadGrid[iX][c + 1] != 0) {
				broadGrid[iX][c + 1] *= -1;
				drawPieces();
			} else {
				break;
			}
		}
	}

	function flipUp(iX, iY) {
		// Flip bottom - up
		for(var c = iY; c > 0; c--) {
			if (broadGrid[iX][iY] != broadGrid[iX][c - 1] && broadGrid[iX][c - 1] != 0) {
				broadGrid[iX][c - 1] *= -1;
				drawPieces();
			} else {
				break;
			}
		}
	}

	function flipDownRight(iX, iY) {
		//Check Down - Right
		for (var r = iX, c = iY; r< broadGrid.length - 1; r++, c++) {
			if (broadGrid[r + 1][c + 1] != 0) {
				if(broadGrid[iX][iY] != broadGrid[r + 1][c + 1]) {
					broadGrid[r + 1][c + 1] *= -1;
					drawPieces();
				} else {
					break;
				}
			}
		}
	}

	function flipkDownLeft(iX, iY) {
		for (var r = iX, c = iY; r > 0,c < broadGrid.length; r--, c++) {
			if (broadGrid[r - 1][c + 1] != 0) {
				if(broadGrid[iX][iY] != broadGrid[r - 1][c + 1]) {
					broadGrid[r - 1][c + 1] *= -1;
					drawPieces();
				} else {
					break;
				}
			} else {
				break;
			}
		}
	}

	function flipkUpRight(iX, iY) {
		for (var r = iX, c = iY; c > 0,r < broadGrid.length - 1; r++, c--) {
			if (broadGrid[r + 1][c - 1] != 0) {
				if(broadGrid[iX][iY] == broadGrid[r + 1][c - 1]) {
					broadGrid[r + 1][c - 1] *= -1;
					drawPieces();
				} else {
					break;
				}
			}
		}
	}

	function flipUpLeft(iX, iY) {
		for (var r = iX, c = iY; c > 0,r > 0; r--, c--) {
			if (broadGrid[r - 1][c - 1] != 0) {
				if(broadGrid[iX][iY] == broadGrid[r - 1][c - 1]) {
					broadGrid[r - 1][c - 1] *= -1;
					drawPieces();
				} else {
					break;
				}
			}
		}
	}
	
	function drawRect(tX, tY, width, height, color) {
		contextBroad.fillStyle = color;
		contextBroad.fillRect(tX, tY, width, height);
	}
	
	function drawCir(x, y, dx, dy, color) {
		contextBroad.fillStyle = color;
		contextBroad.beginPath();
		contextBroad.arc(x, y, dx, dy, Math.PI*2, true);
		contextBroad.fill();
	}

	function drawBoard() {
		for (var r = 0; r < broadGrid.length; r++) {
			for (var c = 0; c < broadGrid.length; c++) {
				if(broadGrid[r][c] === 0 ||broadGrid[r][c] == 1 || broadGrid[r][c] == (-1)) {
					drawRect(r*(BOX_W + GAP), c*(BOX_H + GAP), BOX_H, BOX_W, "green");
				} 
			}
		}
	}

	function drawPieces() {
		for (var r = 0; r < ROW; r++) {
			for (var c = 0; c < COL; c++) {
				if (broadGrid[c][r] == -1) {
					drawCir(c*BOX_W + drawCirAdjust, r*BOX_H + drawCirAdjust, 42, 0, "black");
				} else if (broadGrid[c][r] == 1) {
					drawCir(c*BOX_W + drawCirAdjust, r*BOX_H + drawCirAdjust, 42, 0, "white");
		
				}
			}
		}
	}

	drawBoard();
	drawPieces();
	
	function calMouseClick(evt) {
		var selectedIndex;
		var selectX;
		var selectY;
		canvasX = evt.pageX - this.offsetLeft;
		canvasY = evt.pageY - this.offsetTop;
		alert(canvasX + ' ' +  canvasY);
	
		selectedIndex = getIndex(canvasX, canvasY);
		selectX = selectedIndex.indexX;
		selectY = selectedIndex.indexY;
		
	
		if (isWhite) {
			color = "white";
			isBlack = true;
			isWhite = false;
			setNum = 1;
		} else {
			if (isBlack) {
				color = "black";
				isWhite = true;
				isBlack = false;
				setNum = -1;
			}
		}
	
		broadGrid[selectX][selectY] = setNum;
		//alert(broadGrid[selectX][selectY] = setNum);
		//alert(broadGrid.length);
		//alert(selectX + " " + selectY);
	
		checkLegalMove(selectX, selectY);
		//alert(checkFlip(selectX, selectY));
	
	
	
		if (validMove) {
			checkForward(selectX, selectY);
			checkBackward(selectX, selectY);
			checkDown(selectX, selectY);
			checkUp(selectX, selectY);
			checkDownRight(selectX, selectY);
			checkDownLeft(selectX, selectY);
			checkUpRight(selectX, selectY);
			checkUpLeft(selectX, selectY);
			
			//alert("check forward: " + checkForward(selectX, selectY));
			//alert("check backward: " + checkBackward(selectX, selectY));
			//
			//alert("check down: " + checkDown(selectX, selectY));
			//alert("check up: " + checkUp(selectX, selectY));
			//
			//alert("check down right: " + checkDownRight(selectX, selectY));
			//alert("check down left: " + checkDownLeft(selectX, selectY));
			//alert("check up right: " + checkUpRight(selectX, selectY));
			//alert("check up left: " + checkUpLeft(selectX, selectY));
	
			if (!hasForwardFlip) {
				drawPieces();
				flipFoward(selectX, selectY);
			} else if (!hasBackwardFlip) {
				drawPieces();
				flipBackWard(selectX, selectY);
			} else if (!hasDownFlip) {
				drawPieces();
				flipDown(selectX, selectY);
			} else if (!hasUpFlip) {
				drawPieces();
				flipUp(selectX, selectY);
			} else if (!hasDownRightFlip) {
				drawPieces();
				flipDownRight(selectX, selectY);
			} else if (!hasDownLeftFlip) {
				drawPieces();
				flipkDownLeft(selectX, selectY);
			} else if (!hasUpRightFlip) {
				drawPieces();
				flipkUpRight(selectX, selectY);
			} else if (!hasUpLeftFlip) {
				drawPieces();
				flipUpLeft(selectX, selectY);
			}
			
		}
	
		hasForwardFlip = true;
		hasBackwardFlip = true;
		hasDownFlip = true;
		hasUpFlip = true;
		
		getScoreBlack();
		getScoreWhite();
		updateInfo();
		winner();
	}

	chessBroad.addEventListener("mousedown", calMouseClick, false);
}

