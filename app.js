var fs = require('fs');
var path = require('path');


function pullData(){
	var look = fs.readFileSync('somefile.txt');

	let checkString = look.toString();
	let secretWord = "erik";
	let searchWord = erica.indexOf(secret);
	console.log(searchWord); 
}




function pullData(){
	var secret = "erik";

	fs.readFile('somefile.txt', (err, data) => {
		if(err){
			console.log(err);
			return
		}else{
			let erica = data.toString();
			let erica2 = erica.indexOf(secret)
			console.log(erica2);
		}
	})






