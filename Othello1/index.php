<?php
	include('header.php');
?>
<body>
	<div id="banner"><p>Othello</p></div>
	
	<div id="content">
		<nav>
			<ul>
				<a>Home</a>
				<a>About</a>
			</ul>
		</nav>
		
		<div id="init">
			Name - Player One: <input type='text' id='player1'>
			<br><br>
			Name - Player Two: <input type='text' id="player2">
			<br><br>
			
			<p>Let's Play:</p>
			<button id="pButton">PLAY!</button>
		</div>
		
		<div id=main>
			<canvas id="cGame" width=800px height=800px></canvas>
			<br>
			<button id="bReset">Reset</button>
			
			<div id="score">
				<table>
					<tr>
						<td><strong>Player 1: - </strong><span id="p1Name"></span></td>
						<td><span id="p1Score"></span></td>
						<td><span id="p1Turn">Thiking...</span></td>
					</tr>
					<tr>
						<td><strong>Player 2: - </strong><span id="p2Name"></span></td>
						<td><span id="p2Score"></span></td>
						<td><span id="p2Turn"></span></td>
					</tr>
				</table>
			</div>
			
			<div id='rWinner'>
				<p>Winner:</p>
				<span id="wName"></span> <br>
				<span id="wScore"></span> <br>
				<form action=record.php method=post>
					<button id="bReplay">REPLAY !!!!!!!</button>
				</form>
			</div>
		</div>
		<br>

	</div>
	
	<div id=footer>Ken Tiet</div>
</body>
</html>