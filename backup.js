;(function(){
'use strict';

var typedValue = ''; 
var idx = 0;
var counter = 0;
var audioArray = [];
var recordArray = [];
var myMusic = [];	
var record = false;
var play = false;
var interval;
var interval1;
var keyValueArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','1','2','3','4','5','6','7','8','9'];
var A = 65;
var B = 66;
var C = 67;
var D = 68;
var E = 69;
var F = 70;
var G = 71;
var H = 72;
var I = 73;
var J = 74;
var K = 75;
var L = 76;
var M = 77;
var N = 78;
var O = 79;
var P = 80;
var Q = 81;
var R = 82;
var S = 83;
var T = 84;
var U = 85;
var V = 86;
var W = 87;
var X = 88;
var Y = 89;
var Z = 90;
var one = 49;
var two = 50;
var three = 51;
var four = 52;
var five = 53;
var six = 54;
var seven = 55;
var eight = 56;
var nine = 57; 
	
function Piano()
{
		var that = this;
				
		this.pianoDiv = document.getElementById('pianoDiv');
		
		this.createKeys = function()
		{
				var that = this;
				for(var i = 0; i<35; i++)
				{
					this.key = document.createElement('div');
					if(i%2 == 0){
						this.key.setAttribute('class', 'white' );
					}
					else{
						this.key.setAttribute('class', 'black');
					}
					this.key.setAttribute('id', i);
					that.pianoDiv.appendChild(this.key);
					document.getElementById(i).innerHTML = keyValueArray[i];
				};
		}; 
		
		this.changeStyle = function(id)
		{		
				var that = this;
				if(id%2 == 0)
				{
					document.getElementById(id).style.boxShadow = "5px 5px 10px 20px #ff7f27";
					document.getElementById(id).style.background = "#f40d2e";
					document.getElementById(id).style.color = "#22b14c";
				}
				else
				{
					document.getElementById(id).style.boxShadow = "5px 5px 10px 25px #0df4bb";
					document.getElementById(id).style.background = "#ff7f27";
					document.getElementById(id).style.color = "#0df4bb";
				}
		}
		
		this.changeToOriginal = function(id)
		{
				var that = this;
				if(id%2 == 0)
				{
					document.getElementById(id).style.boxShadow = "5px 5px 10px 15px black";
					document.getElementById(id).style.background = "white";
					document.getElementById(id).style.color = "black";
				}
				else
				{
					document.getElementById(id).style.boxShadow = "5px 5px 10px 15px black";
					document.getElementById(id).style.background = "#8e8e88";
					document.getElementById(id).style.color = "white";
				}
		}
};

function AudioFile(){
		this.getAudioFile = function()
		{
				for (var i=0; i<12; i++)
				{
					this.audio = document.getElementById('audio'+(i+1));
					audioArray.push(this.audio);
				}
		};
};

function PlayFile(){
		this.playSelectedAudio = function(event){
				
				if(event.which == Q)
				{	
					typedValue = typedValue + 'Q';
					audioArray[0].play();
					piano.changeStyle(0);
					if (record) {recordArray.push(audioArray[0]);}
				}
				else if(event.which == W)
				{	
					typedValue = typedValue + 'W';
					audioArray[1].play();
					piano.changeStyle(1);
					if (record) {recordArray.push(audioArray[1]);}
				}
				else if(event.which == E)
				{
					typedValue = typedValue + 'E';
					audioArray[2].play();
					piano.changeStyle(2);
					if (record) {recordArray.push(audioArray[2]);}
				}
				else if(event.which == R)
				{
					typedValue = typedValue + 'R';
					audioArray[3].play();
					piano.changeStyle(3);
					if (record) {recordArray.push(audioArray[3]);}
				}
				else if(event.which == T)
				{
					typedValue = typedValue + 'T';
					audioArray[4].play();
					piano.changeStyle(4);
					if (record) {recordArray.push(audioArray[4]);}
				}
				else if(event.which == Y)
				{
					typedValue = typedValue + 'Y';
					audioArray[5].play();
					piano.changeStyle(5);
					if (record) {recordArray.push(audioArray[5]);}
				}
				else if(event.which == U)
				{
					typedValue = typedValue + 'U';
					audioArray[6].play();
					piano.changeStyle(6);
					if (record) {recordArray.push(audioArray[6]);}
				}
				else if(event.which == I)
				{
					typedValue = typedValue + 'I';
					audioArray[7].play();
					piano.changeStyle(7);
					if (record) {recordArray.push(audioArray[7]);}
				}
				else if(event.which == O)
				{	
					typedValue = typedValue + 'O';
					audioArray[8].play();
					piano.changeStyle(8);
					if (record) {recordArray.push(audioArray[8]);}
				}
				else if(event.which == P)
				{
					typedValue = typedValue + 'P';
					audioArray[9].play();
					piano.changeStyle(9);
					if (record) {recordArray.push(audioArray[9]);}
				}
				else if(event.which == A)
				{
					typedValue = typedValue + 'A';
					audioArray[10].play();
					piano.changeStyle(10);
					if (record) {recordArray.push(audioArray[10]);}
				}
				else if(event.which == S)
				{
					typedValue = typedValue + 'S';
					audioArray[11].play();
					piano.changeStyle(11);
					if (record) {recordArray.push(audioArray[11]);}
				}
				else if(event.which == D)
				{	
					typedValue = typedValue + 'D';
					audioArray[0].play();
					piano.changeStyle(12);
					if (record) {recordArray.push(audioArray[0]);}
				}
				else if(event.which == F)
				{	
					typedValue = typedValue + 'F';
					audioArray[1].play();
					piano.changeStyle(13);
					if (record) {recordArray.push(audioArray[1]);}
				}
				else if(event.which == G)
				{
					typedValue = typedValue + 'G';
					audioArray[2].play();
					piano.changeStyle(14);
					if (record) {recordArray.push(audioArray[2]);}
				}
				else if(event.which == H)
				{
					typedValue = typedValue + 'H';
					audioArray[3].play();
					piano.changeStyle(15);
					if (record) {recordArray.push(audioArray[3]);}
				}
				else if(event.which == J)
				{
					typedValue = typedValue + 'J';
					audioArray[4].play();
					piano.changeStyle(16);
					if (record) {recordArray.push(audioArray[4]);}
				}
				else if(event.which == K)
				{
					typedValue = typedValue + 'K';
					audioArray[5].play();
					piano.changeStyle(17);
					if (record) {recordArray.push(audioArray[5]);}
				}
				else if(event.which == L)
				{
					typedValue = typedValue + 'L';
					audioArray[6].play();
					piano.changeStyle(18);
					if (record) {recordArray.push(audioArray[6]);}
				}
				else if(event.which == Z)
				{
					typedValue = typedValue + 'Z';
					audioArray[7].play();
					piano.changeStyle(19);
					if (record) {recordArray.push(audioArray[7]);}
				}
				else if(event.which == X)
				{
					typedValue = typedValue + 'X';
					audioArray[8].play();
					piano.changeStyle(20);
					if (record) {recordArray.push(audioArray[8]);}
				}
				else if(event.which == C)
				{
					typedValue = typedValue + 'C';
					audioArray[9].play();
					piano.changeStyle(21);
					if (record) {recordArray.push(audioArray[9]);}
				}
				else if(event.which == V)
				{
					typedValue = typedValue + 'V';
					audioArray[10].play();
					piano.changeStyle(22);
					if (record) {recordArray.push(audioArray[10]);}
				}
				else if(event.which == B)
				{
					typedValue = typedValue + 'B';
					audioArray[11].play();
					piano.changeStyle(23);
					if (record) {recordArray.push(audioArray[11]);}
				}
				else if(event.which == N)
				{
					typedValue = typedValue + 'N';
					audioArray[0].play();
					piano.changeStyle(24);
					if (record) {recordArray.push(audioArray[0]);}
				}
				else if(event.which == M)
				{
					typedValue = typedValue + 'M';
					audioArray[1].play();
					piano.changeStyle(25);
					if (record) {recordArray.push(audioArray[1]);}
				}
				else if(event.which == one)
				{
					typedValue = typedValue + '1';
					audioArray[2].play();
					piano.changeStyle(26);
					if (record) {recordArray.push(audioArray[2]);}
				}
				else if(event.which == two)
				{
					typedValue = typedValue + '2';
					audioArray[3].play();
					piano.changeStyle(27);
					if (record) {recordArray.push(audioArray[3]);}
				}
				else if(event.which == three)
				{
					typedValue = typedValue + '3';
					audioArray[4].play();
					piano.changeStyle(28);
					if (record) {recordArray.push(audioArray[4]);}
				}
				else if(event.which == four)
				{
					typedValue = typedValue + '4';
					audioArray[5].play();
					piano.changeStyle(29);
					if (record) {recordArray.push(audioArray[5]);}
				}
				else if(event.which == five)
				{
					typedValue = typedValue + '5';
					audioArray[6].play();
					piano.changeStyle(30);
					if (record) {recordArray.push(audioArray[6]);}
				}
				else if(event.which == six)
				{
					typedValue = typedValue + '6';
					audioArray[7].play();
					piano.changeStyle(31);
					if (record) {recordArray.push(audioArray[7]);}
				}
				else if(event.which == seven)
				{
					typedValue = typedValue + '7';
					audioArray[8].play();
					piano.changeStyle(32);
					if (record) {recordArray.push(audioArray[8]);}
				}
				else if(event.which == eight)
				{
					typedValue = typedValue + '8';
					audioArray[9].play();
					piano.changeStyle(33);
					if (record) {recordArray.push(audioArray[9]);}
				}
				else if(event.which == nine)
				{
					typedValue = typedValue + '9';
					audioArray[10].play();
					piano.changeStyle(34);
					if (record) {recordArray.push(audioArray[10]);}
				}
				getTypedValue();
		};
};

function RestoreKeys(){
		this.restoreTheKeys = function(event){
				if(event.which == Q){
					piano.changeToOriginal(0);
				}
				else if(event.which == W){
					piano.changeToOriginal(1);
				}
				else if(event.which == E){
					piano.changeToOriginal(2);
				}
				else if(event.which == R){
					 piano.changeToOriginal(3);
				}
				else if(event.which == T){
					piano.changeToOriginal(4);
				}
				else if(event.which == Y){
					piano.changeToOriginal(5);
				}
				else if(event.which == U){
					piano.changeToOriginal(6);
				}
				else if(event.which == I){
					 piano.changeToOriginal(7);
				}
				if(event.which == O){
					piano.changeToOriginal(8);
				}
				else if(event.which == P){
					piano.changeToOriginal(9);
				}
				else if(event.which == A){
					piano.changeToOriginal(10);
				}
				else if(event.which == S){
					 piano.changeToOriginal(11);
				}
				if(event.which == D){
					piano.changeToOriginal(12);
				}
				else if(event.which == F){
					piano.changeToOriginal(13);
				}
				else if(event.which == G){
					piano.changeToOriginal(14);
				}
				else if(event.which == H){
					 piano.changeToOriginal(15);
				}
				if(event.which == J){
					piano.changeToOriginal(16);
				}
				else if(event.which == K){
					piano.changeToOriginal(17);
				}
				else if(event.which == L){
					piano.changeToOriginal(18);
				}
				else if(event.which == Z){
					piano.changeToOriginal(19);
				}
				if(event.which == X){
					piano.changeToOriginal(20);
				}
				else if(event.which == C){
					piano.changeToOriginal(21);
				}
				else if(event.which == V){
					piano.changeToOriginal(22);
				}
				else if(event.which == B){
					 piano.changeToOriginal(23);
				}
				if(event.which == N){
					piano.changeToOriginal(24);
				}
				else if(event.which == M){
					piano.changeToOriginal(25);
				}
				else if(event.which == one){
					piano.changeToOriginal(26);
				}
				else if(event.which == two){
					 piano.changeToOriginal(27);
				}
				else if(event.which == three){
					 piano.changeToOriginal(28);
				}
				else if(event.which == four){
					 piano.changeToOriginal(29);
				}
				else if(event.which == five){
					 piano.changeToOriginal(30);
				}
				else if(event.which == six){
					 piano.changeToOriginal(31);
				}
				else if(event.which == seven){
					 piano.changeToOriginal(32);
				}
				else if(event.which == eight){
					 piano.changeToOriginal(33);
				}
				else if(event.which == nine){
					 piano.changeToOriginal(34);
				}
		};
};	

function RecordPlay(){
		var div1 = document.getElementById('recordPlayDiv');
		
		this.btnRecord = document.createElement('input');
		this.btnRecord.setAttribute('type', 'button');
		this.btnRecord.setAttribute('value', 'RECORD');
		this.btnRecord.setAttribute('id', 'recordButton');
		
		div1.appendChild(this.btnRecord);
		
		this.btnStopRecording = document.createElement('input');
		this.btnStopRecording.setAttribute('type', 'button');
		this.btnStopRecording.setAttribute('value', 'STOP RECORDING');
		this.btnStopRecording.setAttribute('id', 'stopRecording');
		
		div1.appendChild(this.btnStopRecording);
		
		this.btnPlay = document.createElement('input');
		this.btnPlay.setAttribute('type', 'button');
		this.btnPlay.setAttribute('value', 'PLAY');
		this.btnPlay.setAttribute('id', 'playButton');
		
		div1.appendChild(this.btnPlay);
		
		this.btnStopPlaying = document.createElement('input');
		this.btnStopPlaying.setAttribute('type', 'button');
		this.btnStopPlaying.setAttribute('value', 'STOP PLAYING');
		this.btnStopPlaying.setAttribute('id', 'stopPlaying');
		
		div1.appendChild(this.btnStopPlaying);
		
		this.btnSave = document.createElement('input');
		this.btnSave.setAttribute('type', 'button');
		this.btnSave.setAttribute('value', 'SAVE IN PLAYLIST');
		this.btnSave.setAttribute('id', 'saveInPlaylist');

		div1.appendChild(this.btnSave);
};

function Actions(){
		recordPlay1.btnRecord.onclick = function(){
				if(record){
					recordPlay1.btnRecord.value = 'RECORD';
					recordPlay1.btnRecord.style.background = 'orange';
					recordPlay1.btnRecord.style.border = '3px solid blue';
					recordPlay1.btnRecord.style.color = 'white';
					
					record = false;
				}
				else {
					// recordPlay1.btnSave.value = "SAVE IN PLAYLIST";
					// recordPlay1.btnSave.color = "black";
					// recordPlay1.btnSave.background = "grey";
					// recordPlay1.btnSave.border = "2px solid blue";
					recordPlay1.btnRecord.value = 'PAUSE';
					recordPlay1.btnRecord.style.background = 'red';
					recordPlay1.btnRecord.style.border = '3px solid black';
					recordPlay1.btnRecord.style.color = 'white';
					recordPlay1.btnStopRecording.style.border = '3px solid black';
					recordPlay1.btnStopRecording.style.background = 'blue';
					recordPlay1.btnStopRecording.style.color = 'white';
					record = true;
				};
				console.log(recordArray);
		};
		
		recordPlay1.btnStopRecording.onclick = function(){
					recordPlay1.btnRecord.value = 'RECORD';
					recordPlay1.btnRecord.style.background = 'silver';
					recordPlay1.btnRecord.style.color = 'black';
					recordPlay1.btnRecord.style.border = '2px solid blue';
					recordPlay1.btnSave.style.border = '3px solid black';
					recordPlay1.btnSave.style.background = 'orange';
					recordPlay1.btnStopRecording.style.border = '2px solid blue';
					recordPlay1.btnStopRecording.style.background = 'silver';
					recordPlay1.btnStopRecording.style.color = 'black';
					record = false;
		};
			
		recordPlay1.btnPlay.onclick = function(){
				
				if(play == false && recordArray.length > 0){
					play = true;
					recordPlay1.btnPlay.value = 'PAUSE';
					recordPlay1.btnPlay.style.background = 'red';
					recordPlay1.btnPlay.style.border = '3px solid black';
					recordPlay1.btnStopPlaying.style.border = '3px solid black';
					recordPlay1.btnStopPlaying.style.background = 'blue';
					recordPlay1.btnStopPlaying.style.color = 'white';
					for (var i=0; i<recordArray.length ;i++){
						var player = function(){
							var idx = i;
							return function(){
								recordArray[idx].play();
							};										
						}();
						interval = setTimeout(player,i*600);
					}
				}
				else if(play == true && recordArray.length > 0)
				{	
					play = false;
					console.log(idx);
					recordPlay1.btnPlay.value = 'PLAY';
					recordPlay1.btnPlay.style.background = 'orange';
					recordPlay1.btnPlay.style.border = '3px solid black';
					recordArray[idx].pause();
					window.clearTimeout(interval);
				}
		};
		
		recordPlay1.btnStopPlaying.onclick = function(){
					recordPlay1.btnPlay.value = 'PLAY';
					recordPlay1.btnPlay.style.background = 'silver';
					recordPlay1.btnPlay.style.color = 'black';
					recordPlay1.btnPlay.style.border = '2px solid blue';
					recordPlay1.btnSave.style.border = '3px solid black';
					recordPlay1.btnSave.style.background = 'orange';
					recordPlay1.btnStopPlaying.style.border = '2px solid blue';
					recordPlay1.btnStopPlaying.style.background = 'silver';
					recordPlay1.btnStopPlaying.style.color = 'black';
					play = false;
					recordArray[idx].pause();
					window.clearTimeout(interval);
		};
		
		recordPlay1.btnSave.onclick = function(){
				if(recordArray.length > 0){
					recordPlay1.btnSave.style.color = 'black';
					recordPlay1.btnSave.style.background = 'silver';
					recordPlay1.btnSave.style.border = '2px solid blue';
					recordPlay1.btnStopPlaying.style.border = '2px solid blue';
					recordPlay1.btnStopPlaying.style.background = 'silver';
					recordPlay1.btnStopPlaying.style.color = 'black';
					
					saveInPlaylist();
				}
		}
};

var saveInPlaylist = function(){
		
		typedValue = '';
		myMusic.push(recordArray);
		table.createTable();
		
		recordArray = [];
		
};

var deleteThatRow = function(i){
		myMusic.splice(i,1);
		console.log(myMusic);
		//var trDelete = document.getElementById('i');
		table.tableBlock.deleteRow(i);
};

var playThatRow = function(){
		for(var i=0; i< myMusic.length; i++){
				for(var j=0; j<myMusic[i].length; j++){
					var player = function(){
						var idx = i;
						var jdx = j;
						return function(){
							myMusic[idx][jdx].play();
						};										
					}();
				setTimeout(player,j*1000);	
				}
		}
};

function Table(){
		var that = this;
		this.tableBlock = document.getElementById("store");
		this.createTable = function(){
				var that = this;
				
				
				var clearTable = function(){
					var tableBlock1 = document.getElementById("store");
					var rowCount = tableBlock1.rows.length;
					for(var i=1;i<rowCount;i++){
						tableBlock1.deleteRow(1);
					}
				}();
				
				for (var i=0; i<myMusic.length; i++){
					var music = myMusic[i];
					var tr = document.createElement('tr');
					tr.setAttribute('id', i);
				
					var td0 = document.createElement('td');
					var td1 = document.createElement('td');
					var td2 = document.createElement('td');
					var td3 = document.createElement('td');
					var td4 = document.createElement('td');
					var td5 = document.createElement('td');
					
					tr.appendChild(td0);
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					tr.appendChild(td5);
				
					td0.innerHTML = i;
					td1.innerHTML = 'myMusic'+ i;
					td2.innerHTML = music.length;
					td3.innerHTML = music;
				
					var btnPlayRow = document.createElement('input');
					btnPlayRow.setAttribute('type', 'button');
					btnPlayRow.setAttribute('value', 'Play');
					btnPlayRow.style.background = "silver";
					btnPlayRow.style.borderRadius = "5px";
					
					var btnDeleteRow = document.createElement('input');
					btnDeleteRow.setAttribute('type', 'button');
					btnDeleteRow.setAttribute('value', 'Delete');
					btnDeleteRow.style.background = "silver";
					btnDeleteRow.style.borderRadius = "5px";
					
					td4.appendChild(btnPlayRow);
					td5.appendChild(btnDeleteRow);
					
					btnPlayRow.onclick = function(){
						playThatRow();
					}
				
					btnDeleteRow.onclick = (function(){
						return function () {
							deleteThatRow(i);
						}
					})();
					that.tableBlock.appendChild(tr);
				};
		};
};
/*typed value*/
var getTypedValue = function(){
		var displayDiv = document.getElementById('displayDiv');
		displayDiv.innerHTML = typedValue;
};

/*slider*/
function Slider(options) {
		var start;
		var className = 'slider';
		var duration = 1000;
		if (options && options.className){
				className = options.className;
		}
	
		var animator = new Animator();
		var sliderElement = document.getElementsByClassName(className)[0];
		var totalSlides = sliderElement.children[0].childElementCount;
		var slides = sliderElement.children[0].children;
		var slidesHolder = sliderElement.children[0];
		var currentPosition = 0;
		var slideWidth = 408;
	
		
	// for(var i=1; i<= totalSlides; i++){
				// var change = document.createElement('div');
				// change.className = "changer";
				// change.style.position="absolute";
				// change.style.top=300 + 'px';
				// change.style.left= 5 + i*30 + 'px';
				// sliderElement.appendChild(change)
				// change.onclick= jumpSlide(i);    
		// };

		// function jumpSlide(i){	
				// var temp = i-1	;
				// return function(){
					// currentPosition=temp;			
					// var ml = temp * slideWidth * -1;
					// checkCurrent();			
					// animator.animate(slidesHolder, {marginLeft: ml}, duration);
				
				// };	
		// };

		// function checkCurrent(){
				// for (var i= 0; i < totalSlides; i++){
					// if (i == currentPosition){
						// var get = document.getElementsByClassName('changer')[currentPosition];
						// get.style.background = '#37f10c';
					// }else {
						// var get = document.getElementsByClassName('changer')[i];
						// get.style.background = "#f10c1c";
					// }
				// };
			
		// };
		var right = function(){
				stopSlide();
				currentPosition++;
				if (currentPosition >= totalSlides) {
					currentPosition = 0;
				}
				var ml = currentPosition * slideWidth * -1;
				animator.animate(slidesHolder, {marginLeft: ml}, duration);
				autoSlide();
		};

		var left = function(){
				stopSlide();
				currentPosition--;
				if (currentPosition < 0) {
					currentPosition = slides.length - 1;
				}
				var ml = currentPosition * slideWidth * -1;
				animator.animate(slidesHolder, {marginLeft: ml}, duration);
				autoSlide();
		};
		
		var autoSlide = function(){
				start = setInterval(right , duration*3);
				//checkCurrent();
		};

		var stopSlide = function(){
				clearInterval(start);
		};

		autoSlide();
};

function Animator() {
		var fps = 20;

		this.animate = function (element, props, duration) {
				var intervalDuration = duration / fps;
				var initialPosition = element.style.marginLeft === '' ? 0 : parseInt(element.style.marginLeft);

				var endPosition = props.marginLeft;
				var difference = endPosition - initialPosition;
				var counter = 0;

				var interval = setInterval(function () {
				counter++;
				var step = difference / intervalDuration;
				var noOfIteration = duration/fps;
				var current = initialPosition + (step * counter);
				if(counter >= noOfIteration){
					current = endPosition;
					clearInterval(interval);
				}
				element.style.marginLeft = current + 'px';
				}, intervalDuration);
		};
};
/*slider completed*/
var piano = new Piano();
var recordPlay1 = new RecordPlay();
var table = new Table();
function Main(){
		
		piano.createKeys();
		
		var audio1 = new AudioFile();
		audio1.getAudioFile();
		
		var play1 = new PlayFile(); 
		var restore1 = new RestoreKeys();
		
		window.onkeydown = function(event)
		{	
			play1.playSelectedAudio(event);
		}
		window.onkeyup = function(event)
		{
			restore1.restoreTheKeys(event);
		}
		var action = new Actions();
};
Main();
window.Slider = Slider;
})();