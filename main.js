function generateHashtag(str) {
	str = str
		.toLowerCase()
		.split(' ')
		.map(function (word) {
			return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');

	str = str.replace(/ /g, '');
	str = "#" + str;
	if (str == "" || str.length > 140) return "false";
	return str;
}

function firstNonRepeatingLetter(s) {
	let map = new Map();
	let sLow = s.toLowerCase();
	for (let i = 0; i < sLow.length; i++) {
		let current = sLow[i];
		if (map.has(current)) {
			map.set(current, map.get(current) + 1);
		} else {
			map.set(current, 1);
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (map.get(sLow[i]) === 1) return s[i];
	}
	return "";
	// Add your code here
}


function rot13(message) {

	const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
	return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}//your code here

/*function pickPeaks(arr){
  let peak;
  let posi;
  //let pos;
  return arr.reduce(function(peaks,val, i, pos) {
	 if (arr[i+1] > arr[i]) {
		peak = arr[i+1];
		posi = i+1;
	 } else if ((arr[i+1] < arr[i]) && (typeof peak === 'number')) {
		peaks.push(peak);
		pos.push(posi);
		console.log(pos);
		peak = undefined;
		posi = undefined;
	 }
	 return ("pos:"+ pos + "," + "peaks:" +  peaks);
  }, []);
//  return {pos:[],peaks:[]}
}
function findPeaks(arr) {
 var peak;
 let pos = [];
 return arr.reduce(function(peaks, val, i) {
	if (arr[i+1] > arr[i]) {
	  peak = arr[i+1];
	  posi = i+1;
	} else if ((arr[i+1] < arr[i]) && (typeof peak === 'number')) {
	  peaks.push(peak);
	  pos.push(posi);

	  peak = undefined;
	  console.log (posi);
	}
	let s = "pos:" + pos + "peaks" + peaks;
	return s;
 }, []);
}
console.log(findPeaks([1,2,3,6,4,1,2,3,2,1]))

 
function moveZeros(arr) {
  let arrLength = arr.length;
  for (let i=0; i< arrLength; i++){
	 if(arr[i]  === 0) {
		arr.splice(i,1);
		arr.push(0);
	  	
	 }
	 
  }
  return arr;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
*/

function formatDuration(seconds) {
	let year = 0;
	let day = 0;
	let hour = 0;
	let minute = 0;
	let str = "";
	let strYear = "";
	let strDay = "";
	let strHour = "";
	let strMinute = "";
	let strSeconds = "";
	if (seconds == 0) return "now"; 
	while (seconds >= 31536000) {
		seconds -= 31536000;
		year += 1;
	}
	while (seconds >= 86400) {
		day += 1;
		seconds -= 86400;
	}
	while (seconds >= 3600) {
		hour += 1;
		seconds -= 3600;
	}

	while (seconds >= 60) {
		minute += 1;
		seconds -= 60;
	}
	if (year == 1) strYear = "1 year"
	else if (year > 1) {
		strYear = year + " years"
	}

	if (day == 1) strDay += "1 day"
	else if (day > 1) {
		strDay = day + " days"
	}

	if (hour == 1) strHour = "1 hour"
	else if (hour > 1) {
		strHour = hour + " hours"
	}

	if (minute == 1) strMinute = "1 minute"
	else if (minute > 1) {
		strMinute = minute + " minutes"
	}

	if (seconds == 1) strSeconds = "1 second"
	else if (seconds > 1) {
		strSeconds = seconds + " seconds"
	}
	let mas = [strYear, strDay, strHour, strMinute, strSeconds];
	let masLength = mas.length + 2;


	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);
		//console.log("splice");
	}
	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);

	}
	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);

	}

	if (mas.length == 1) {
		str = mas[0];

	}
	else if (mas.length == 2) {
		mas.splice(mas.length - 1, 0, " and ");
		for (let i = 0; i < mas.length; i++) {
			str += mas[i];
		}
	}
		else if (mas.length == 3) {
			mas.splice(mas.length - 1, 0, " and ");
			mas.splice(1, 0, ", ");
				for (let i = 0; i < mas.length; i++) {
				str += mas[i];
			}
		}

			else if (mas.length == 4) {
				mas.splice(mas.length - 1, 0, " and ");
				mas.splice(1, 0, ", ");
				mas.splice(3, 0, ", ");
					for (let i = 0; i < mas.length; i++) {
					str += mas[i];
				}
}

else if (mas.length == 5) {
	mas.splice(mas.length - 1, 0, " and ");
	mas.splice(1, 0, ", ");
	mas.splice(3, 0, ", ");
	mas.splice(5, 0, ", ");
		for (let i = 0; i < mas.length; i++) {
		str += mas[i];
	}
}

			let strLength2 = str.length;
			//console.log(str[str.length-1]);
			for (let i = 0; i < strLength2; i++) {
				if (str[str.length - 1] == " ") str.slice(0, -1);
			}
		
		return str;
	}


	console.log(formatDuration(31536000 + 86400 + 3661));
	31536000 * 1 + 86400 * 5 + 3600 * 6


	function pigIt(str){
		//Code here
		str.push(str.slice(0,1));
		console.log(str);
	 }

	 pigIt("ASysga")

	 function squareSum(numbers){
		let sum = 0;
	 for (let i = 0, i < numbers.length, i++){
		sum += number[i]*number[i];
	 }
		return sum;
	 }