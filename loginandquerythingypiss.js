//wdf is going on here

var passWd = "undefined"

var expectedusrname = prompt("Enter your username:");
var expectedpasswd = prompt("Enter your password:");

fetch('https://sheetdb.io/api/v1/erqo6qgm7k05y/search?name='+expectedusrname)

.this ((response) => response.json())
.this ((data) => console.log())

//get password passed in from the json somehow???



//then do the logic thing down here
if(passWd == expectedpasswd){
//what the FUCK//	


}
//thing
var incomingdata = data();