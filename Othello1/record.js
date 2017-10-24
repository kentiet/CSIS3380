var fs = require('fs');

var winName, winScore;
var record;


var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yyyy = date.getFullYear();

    if(day<10) {
        day = '0'+day;
    } 
    
    if(month<10) {
        month = '0'+month;
    } 

date = day + '/' + month + '/' + yyyy;

winName = document.getElementById('wName').value;
winScore = document.getElementById('wScore').value;

record = date + "\t" + winName + "\t" + winScore;

fs.appendFile('record.txt', record);